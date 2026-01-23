import Link from "next/link";

export default function Autobiography() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-purple-600 hover:text-purple-800 font-bold mb-8 inline-block"
        >
          ← Back Home
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              My Journey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to my corner of the internet! I'm Gigalow3, a passionate
              developer and creative thinker who loves building things on the
              web. This is where I share my work, my thoughts, and my journey.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With a focus on Next.js, React, and modern web technologies, I
              love crafting beautiful and functional digital experiences. Every
              project I work on is an opportunity to learn something new and
              push my boundaries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              My Interests
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Web Development & Design</li>
              <li>Open Source Contributions</li>
              <li>Technology & Innovation</li>
              <li>Creative Problem Solving</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to chat about projects,
              ideas, or just say hello!
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
