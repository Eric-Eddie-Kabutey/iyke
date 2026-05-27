"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { ALL_ARTICLES, FEATURED_ARTICLE } from "@/constants/articles";

const TAGS = ["All", "IoT", "Security", "Cloud", "Cybersecurity", "Smart Building", "Networking", "Hardware"];
const PAGE_SIZE = 6;

const BENTO_SPANS: { col: string; row: string; textSize: string }[] = [
  { col: "lg:col-span-2", row: "h-80",  textSize: "text-lg" },
  { col: "lg:col-span-1", row: "h-80",  textSize: "text-sm" },
  { col: "lg:col-span-1", row: "h-64",  textSize: "text-sm" },
  { col: "lg:col-span-1", row: "h-64",  textSize: "text-sm" },
  { col: "lg:col-span-2", row: "h-72",  textSize: "text-base" },
  { col: "lg:col-span-1", row: "h-72",  textSize: "text-sm" },
];

function ArticleCard({
  article,
  colClass,
  heightClass,
  textSize,
}: {
  article: (typeof ALL_ARTICLES)[number];
  colClass?: string;
  heightClass?: string;
  textSize?: string;
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={`group cursor-pointer rounded-2xl overflow-hidden relative block ${heightClass ?? "h-72"} ${colClass ?? ""}`}
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/20" />

      <span className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest rounded-full">
        {article.tag}
      </span>
      <span className="absolute top-4 right-4 text-white/60 text-[10px] font-medium">
        {article.readTime}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className={`text-white font-bold leading-snug mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 ${textSize ?? "text-sm"}`}>
          {article.title}
        </h3>
        <p className="text-white/60 text-xs leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-white/50 text-xs">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsClient() {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeTag === "All"
    ? ALL_ARTICLES
    : ALL_ARTICLES.filter((a) => a.tag === activeTag || a.tag.startsWith(activeTag));

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleTagChange(tag: string) {
    setActiveTag(tag);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Technology"
        titleHighlight="perspectives"
        description="Practical guides, industry analysis, and strategic thinking from our engineering team — written for business owners and IT managers."
      />

      <section className="bg-white pt-10 pb-2 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                tag === activeTag
                  ? "bg-blue-600 text-white"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {activeTag === "All" && (
            <Link href={`/insights/${FEATURED_ARTICLE.slug}`} className="group relative rounded-3xl overflow-hidden mb-10 cursor-pointer h-72 lg:h-96 block">
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
              <span className="absolute top-6 left-8 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                {FEATURED_ARTICLE.tag}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-3 max-w-3xl">
                  {FEATURED_ARTICLE.title}
                </h2>
                <p className="text-slate-300 text-sm lg:text-base leading-relaxed max-w-2xl mb-4 line-clamp-2">
                  {FEATURED_ARTICLE.excerpt}
                </p>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span>{FEATURED_ARTICLE.author}</span>
                  <span>·</span>
                  <span>{FEATURED_ARTICLE.date}</span>
                  <span>·</span>
                  <span>{FEATURED_ARTICLE.readTime}</span>
                </div>
              </div>
            </Link>
          )}

          {visible.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {visible.map((article, i) => {
                const span = BENTO_SPANS[i % BENTO_SPANS.length];
                return (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    colClass={span.col}
                    heightClass={span.row}
                    textSize={span.textSize}
                  />
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-400">
              No articles found for <span className="font-semibold text-navy">{activeTag}</span>.
            </div>
          )}

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-200 text-navy text-sm font-semibold rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all"
              >
                Load More Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {!hasMore && filtered.length > PAGE_SIZE && (
            <p className="mt-10 text-center text-slate-400 text-sm">All {filtered.length} articles shown.</p>
          )}
        </div>
      </section>
    </>
  );
}
