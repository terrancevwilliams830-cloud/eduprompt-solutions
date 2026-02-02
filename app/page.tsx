"use client";

import { useState } from "react";

export default function EduPrompt() {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [standards, setStandards] = useState("");
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    const generatedPrompt = `
You are an expert K–12 instructional coach and curriculum designer.

Create a complete, standards-aligned lesson plan using the information below.

GRADE LEVEL:
${grade}

SUBJECT:
${subject}

LESSON DURATION:
${duration}

STANDARDS ALIGNMENT:
${standards}

LESSON REQUIREMENTS:
• Clear learning objective written as a student-friendly “I can” statement
• Engaging warm-up or activation strategy
• Direct instruction
• Guided practice
• Independent practice
• Assessment or exit ticket
• Closure or reflection activity

STUDENT SUPPORTS:
Include strategies for:
• IEP / 504 accommodations
• English Language Learners
• Gifted or advanced learners

Write the lesson in professional educator language.
    `.trim();

    setPrompt(generatedPrompt);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied! Paste it into your AI tool.");
  };

  return (
    <main className="min-h-screen bg-[#EEF0FF] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-semibold text-[#2F5D62] mb-2">
          EduPrompt Solutions
        </h1>

        <p className="text-gray-600 mb-6">
          Instructional prompt generator for lesson planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            placeholder="Grade Level"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="border p-3 rounded"
          />
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border p-3 rounded"
          />
          <input
            placeholder="Lesson Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border p-3 rounded"
          />
          <input
            placeholder="Standards Alignment"
            value={standards}
            onChange={(e) => setStandards(e.target.value)}
            className="border p-3 rounded"
          />
        </div>

        <button
          onClick={generatePrompt}
          className="w-full bg-[#F26A5A] text-white py-3 rounded-xl font-semibold"
        >
          Generate Lesson Prompt
        </button>

        {prompt && (
          <div className="mt-6 bg-gray-50 border rounded-xl p-4 text-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-[#2F5D62]">
                Generated Prompt
              </h2>
              <button
                onClick={copyPrompt}
                className="bg-[#2F5D62] text-white px-3 py-1 rounded-lg text-sm"
              >
                Copy
              </button>
            </div>
            <pre className="whitespace-pre-wrap">{prompt}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
