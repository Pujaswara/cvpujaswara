"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Flatshoes Store</div>

      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
      </button>

      <div
        className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}
      >
        <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link href="/login" className={styles.button} onClick={() => setIsOpen(false)}>
          Login
        </Link>
      </div>
    </nav>
  );
}