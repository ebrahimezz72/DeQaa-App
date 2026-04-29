const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ebbcufglxefxqqipqeay.supabase.co';
const supabaseKey = 'sb_publishable_5B0bKzSXuXPeGwYvHqS67A_LEu95wDl';

const supabase = createClient(supabaseUrl, supabaseKey);

async function getIds() {
  const { data: lawyers } = await supabase.from('lawyers').select('id').limit(1);
  const { data: categories } = await supabase.from('categories').select('id').limit(1);

  console.log('Lawyer ID:', lawyers?.[0]?.id);
  console.log('Category ID:', categories?.[0]?.id);
}

getIds();
