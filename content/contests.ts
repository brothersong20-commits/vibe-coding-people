export type ContestStatus = "모집중" | "예정" | "마감";

export type Contest = {
  id: string;
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
};

export const contests: Contest[] = [
  {
    id: "c-2026-mcst-ai-data",
    title: "제4회 문화체육관광 인공지능·데이터 활용 공모전",
    host: "문화체육관광부",
    organizer: "KCISA 한국문화정보원",
    startDate: "2026-04-27",
    endDate: "2026-06-26",
    prize: "총 5,000만원 규모 · 3개 분야 15개 작품 시상 (대상 1,000만원~)",
    fields: ["신기술 활용(ADX)", "문화데이터 활용", "데이터 분석"],
    eligibility: "대한민국 국민 누구나 · 개인 또는 5인 이내 단체 (기관·기업 참가 가능)",
    url: "https://www.culture.go.kr/digicon/pages/contest_1",
    status: "모집중",
    tags: ["AI", "문화데이터", "공공"],
  },
  {
    id: "c-2026-dummy-vercel-hack",
    title: "Vercel Build for Vibe Hackathon (가상)",
    host: "Vercel Community Korea",
    organizer: "Vibe Coding People (지원)",
    startDate: "2026-07-15",
    endDate: "2026-08-20",
    prize: "1등 Vercel Pro 1년 + 모임 후원 50만원",
    fields: ["웹 서비스", "AI 활용"],
    eligibility: "Next.js 또는 AI SDK를 활용한 모든 사이드 프로젝트",
    url: "https://vercel.com/",
    status: "예정",
    tags: ["Hackathon", "Next.js", "Vercel"],
  },
  {
    id: "c-2026-dummy-koreaai-grant",
    title: "Korea AI Open Source Grant 2026 (가상)",
    host: "한국AI재단",
    organizer: "한국AI재단",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    prize: "선정작 10팀 · 팀당 200만원 + 멘토링",
    fields: ["오픈소스 AI", "개발자 도구"],
    eligibility: "GitHub에 공개된 OSS 프로젝트를 1년 이내 유지보수해온 팀",
    url: "https://example.com/korea-ai-grant",
    status: "마감",
    tags: ["OSS", "AI", "Grant"],
  },
];

export function getOpenContests(): Contest[] {
  return contests.filter((c) => c.status !== "마감");
}
