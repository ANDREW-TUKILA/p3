import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Landing Section */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="relative z-10 flex flex-col items-center md:items-start p-6">
          <Image src="/photo-placeholder.png" alt="Tukila Andrei" width={250} height={250} className="rounded-full md:rounded-none md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2" />
          <div className="text-center md:text-left mt-4 md:mt-0 md:ml-64">
            <h1 className="text-4xl font-bold text-gray-900">Tukila Andrei</h1>
            <p className="text-lg text-gray-800">Construction Project Manager & Builder</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow p-4">Project 1</div>
          <div className="bg-white shadow p-4">Project 2</div>
          <div className="bg-white shadow p-4">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen p-6 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Phone: +1 263-880-2866</p>
        <p>WhatsApp: +1 263-880-2866</p>
        <p>Email: <a href="mailto:andretukila@gmail.com" className="text-blue-600">andretukila@gmail.com</a></p>
      </section>
    </div>
  );
}
