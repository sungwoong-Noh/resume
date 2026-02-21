export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl font-bold font-serif mb-2">Your Name</h1>
          <p className="text-xl text-gray-600 mb-4">Your Professional Title</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">+1 (123) 456-7890</span>
            <span className="text-gray-400">•</span>
            <a href="https://github.com" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>
        </header>

        {/* Sections will be added here */}
        <section className="mb-8 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Add your professional summary and background here.
          </p>
        </section>

        <section className="mb-8 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-4">Experience</h2>
          <div className="space-y-6">
            {/* Experience items will go here */}
          </div>
        </section>

        <section className="mb-8 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {/* Skill tags will go here */}
          </div>
        </section>
      </div>
    </main>
  )
}
