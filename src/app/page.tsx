import React from "react";

function Header() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-blue-700">My Blog</span>
        <a
          href="/about"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          About
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-gray-50">
        <div className="max-w-2xl w-full px-6 py-12 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to My Blog</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover articles, tutorials, and insights on web development, technology, and more.
          </p>
          <a
            href="/posts"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Explore Posts
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}