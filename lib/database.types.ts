// Supabase MCP `generate_typescript_types` 산출물.
// 스키마 변경 시 `mcp__plugin_supabase_supabase__generate_typescript_types` 재실행 후 갱신한다.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      contest_teams: {
        Row: {
          contest_id: string
          created_at: string
          demo_url: string | null
          github_url: string | null
          id: string
          members: string[]
          name: string
          note: string | null
          sort_order: number
          status: string
          updated_at: string
        }
        Insert: {
          contest_id: string
          created_at?: string
          demo_url?: string | null
          github_url?: string | null
          id?: string
          members?: string[]
          name: string
          note?: string | null
          sort_order?: number
          status: string
          updated_at?: string
        }
        Update: {
          contest_id?: string
          created_at?: string
          demo_url?: string | null
          github_url?: string | null
          id?: string
          members?: string[]
          name?: string
          note?: string | null
          sort_order?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contest_teams_contest_id_fkey"
            columns: ["contest_id"]
            isOneToOne: false
            referencedRelation: "contests"
            referencedColumns: ["id"]
          },
        ]
      }
      contests: {
        Row: {
          body_md: string
          created_at: string
          eligibility: string
          end_date: string
          fields: string[]
          host: string
          id: string
          organizer: string | null
          prize: string
          slug: string
          sort_order: number
          start_date: string
          status: string
          summary: string | null
          tags: string[]
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          body_md?: string
          created_at?: string
          eligibility: string
          end_date: string
          fields?: string[]
          host: string
          id?: string
          organizer?: string | null
          prize: string
          slug: string
          sort_order?: number
          start_date: string
          status: string
          summary?: string | null
          tags?: string[]
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          body_md?: string
          created_at?: string
          eligibility?: string
          end_date?: string
          fields?: string[]
          host?: string
          id?: string
          organizer?: string | null
          prize?: string
          slug?: string
          sort_order?: number
          start_date?: string
          status?: string
          summary?: string | null
          tags?: string[]
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      insights: {
        Row: {
          author: string
          body_md: string
          category: string
          created_at: string
          date: string
          id: string
          read_time: number
          slug: string
          sort_order: number
          summary: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          body_md?: string
          category: string
          created_at?: string
          date: string
          id?: string
          read_time: number
          slug: string
          sort_order?: number
          summary: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          body_md?: string
          category?: string
          created_at?: string
          date?: string
          id?: string
          read_time?: number
          slug?: string
          sort_order?: number
          summary?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      members: {
        Row: {
          created_at: string
          email: string
          google_sub: string | null
          id: string
          name: string | null
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          google_sub?: string | null
          id?: string
          name?: string | null
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          google_sub?: string | null
          id?: string
          name?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      notices: {
        Row: {
          category: string
          created_at: string
          date: string
          id: string
          slug: string
          sort_order: number
          summary: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          date: string
          id?: string
          slug: string
          sort_order?: number
          summary: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          date?: string
          id?: string
          slug?: string
          sort_order?: number
          summary?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          body_md: string
          created_at: string
          demo: string | null
          github: string | null
          id: string
          members: string[]
          slug: string
          sort_order: number
          summary: string
          tags: string[]
          thumbnail: string | null
          title: string
          updated_at: string
        }
        Insert: {
          body_md?: string
          created_at?: string
          demo?: string | null
          github?: string | null
          id?: string
          members?: string[]
          slug: string
          sort_order?: number
          summary: string
          tags?: string[]
          thumbnail?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          body_md?: string
          created_at?: string
          demo?: string | null
          github?: string | null
          id?: string
          members?: string[]
          slug?: string
          sort_order?: number
          summary?: string
          tags?: string[]
          thumbnail?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      schedule_items: {
        Row: {
          created_at: string
          description: string
          end_at: string | null
          id: string
          location: string
          slug: string
          sort_order: number
          start_at: string
          status: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          end_at?: string | null
          id?: string
          location: string
          slug: string
          sort_order?: number
          start_at: string
          status: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          end_at?: string | null
          id?: string
          location?: string
          slug?: string
          sort_order?: number
          start_at?: string
          status?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
