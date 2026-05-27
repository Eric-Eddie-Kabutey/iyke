"use client";

import Link from "next/link";
import { useState } from "react";
import type { Article } from "@/constants/articles";
import PageHero from "@/components/ui/PageHero";

function ShareButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-600 text-xs font-medium w-full"
    >
      {icon}
      {label}
    </button>
  );
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4 leading-snug">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-navy mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("| ") && line.includes("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const [header, , ...rows] = tableLines;
      const headers = header.split("|").filter(Boolean).map((h) => h.trim());
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6 rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {headers.map((h, j) => (
                  <th key={j} className="px-5 py-3 text-left text-navy font-semibold text-xs uppercase tracking-wide border-b border-slate-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return (
                  <tr key={ri} className="border-b border-slate-100 last:border-0">
                    {cells.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-3 text-slate-700 ${ci === 0 ? "font-medium" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- **")) {
      const boldMatch = line.match(/^- \*\*(.+?)\*\*: (.+)$/);
      if (boldMatch) {
        elements.push(
          <li key={i} className="text-slate-700 leading-relaxed mb-1">
            <strong className="text-navy">{boldMatch[1]}:</strong> {boldMatch[2]}
          </li>
        );
      } else {
        elements.push(
          <li key={i} className="text-slate-700 leading-relaxed mb-1">
            {line.slice(2)}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-slate-700 leading-relaxed mb-1">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      const parts = line.split(/\*\*(.+?)\*\*/g);
      elements.push(
        <p key={i} className="text-slate-700 leading-[1.85] text-[15px] mb-1">
          {parts.map((part, pi) =>
            pi % 2 === 1 ? <strong key={pi} className="text-navy font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default function ArticleDetail({ article, related }: { article: Article; related: Article[] }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen isolate">
      <PageHero
        eyebrow={article.tag}
        title={article.title}
        description={article.excerpt}
        img={article.image}
        link1="/contact"
        link1_text="Request A Quote"
        link2="/insights"
        link2_text="Back to Insights"
      />

      {/* Body */}
      <div className="bg-white max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 xl:gap-16 items-start">

          {/* Left sidebar */}
          <article className="min-w-0">
            <div className="prose-custom">
              {renderBody(article.body)}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-gray-50 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="blue" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">Ready to get started?</p>
                <h3 className="text-xl text-navy font-bold mb-2">Talk to our engineering team</h3>
                <p className="text-gray-600 text-sm mb-5 max-w-lg">
                  Whether you're ready to implement or just exploring options, our team can give you a free assessment and cost estimate.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>

          {/* Article body */}
          <aside className="lg:sticky lg:top-28 space-y-8">
            <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-3">Written by</p>
            {/* Author */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div>
                  <p className="text-navy font-semibold text-sm">{article.author}</p>
                  <p className="text-slate-500 text-xs">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Share */}
            <div>
              <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-3">Share this</p>
              <div className="space-y-2">
                <ShareButton
                  onClick={handleCopy}
                  label={copied ? "Copied!" : "Copy link"}
                  icon={
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  }
                />
                <ShareButton
                  label="Share on X"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, "_blank")}
                  icon={
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                />
                <ShareButton
                  label="Share on LinkedIn"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank")}
                  icon={
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-3">Related articles</p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/insights/${r.slug}`}
                      className="group flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-16 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-wide">{r.tag}</span>
                        <p className="text-navy text-xs font-semibold leading-snug mt-0.5 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {r.title}
                        </p>
                        <p className="text-slate-400 text-[10px] mt-1">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
