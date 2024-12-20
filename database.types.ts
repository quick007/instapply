export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applied: {
        Row: {
          job_id: number
          saved: boolean
          user_id: string
        }
        Insert: {
          job_id: number
          saved?: boolean
          user_id?: string
        }
        Update: {
          job_id?: number
          saved?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applied_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "links"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applied_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      links: {
        Row: {
          coding_lang: string[] | null
          edu_level: string | null
          graduation_year: string | null
          id: number
          job_title: string | null
          link: string
          parsed: boolean
        }
        Insert: {
          coding_lang?: string[] | null
          edu_level?: string | null
          graduation_year?: string | null
          id?: number
          job_title?: string | null
          link: string
          parsed?: boolean
        }
        Update: {
          coding_lang?: string[] | null
          edu_level?: string | null
          graduation_year?: string | null
          id?: number
          job_title?: string | null
          link?: string
          parsed?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          cover_letter: string | null
          degree: string | null
          disability: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          github: string | null
          grad_year: string | null
          hpa: string | null
          id: string
          languages: string[] | null
          last_name: string | null
          linked_in: string | null
          made_profile: boolean
          major: string | null
          phone: string | null
          resume: string | null
          school: string | null
          updated_at: string | null
          veteran: string | null
          website: string | null
        }
        Insert: {
          cover_letter?: string | null
          degree?: string | null
          disability?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          github?: string | null
          grad_year?: string | null
          hpa?: string | null
          id: string
          languages?: string[] | null
          last_name?: string | null
          linked_in?: string | null
          made_profile?: boolean
          major?: string | null
          phone?: string | null
          resume?: string | null
          school?: string | null
          updated_at?: string | null
          veteran?: string | null
          website?: string | null
        }
        Update: {
          cover_letter?: string | null
          degree?: string | null
          disability?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          github?: string | null
          grad_year?: string | null
          hpa?: string | null
          id?: string
          languages?: string[] | null
          last_name?: string | null
          linked_in?: string | null
          made_profile?: boolean
          major?: string | null
          phone?: string | null
          resume?: string | null
          school?: string | null
          updated_at?: string | null
          veteran?: string | null
          website?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
