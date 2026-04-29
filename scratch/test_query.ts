import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function testQuery() {
  const { data, error } = await supabase
    .from('lawyer_categories')
    .select('lawyer_id, categories(id, name)')
  
  if (error) {
    console.error('ERROR DETAILS:', JSON.stringify(error, null, 2))
  } else {
    console.log('SUCCESS:', data?.length, 'rows fetched')
  }
}

testQuery()
