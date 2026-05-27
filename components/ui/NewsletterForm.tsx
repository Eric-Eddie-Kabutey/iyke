"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
