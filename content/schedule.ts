export type ScheduleStatus = "예정" | "진행중" | "완료";

export type ScheduleItem = {
  id: string;
  start: string;
  end?: string;
  title: string;
  location: string;
  description: string;
  status: ScheduleStatus;
  tags: string[];
};

export const schedule: ScheduleItem[] = [
  {
    id: "s-2026-06-08",
    start: "2026-06-08T19:00:00+09:00",
    end: "2026-06-08T21:30:00+09:00",
    title: "6월 정기 빌드 세션",
    location: "서울 강남 · 추후 공지",
    description:
      "각자 만들고 있는 프로젝트를 보여주고, 막힌 부분을 함께 풀어내는 빌드 세션입니다.",
    status: "예정",
    tags: ["오프라인", "정기"],
  },
  {
    id: "s-2026-06-15",
    start: "2026-06-15T20:00:00+09:00",
    end: "2026-06-15T21:30:00+09:00",
    title: "공모전 함께 풀기 — 문화체육관광 AI 공모전 킥오프",
    location: "온라인 · Discord",
    description:
      "이번 공모전을 함께 도전할 팀을 꾸리는 킥오프. 주제 후보를 나누고 역할을 정합니다.",
    status: "예정",
    tags: ["온라인", "공모전"],
  },
  {
    id: "s-2026-06-22",
    start: "2026-06-22T20:00:00+09:00",
    end: "2026-06-22T21:30:00+09:00",
    title: "AI 코딩 도구 라이브 데모",
    location: "온라인 · Discord",
    description:
      "Claude Code, Cursor, Codex 등 최신 AI 코딩 도구를 화면 공유로 함께 사용해보는 라이브 세션.",
    status: "예정",
    tags: ["온라인", "데모"],
  },
  {
    id: "s-2026-07-06",
    start: "2026-07-06T19:00:00+09:00",
    end: "2026-07-06T21:30:00+09:00",
    title: "7월 정기 빌드 세션",
    location: "서울 성수 · 코워킹 스페이스",
    description:
      "공모전 출품작 중간 점검과 다른 사이드 프로젝트 진행 상황을 공유합니다.",
    status: "예정",
    tags: ["오프라인", "정기"],
  },
  {
    id: "s-2026-05-11",
    start: "2026-05-11T19:00:00+09:00",
    end: "2026-05-11T21:00:00+09:00",
    title: "5월 데모데이",
    location: "서울 성수 · 코워킹 스페이스",
    description:
      "5월 한 달 동안 만든 결과물을 발표한 첫 데모데이. 8개 프로젝트가 시연되었습니다.",
    status: "완료",
    tags: ["오프라인", "데모데이"],
  },
  {
    id: "s-2026-04-27",
    start: "2026-04-27T20:00:00+09:00",
    end: "2026-04-27T21:30:00+09:00",
    title: "Vibe Coding People 시작 미팅",
    location: "온라인 · Discord",
    description:
      "모임의 운영 원칙과 첫 빌드 주제를 정한 시작 미팅. 운영자 제이쏭과 초기 멤버 5명이 모였습니다.",
    status: "완료",
    tags: ["온라인", "킥오프"],
  },
];
