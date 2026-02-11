"use client";

import { useState } from "react";

export default function DemoPage() {
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateLesson = () => {
    setLoading(true);
    setLesson("");

    setTimeout(() => {
      setLesson(`Lesson Plan: Understanding Linear Functions

Objective:
Students will be able to identify and graph linear equations in slope-intercept form.

Warm-Up:
Review slope and y-intercept using real-world examples.

Guided Practice:
Students graph equations on coordinate grids and identify slope.

Independent Practice:
Students complete practice problems individually.

Exit Ticket:
Students explain slope and intercept in their own words.`);
      
      setLoading(false);
    }, 1200); // feels more realistic
  };

  const copyLesson = async () => {
    await navigator.clipboard.writeText(lesson);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          EduPrompt Lesson Generator (Demo)
        </h1>

        <button
          onClick={generateLesson}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Generating Lesson..." : "Generate Lesson"}
        </button>

        {lesson && (
          <>
            <textarea
              className="w-full h-64 mt-6 p-4 border rounded-lg"
              value={lesson}
              readOnly
            />

            <button
              onClick={copyLesson}
              className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              {copied ? "Copied ✓" : "Copy Lesson"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
