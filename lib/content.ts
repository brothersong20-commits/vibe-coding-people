import "server-only";
import { cache } from "react";
import { createStaticClient } from "@/lib/supabase/server";
import type {
  Contest,
  ContestStatus,
  ContestTeam,
  ContestTeamStatus,
  Insight,
  InsightCategory,
  Notice,
  NoticeCategory,
  Project,
  ScheduleItem,
  ScheduleStatus,
} from "@/lib/types";

// ===== Notice =====
export const getNotices = cache(async (): Promise<Notice[]> => {
  const supabase = createStaticClient();
  const { data, error } = await supabase
    .from("notices")
    .select("slug,title,date,category,summary")
    .order("date", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.slug,
    title: row.title,
    date: row.date,
    category: row.category as NoticeCategory,
    summary: row.summary,
  }));
});

// ===== Schedule =====
export const getSchedule = cache(async (): Promise<ScheduleItem[]> => {
  const supabase = createStaticClient();
  const { data, error } = await supabase
    .from("schedule_items")
    .select("slug,start_at,end_at,title,location,description,status,tags")
    .order("start_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.slug,
    start: row.start_at,
    end: row.end_at ?? undefined,
    title: row.title,
    location: row.location,
    description: row.description,
    status: row.status as ScheduleStatus,
    tags: row.tags,
  }));
});

// ===== Contest =====
type ContestRow = {
  slug: string;
  title: string;
  host: string;
  organizer: string | null;
  start_date: string;
  end_date: string;
  prize: string;
  fields: string[];
  eligibility: string;
  url: string;
  status: string;
  tags: string[];
  summary: string | null;
  body_md: string;
  contest_teams?: {
    name: string;
    members: string[];
    status: string;
    note: string | null;
    github_url: string | null;
    demo_url: string | null;
    sort_order: number;
  }[];
};

const CONTEST_SELECT =
  "slug,title,host,organizer,start_date,end_date,prize,fields,eligibility,url,status,tags,summary,body_md,contest_teams(name,members,status,note,github_url,demo_url,sort_order)";

function mapContestRow(row: ContestRow): Contest & { body: string } {
  const teams: ContestTeam[] = [...(row.contest_teams ?? [])]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((t) => ({
      name: t.name,
      members: t.members,
      status: t.status as ContestTeamStatus,
      note: t.note ?? undefined,
      githubUrl: t.github_url ?? undefined,
      demoUrl: t.demo_url ?? undefined,
    }));
  return {
    id: row.slug,
    title: row.title,
    host: row.host,
    organizer: row.organizer ?? undefined,
    startDate: row.start_date,
    endDate: row.end_date,
    prize: row.prize,
    fields: row.fields,
    eligibility: row.eligibility,
    url: row.url,
    status: row.status as ContestStatus,
    tags: row.tags,
    summary: row.summary ?? undefined,
    teams,
    body: row.body_md,
  };
}

export const getOrderedContests = cache(async (): Promise<Contest[]> => {
  const supabase = createStaticClient();
  const { data, error } = await supabase
    .from("contests")
    .select(CONTEST_SELECT)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return ((data ?? []) as ContestRow[]).map((row) => {
    const mapped = mapContestRow(row);
    const { body: _body, ...rest } = mapped;
    return rest;
  });
});

export const getOpenContests = cache(async (): Promise<Contest[]> => {
  const all = await getOrderedContests();
  return all.filter((c) => c.status !== "마감");
});

export const getContestById = cache(
  async (id: string): Promise<(Contest & { body: string }) | null> => {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("contests")
      .select(CONTEST_SELECT)
      .eq("slug", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapContestRow(data as ContestRow);
  },
);

// ===== Project =====
type ProjectRow = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  members: string[];
  thumbnail: string | null;
  github: string | null;
  demo: string | null;
  sort_order: number;
  body_md?: string;
};

function mapProjectRow(row: ProjectRow): Project & { body: string } {
  return {
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    tags: row.tags,
    members: row.members,
    thumbnail: row.thumbnail ?? undefined,
    github: row.github ?? undefined,
    demo: row.demo ?? undefined,
    order: row.sort_order,
    body: row.body_md ?? "",
  };
}

export const getOrderedProjects = cache(async (): Promise<Project[]> => {
  const supabase = createStaticClient();
  const { data, error } = await supabase
    .from("projects")
    .select("slug,title,summary,tags,members,thumbnail,github,demo,sort_order")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return ((data ?? []) as ProjectRow[]).map((row) => {
    const { body: _body, ...rest } = mapProjectRow(row);
    return rest;
  });
});

export const getProjectBySlug = cache(
  async (slug: string): Promise<(Project & { body: string }) | null> => {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("projects")
      .select(
        "slug,title,summary,tags,members,thumbnail,github,demo,sort_order,body_md",
      )
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapProjectRow(data as ProjectRow);
  },
);

// ===== Insight =====
type InsightRow = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  tags: string[];
  author: string;
  read_time: number;
  body_md?: string;
};

function mapInsightRow(row: InsightRow): Insight & { body: string } {
  return {
    id: row.slug,
    slug: row.slug,
    title: row.title,
    date: row.date,
    category: row.category as InsightCategory,
    summary: row.summary,
    tags: row.tags,
    author: row.author,
    readTime: row.read_time,
    body: row.body_md ?? "",
  };
}

export const getOrderedInsights = cache(async (): Promise<Insight[]> => {
  const supabase = createStaticClient();
  const { data, error } = await supabase
    .from("insights")
    .select("slug,title,date,category,summary,tags,author,read_time")
    .order("date", { ascending: false });
  if (error) throw error;
  return ((data ?? []) as InsightRow[]).map((row) => {
    const { body: _body, ...rest } = mapInsightRow(row);
    return rest;
  });
});

export const getInsightBySlug = cache(
  async (slug: string): Promise<(Insight & { body: string }) | null> => {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("insights")
      .select(
        "slug,title,date,category,summary,tags,author,read_time,body_md",
      )
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapInsightRow(data as InsightRow);
  },
);
