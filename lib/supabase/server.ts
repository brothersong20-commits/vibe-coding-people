import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { Database } from "@/lib/database.types";

// 세션 인식 RSC / Route Handler 용 클라이언트.
// cookies() 를 사용하므로 build-time 컨텍스트(generateStaticParams 등)에서는
// 호출 불가 — 그때는 createStaticClient 를 사용한다.
export async function createSessionClient() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // RSC 컨텍스트에서는 set 이 실패할 수 있다. middleware 에서 갱신될 것이므로 무시.
          }
        },
      },
    },
  );
}

// cookies 의존 없는 anon 정적 클라이언트.
// generateStaticParams / 빌드 타임 / revalidate 백그라운드 fetch 에서 사용.
// 4.0 의 콘텐츠 SELECT 는 모두 anon RLS 로 허용되어 있다.
export function createStaticClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
