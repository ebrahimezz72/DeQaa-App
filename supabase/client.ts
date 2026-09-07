import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ebbcufglxefxqqipqeay.supabase.co'

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_5B0bKzSXuXPeGwYvHqS67A_LEu95wDl'

export const supabase = createClient(supabaseUrl, supabaseKey)
