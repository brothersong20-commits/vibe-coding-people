// 도메인 타입. UI 컴포넌트와 페이지는 이 파일의 타입만 본다.
// DB row → 도메인 타입 매핑은 lib/content.ts 가 담당한다.

// ===== Notice =====
export type NoticeCategory = "공지" | "이벤트" | "회고";

export type Notice = {
  id: string; // DB notices.slug 에 대응 (자연키, 라우트에는 노출 안 됨)
  title: string;
  date: string;
  category: NoticeCategory;
  summary: string;
};

// ===== Schedule =====
export type ScheduleStatus = "예정" | "진행중" | "완료";

export type ScheduleItem = {
  id: string; // DB schedule_items.slug
  start: string;
  end?: string;
  title: string;
  location: string;
  description: string;
  status: ScheduleStatus;
  tags: string[];
};

// ===== Contest =====
export type ContestStatus = "모집중" | "예정" | "마감";
export type ContestTeamStatus = "모집중" | "확정" | "출품완료";

export type ContestTeam = {
  name: string;
  members: string[];
  status: ContestTeamStatus;
  note?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export type Contest = {
  id: string; // DB contests.slug. 라우트 segment 로도 사용.
  title: string;
  host: string;
  organizer?: string;
  startDate: string;
  endDate: string;
  prize: string;
  fields: string[];
  eligibility: string;
  url: string;
  status: ContestStatus;
  tags: string[];
  summary?: string;
  teams: ContestTeam[];
};

// ===== Project =====
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  members: string[];
  thumbnail?: string;
  github?: string;
  demo?: string;
  order: number; // DB projects.sort_order
};

// ===== Insight =====
export type InsightCategory = "AI 코딩" | "도구" | "워크플로우" | "회고";

export type Insight = {
  id: string; // slug 와 동일 값
  slug: string;
  title: string;
  date: string;
  category: InsightCategory;
  summary: string;
  tags: string[];
  author: string;
  readTime: number; // DB insights.read_time
};
