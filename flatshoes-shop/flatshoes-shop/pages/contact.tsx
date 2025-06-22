import Link from "next/link";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <main className="contact-container">
        <img
          src="/myphoto.jpg"
          alt="Puja Swara"
          className="contact-photo"
        />

        <h1 className="contact-name">Puja Swara</h1>
        <p className="contact-info">Sistem Informasi</p>
        <p className="contact-info">Universitas Ma soem</p>
        <p className="contact-info">Tanggal Lahir: 06 Januari 2006</p>
        <p className="contact-info">Email: pujaswara65@gmail.com</p>
        <p className="contact-info">No Telepon: +62 895 0479 9938</p>

        <div className="contact-social">
          <Link href="https://www.instagram.com/pujaswr_" target="_blank">
            📷
          </Link>
          <Link href="https://wa.me/6289504799938" target="_blank">
            💬
          </Link>
        </div>
      </main>
    </Layout>
  );
}
