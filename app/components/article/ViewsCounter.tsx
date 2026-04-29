"use client";

import { useEffect } from "react";
import { supabase } from "../../../supabase/client";

export default function ViewsCounter({ articleId }: { articleId: number }) {
  useEffect(() => {
    const increment = async () => {
      try {
        await supabase.rpc('increment_views', { article_id: articleId });
      } catch (err) {
        console.error("Failed to increment views:", err);
      }
    };
    
    increment();
  }, [articleId]);

  return null;
}
