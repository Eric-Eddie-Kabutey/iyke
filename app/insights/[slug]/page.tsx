import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_ARTICLES_WITH_FEATURED, getArticleBySlug, getRelatedArticles } from "@/constants/articles";
import ArticleDetail from "./ArticleDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_ARTICLES_WITH_FEATURED.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — IYKE Chris Computers`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 2);

  return <ArticleDetail article={article} related={related} />;
}
