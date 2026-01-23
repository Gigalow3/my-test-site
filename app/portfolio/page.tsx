import Link from 'next/link';
import { HugeiconsArrowLeftIcon } from '@/components/ui/hugeicons-arrow-left';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-6">
            A showcase of my work, skills, and experience in web development.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/jamesrlowejr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Gigalow3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/texas_r_lowe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-semibold"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resume</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Degree Title
                </h4>
                <p className="text-gray-600">University Name</p>
                <p className="text-sm text-gray-500">Graduation Year</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Job Title
                </h4>
                <p className="text-gray-600">Company Name</p>
                <p className="text-sm text-gray-500">Duration</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Key achievement or responsibility</li>
                  <li>Key achievement or responsibility</li>
                  <li>Key achievement or responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Technical Skills
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Node.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Soft Skills
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Problem Solving</li>
                  <li>• Communication</li>
                  <li>• Team Collaboration</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Projects Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Title
              </h3>
              <p className="text-gray-600 mb-4">
                Brief description of your project and what it accomplishes.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Next.js
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Title
              </h3>
              <p className="text-gray-600 mb-4">
                Brief description of your project and what it accomplishes.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  CSS
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        {/* Back Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-bold"
        >
          <HugeiconsArrowLeftIcon size={24} />
          Back Home
        </Link>
      </div>
    </main>
  );
}
