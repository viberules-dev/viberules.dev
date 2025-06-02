import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Types for our database tables
export interface LlmTxtProject {
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

export interface CreateLlmTxtProject {
  name: string
  description: string
  website: string
  llms_txt: string
  llms_full_txt?: string
  tokens: number
  full_tokens?: number
  category?: string
}

export interface UpdateLlmTxtProject {
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