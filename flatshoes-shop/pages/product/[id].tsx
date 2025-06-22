import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const products = [
  { id: 1, name: "Classic Black", price: 50000, desc: "Deskripsi produk A", image: "/black.jpg" },
  { id: 2, name: "Elegant Brown", price: 60000, desc: "Deskripsi produk B", image: "/brown.jpg" },
  { id: 3, name: "Modern Beige", price: 70000, desc: "Deskripsi produk C", image: "/beige.jpg" },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === Number(id));

  if (!product) return <Layout><p>Product not found</p></Layout>;

  return (
    <Layout>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow text-center">
        <img src={product.image} className="w-60 mx-auto mb-4" alt={product.name} />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.desc}</p>
        <p className="text-blue-600 font-semibold">IDR {product.price.toLocaleString("id-ID")}</p>
      </div>
    </Layout>
  );
}
