export type Notice = {
  id: string;
  title: string;
  date: string;
  category: "공지" | "이벤트" | "회고";
  summary: string;
};

export const notices: Notice[] = [
  {
    id: "n-2026-05-21",
    title: "공모전 정보 탭이 열렸습니다",
    date: "2026-05-21",
    category: "공지",
    summary:
      "/contests 탭이 생겼습니다. 첫 공모전은 문화체육관광 인공지능·데이터 활용 공모전. 함께 도전하실 분 모집합니다.",
  },
  {
    id: "n-2026-05-20",
    title: "Vibe Coding People 첫 모임 안내",
    date: "2026-05-20",
    category: "공지",
    summary:
      "함께 사이드 프로젝트를 만들 분들을 모집합니다. 첫 번째 오프라인 모임 일정과 참여 방법을 공유합니다.",
  },
  {
    id: "n-2026-05-18",
    title: "6월 정기 빌드 세션 신청 오픈",
    date: "2026-05-18",
    category: "이벤트",
    summary:
      "6월 8일 정기 빌드 세션 참가 신청을 받습니다. 빌드 중인 프로젝트 1줄 소개와 함께 디스코드에서 신청해 주세요.",
  },
  {
    id: "n-2026-05-15",
    title: "5월 데모데이 — 각자 만든 것 보여주기",
    date: "2026-05-15",
    category: "이벤트",
    summary:
      "한 달 동안 만든 사이드 프로젝트를 5분씩 시연합니다. 발표자 신청은 디스코드에서.",
  },
  {
    id: "n-2026-05-08",
    title: "AI 코딩 도구 라이브 데모 — 6월 22일",
    date: "2026-05-08",
    category: "이벤트",
    summary:
      "Claude Code, Cursor, Codex를 화면 공유로 사용해보는 라이브 세션을 엽니다. 사전 질문도 받습니다.",
  },
  {
    id: "n-2026-05-01",
    title: "운영 원칙 정리 — 우리는 이렇게 모입니다",
    date: "2026-05-01",
    category: "회고",
    summary:
      "강요 없는 모임, 결과물 우선 모임. Vibe Coding People이 지향하는 운영 원칙을 짧게 정리했습니다.",
  },
];
