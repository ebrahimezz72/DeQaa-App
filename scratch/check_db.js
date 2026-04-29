const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ebbcufglxefxqqipqeay.supabase.co';
const supabaseKey = 'sb_publishable_5B0bKzSXuXPeGwYvHqS67A_LEu95wDl';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
  const { data: articles, error: artError } = await supabase.from('articles').select('count', { count: 'exact' });
  const { data: lawyers, error: lawError } = await supabase.from('lawyers').select('count', { count: 'exact' });
  const { data: categories, error: catError } = await supabase.from('categories').select('count', { count: 'exact' });

  console.log('Articles count:', articles ? articles[0]?.count : (artError ? artError.message : 'N/A'));
  console.log('Lawyers count:', lawyers ? lawyers[0]?.count : (lawError ? lawError.message : 'N/A'));
  console.log('Categories count:', categories ? categories[0]?.count : (catError ? catError.message : 'N/A'));

  const { data: allArticles } = await supabase.from('articles').select('*');
  console.log('All articles:', JSON.stringify(allArticles, null, 2));
}

checkData();
