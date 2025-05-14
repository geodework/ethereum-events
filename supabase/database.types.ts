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
      cities: {
        Row: {
          country_id: number | null
          id: number
          name: string
        }
        Insert: {
          country_id?: number | null
          id?: number
          name: string
        }
        Update: {
          country_id?: number | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_countries_id_fk"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      continents: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      countries: {
        Row: {
          continent_id: number | null
          country_code: string
          id: number
          name: string
          official_name: string
        }
        Insert: {
          continent_id?: number | null
          country_code: string
          id?: number
          name: string
          official_name: string
        }
        Update: {
          continent_id?: number | null
          country_code?: string
          id?: number
          name?: string
          official_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "countries_continent_id_continents_id_fk"
            columns: ["continent_id"]
            isOneToOne: false
            referencedRelation: "continents"
            referencedColumns: ["id"]
          },
        ]
      }
      event_categories: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      event_category_events: {
        Row: {
          category_id: number
          event_id: number
          id: number
        }
        Insert: {
          category_id: number
          event_id: number
          id?: number
        }
        Update: {
          category_id?: number
          event_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_category_events_category_id_event_categories_id_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_category_events_event_id_events_id_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_domain_events: {
        Row: {
          domain_id: number
          event_id: number
          id: number
        }
        Insert: {
          domain_id: number
          event_id: number
          id?: number
        }
        Update: {
          domain_id?: number
          event_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_domain_events_domain_id_event_domains_id_fk"
            columns: ["domain_id"]
            isOneToOne: false
            referencedRelation: "event_domains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_domain_events_event_id_events_id_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_domains: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          contacts: string[] | null
          country_id: number | null
          created_at: string
          end_date_time: string | null
          has_timezone: boolean
          id: number
          links: string[] | null
          location: string | null
          name: string
          socials: string[] | null
          start_date_time: string | null
          updated_at: string
          venue_type: Database["public"]["Enums"]["venue_type_enum"] | null
        }
        Insert: {
          contacts?: string[] | null
          country_id?: number | null
          created_at?: string
          end_date_time?: string | null
          has_timezone?: boolean
          id?: number
          links?: string[] | null
          location?: string | null
          name: string
          socials?: string[] | null
          start_date_time?: string | null
          updated_at?: string
          venue_type?: Database["public"]["Enums"]["venue_type_enum"] | null
        }
        Update: {
          contacts?: string[] | null
          country_id?: number | null
          created_at?: string
          end_date_time?: string | null
          has_timezone?: boolean
          id?: number
          links?: string[] | null
          location?: string | null
          name?: string
          socials?: string[] | null
          start_date_time?: string | null
          updated_at?: string
          venue_type?: Database["public"]["Enums"]["venue_type_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "events_country_id_countries_id_fk"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      venue_type_enum: "in_person" | "virtual" | "hybrid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      venue_type_enum: ["in_person", "virtual", "hybrid"],
    },
  },
} as const
