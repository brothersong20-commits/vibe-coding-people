export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  members: string[];
  thumbnail?: string;
  github?: string;
  demo?: string;
  order: number;
};

export const projects: Project[] = [
  {
    slug: "what-to-eat-today",
    title: "오늘 뭐 먹지?",
    summary:
      "메뉴 고르기에 지친 사람들을 위한 가벼운 메뉴 추천 사이드 프로젝트. Next.js + Vercel.",
    tags: ["Next.js", "Vercel", "Vibe Coding"],
    members: ["제이쏭"],
    demo: "https://what-to-eat-today-sand.vercel.app/",
    order: 1,
  },
  {
    slug: "vcp-homepage",
    title: "Vibe Coding People 홈페이지",
    summary:
      "모임의 공지·일정·프로젝트·공모전을 한곳에 모은 메인 허브. Next.js + Vercel 배포 예정.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    members: ["제이쏭"],
    github: "#",
    demo: "#",
    order: 2,
  },
  {
    slug: "ai-recipe-coach",
    title: "AI 레시피 코치",
    summary:
      "냉장고 사진을 찍으면 만들 수 있는 요리를 추천해주는 멀티모달 AI 사이드 프로젝트.",
    tags: ["AI", "Vision", "Next.js"],
    members: ["멤버 A", "멤버 B"],
    github: "#",
    order: 3,
  },
  {
    slug: "claude-code-cheatsheet",
    title: "Claude Code 치트시트",
    summary:
      "Claude Code 단축키·슬래시 커맨드·훅 설정을 한 페이지에 모은 작은 참고용 사이트.",
    tags: ["문서", "DX", "Astro"],
    members: ["멤버 C"],
    github: "#",
    demo: "#",
    order: 4,
  },
  {
    slug: "vibe-snippets",
    title: "Vibe Snippets",
    summary:
      "모임 멤버끼리 자주 쓰는 코드 스니펫을 공유하는 작은 보드. 추후 검색·태그 추가 예정.",
    tags: ["TypeScript", "Vercel"],
    members: ["멤버 D", "멤버 E"],
    github: "#",
    order: 5,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOrderedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
