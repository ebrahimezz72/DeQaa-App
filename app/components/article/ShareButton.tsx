"use client";

import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export default function ShareButton({ title, url, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if share cancelled or failed
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={
        className ||
        "px-5 bg-surface-container-high text-primary py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-surface-container-highest border border-outline-variant/20 font-bold text-sm"
      }
      title="مشاركة المقال"
    >
      <span className="material-symbols-outlined text-xl">
        {copied ? "check" : "share"}
      </span>
      <span>{copied ? "تم نسخ الرابط" : "مشاركة"}</span>
    </button>
  );
}
