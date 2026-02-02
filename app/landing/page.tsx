export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#EEF0FF] flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10">

        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2F5D62] mb-4">
            EduPrompt Solutions
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A professional instructional prompt generator that helps educators
            plan standards-aligned lessons faster.
          </p>

          <a
            href="/"
            className="inline-block bg-[#F26A5A] text-white px-8 py-4 rounded-xl font-semibold"
          >
            Try the Demo
          </a>
        </section>

        {/* PROBLEM */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F5D62] mb-3">
            The Challenge
          </h2>
          <p className="text-gray-700">
            Teachers are expected to plan high-quality lessons that meet
            standards, support diverse learners, and align with district
            expectations — all with limited time.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F5D62] mb-3">
            The EduPrompt Solution
          </h2>
          <p className="text-gray-700">
            EduPrompt Solutions provides structured, educator-designed prompts
            that guide lesson planning while keeping teachers in control of
            instructional decisions.
          </p>
        </section>

        {/* WHO IT’S FOR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F5D62] mb-4">
            Who It’s For
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Teachers</strong> – Plan lessons faster with confidence</li>
            <li><strong>Schools</strong> – Promote consistent planning practices</li>
            <li><strong>Districts</strong> – Support instruction without collecting student data</li>
          </ul>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center">
          <a
            href="/"
            className="inline-block bg-[#2F5D62] text-white px-8 py-4 rounded-xl font-semibold"
          >
            Launch the Prompt Generator
          </a>
        </section>

      </div>
    </main>
  );
}
