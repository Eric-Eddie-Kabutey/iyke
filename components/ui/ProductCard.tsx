import Link from "next/link";

export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string | null;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group h-full rounded-2xl ">
      <div className="flex h-full flex-col rounded-2xl overflow-hidden bg-gray-50 transition-all duration-300">
        <div className="relative h-82 overflow-hidden m-3 rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
          {product.badge && (
            <span className="absolute top-4 left-4 px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              {product.badge}
            </span>
          )}
          <span className="absolute top-4 right-4 px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-3 mb-4">
          <p className="text-navy font-semibold text-sm mb-1 leading-snug">{product.name}</p>
          <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{product.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-navy font-bold">{product.price}</span>
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-navy hover:bg-navy/90 text-white text-xs font-semibold rounded-full transition-colors"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
