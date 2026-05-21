import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/database.types";

// 브라우저용 Supabase 클라이언트. 4.0 에서는 사용처가 없지만 4.1 Google Auth 대비.
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
