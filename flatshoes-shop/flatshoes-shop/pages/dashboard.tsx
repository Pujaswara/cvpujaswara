import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  stock: number;
  image: string;
};
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.desc}</p>
      <p className="text-blue-600 font-bold mb-1">
        IDR {product.price.toLocaleString("id-ID")}
      </p>
      <p className={product.stock > 0 ? "text-green-600 text-sm mb-2" : "text-red-500 text-sm mb-2"}>
        Stock: {product.stock}
      </p>
      <button
        disabled={product.stock === 0}
        className={`btn-add-cart ${
          product.stock === 0 ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
}


export default function Dashboard({ products }: { products: Product[] }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Jalankan hanya di browser
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.replace("/login");
    } else {
      setReady(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  if (!ready) return null;

  return (
    <Layout>
      <div className="flex justify-end max-w-7xl mx-auto px-4 pt-4">
 <button
  onClick={handleLogout}
  className="btn-logout"
>
  Logout
</button>
</div>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">
          Katalog Flatshoes
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// ✅ AMAN — hanya fetch data produk
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
