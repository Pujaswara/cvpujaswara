"use client";

import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <main className="home-hero">
        <h1>Selamat Datang di Flatshoes Store</h1>
        <p>Temukan flatshoes trendy, nyaman, dan terjangkau di sini!</p>

        <div className="home-image">
          <img src="/black.jpg" alt="Flatshoes" />
        </div>

        <section className="home-about">
          <h2>Tentang Flatshoes Store</h2>
          <p>
            Flatshoes Store hadir untuk memenuhi kebutuhan gaya kamu dengan sepatu flat yang nyaman,
            trendy, dan harga yang ramah di kantong. Kami berkomitmen menghadirkan koleksi terbaru
            dengan kualitas terbaik agar setiap langkahmu makin percaya diri.
          </p>
          <p>
            Temukan berbagai pilihan model & warna yang cocok untuk aktivitas harian hingga acara spesial.
            Kepuasanmu adalah prioritas kami. Selamat berbelanja dan rasakan kenyamanannya!
          </p>
        </section>
      </main>
    </Layout>
  );
}
