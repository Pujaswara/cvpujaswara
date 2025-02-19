"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaPython, FaDatabase, FaChartLine, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white p-8 text-center">
        <h1 className="text-4xl font-semibold">Puja Swara</h1>
        <p className="mt-2 text-xl">Data-Driven Decision Maker</p>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">About Me</h2>
          <div className="mt-8 flex justify-center items-center space-x-6">
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/puja2.jpg" alt="Your Photo" width={128} height={128} className="object-cover" />
            </motion.div>
            <div>
              <p className="mt-4 text-lg text-gray-700">
                I am a passionate Data Analyst with expertise in collecting, analyzing, and interpreting large sets of data.
              </p>
              {/* Social Links */}
              <div className="mt-4 flex justify-center space-x-4">
                <Link href="https://www.linkedin.com/in/puja" target="_blank">
                  <FaLinkedin className="text-indigo-600 text-3xl hover:text-indigo-800" />
                </Link>
                <Link href="https://github.com/puja" target="_blank">
                  <FaGithub className="text-indigo-600 text-3xl hover:text-indigo-800" />
                </Link>
                <Link href="mailto:puja@example.com">
                  <FaEnvelope className="text-indigo-600 text-3xl hover:text-indigo-800" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-indigo-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: <FaReact className="text-indigo-600 text-3xl mb-4" />, title: "React", desc: "Building web applications" },
              { icon: <FaPython className="text-indigo-600 text-3xl mb-4" />, title: "Python", desc: "Data manipulation with Pandas" },
              { icon: <FaDatabase className="text-indigo-600 text-3xl mb-4" />, title: "SQL", desc: "Querying databases" },
              { icon: <FaChartLine className="text-indigo-600 text-3xl mb-4" />, title: "Data Visualization", desc: "Using Power BI & Tableau" }
            ].map((skill, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-md shadow-lg" whileHover={{ scale: 1.05 }}>
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Contact Me</h2>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md border border-gray-300" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-md border border-gray-300" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-md border border-gray-300" rows={4}></textarea>
            <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white p-4 text-center">
        <p>&copy; 2025 Data Analyst CV. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
