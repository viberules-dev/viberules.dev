import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface LlmProject {
  id: string
  name: string
  description: string
  website: string
  llms_txt: string
  llms_full_txt?: string
  tokens: number
  full_tokens?: number
  category?: string
  is_verified: boolean
  created_at: string
  updated_at: string
}

export interface CreateLlmProject {
  name: string
  description: string
  website: string
  llms_txt: string
  llms_full_txt?: string
  tokens: number
  full_tokens?: number
  category?: string
}

export interface UpdateLlmProject {
  name?: string
  description?: string
  website?: string
  llms_txt?: string
  llms_full_txt?: string
  tokens?: number
  full_tokens?: number
  category?: string
  is_verified?: boolean
}