// Phase 4.0 1회성 시드 스크립트.
// content/*.ts 배열 + content/**/*.mdx 본문을 Supabase 콘텐츠 테이블로 업서트한다.
// 재실행해도 onConflict='slug' 로 idempotent.
//
// 실행:  npm run seed
// 필요 환경변수: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (.env.local)

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

import { notices } from "../content/notices";
import { schedule } from "../content/schedule";
import { contests } from "../content/contests";
import { projects } from "../content/projects";
import { insights } from "../content/insights";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceRole) {
  console.error(
    "환경변수 누락: .env.local 의 NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 를 확인하세요.",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRole, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function readMdx(relPath: string): string {
  return fs.readFileSync(path.join(ROOT, relPath), "utf-8").trim();
}

async function seedNotices() {
  const rows = notices.map((n, i) => ({
    slug: n.id,
    title: n.title,
    date: n.date,
    category: n.category,
    summary: n.summary,
    sort_order: i,
  }));
  const { error } = await supabase
    .from("notices")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ notices ${rows.length}`);
}

async function seedSchedule() {
  const rows = schedule.map((s, i) => ({
    slug: s.id,
    start_at: s.start,
    end_at: s.end ?? null,
    title: s.title,
    location: s.location,
    description: s.description,
    status: s.status,
    tags: s.tags,
    sort_order: i,
  }));
  const { error } = await supabase
    .from("schedule_items")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ schedule_items ${rows.length}`);
}

async function seedContests() {
  const rows = contests.map((c, i) => ({
    slug: c.id,
    title: c.title,
    host: c.host,
    organizer: c.organizer ?? null,
    start_date: c.startDate,
    end_date: c.endDate,
    prize: c.prize,
    fields: c.fields,
    eligibility: c.eligibility,
    url: c.url,
    status: c.status,
    tags: c.tags,
    summary: c.summary ?? null,
    body_md: readMdx(`content/contests/${c.id}.mdx`),
    sort_order: i,
  }));
  const { error } = await supabase
    .from("contests")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ contests ${rows.length}`);
  // 1단계 contests 의 teams[] 는 모두 빈 배열이라 contest_teams 시드는 생략.
}

async function seedProjects() {
  const rows = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    members: p.members,
    thumbnail: p.thumbnail ?? null,
    github: p.github ?? null,
    demo: p.demo ?? null,
    sort_order: p.order,
    body_md: readMdx(`content/projects/${p.slug}.mdx`),
  }));
  const { error } = await supabase
    .from("projects")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ projects ${rows.length}`);
}

async function seedInsights() {
  const rows = insights.map((ins, i) => ({
    slug: ins.slug,
    title: ins.title,
    date: ins.date,
    category: ins.category,
    summary: ins.summary,
    tags: ins.tags,
    author: ins.author,
    read_time: ins.readTime,
    body_md: readMdx(`content/insights/${ins.slug}.mdx`),
    sort_order: i,
  }));
  const { error } = await supabase
    .from("insights")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ insights ${rows.length}`);
}

async function main() {
  console.log("→ Supabase 시드 시작");
  await seedNotices();
  await seedSchedule();
  await seedContests();
  await seedProjects();
  await seedInsights();
  console.log("✔ 시드 완료");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
