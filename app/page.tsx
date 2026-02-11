export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] text-[#171717]">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EduPrompt Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A professional instructional prompt generator that helps educators
            create standards-aligned lesson plans faster and with confidence.
          </p>

          <a
            href="/demo"
            className="inline-block bg-[#F25D62] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try the Demo
          </a>
        </section>

        {/* THE CHALLENGE */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The Challenge
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Teachers are expected to plan rigorous, standards-aligned lessons,
            differentiate for diverse learners, and document accommodations —
            all with limited planning time and increasing accountability.
          </p>
        </section>

        {/* THE SOLUTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The EduPrompt Solution
          </h2>
          <p className="text-gray-700 max-w-3xl">
            EduPrompt Solutions guides educators through structured inputs and
            instantly generates high-quality instructional prompts that support
            lesson planning, compliance, and instructional clarity.
          </p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Who It’s For
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Classroom Teachers</li>
            <li>Instructional Coaches</li>
            <li>School & District Leaders</li>
            <li>Curriculum Teams</li>
          </ul>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center">
          <a
            href="/demo"
            className="inline-block bg-[#171717] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Launch the Demo
          </a>
        </section>

      </div>
    </main>
  );
}
