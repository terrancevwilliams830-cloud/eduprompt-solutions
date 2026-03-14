import Link from "next/link";

const products = [
  {
    title: "Lesson Generator",
    text: "Create structured, standards-aligned lessons with objectives, activities, and instructional supports.",
  },
  {
    title: "Worksheet Creator",
    text: "Generate classroom-ready worksheets, activities, and practice tools in minutes.",
  },
  {
    title: "ECS Goal Builder",
    text: "Write measurable special education goals and connect them to progress monitoring workflows.",
  },
  {
    title: "Multilingual Support Builder",
    text: "Create sentence frames, vocabulary supports, language objectives, and instructional scaffolds.",
  },
  {
    title: "Progress Monitor",
    text: "Track student-code performance, assign practice, and generate report-ready progress summaries.",
  },
];

const audiences = [
  {
    title: "Teachers",
    text: "Reduce planning time and create instruction faster.",
  },
  {
    title: "Special Education Teams",
    text: "Build measurable goals and document progress with confidence.",
  },
  {
    title: "Multilingual / ESOL Teams",
    text: "Support language development with practical classroom scaffolds.",
  },
  {
    title: "Schools & Districts",
    text: "Provide educators with one connected instructional platform.",
  },
];

const pricing = [
  {
    title: "Teacher Basic",
    text: "Lesson and worksheet tools for everyday classroom planning.",
  },
  {
    title: "Teacher Pro",
    text: "Full teacher toolkit including multilingual supports.",
  },
  {
    title: "Specialist / ECS Pro",
    text: "Goal building, progress monitoring, and report support tools.",
  },
  {
    title: "School License",
    text: "Multi-teacher access for one school building.",
  },
  {
    title: "District License",
    text: "District-wide implementation with custom onboarding and support.",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "system-ui",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid #e2e8f0",
          background: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: "20px" }}>
            EduPrompt Solutions
          </div>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#solutions" style={navLink}>Solutions</a>
            <a href="#pricing" style={navLink}>Pricing</a>
            <a href="#schools" style={navLink}>Schools</a>
            <a href="#districts" style={navLink}>Districts</a>
            <a href="#demo" style={navLink}>Demo</a>
            <a href="https://app.edupromptsolutions.com" style={navLink}>Login</a>
            <a href="https://app.edupromptsolutions.com" style={primaryButton}>
              Start Free Beta
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={badge}>AI Teacher Platform</div>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.05,
              margin: "18px 0 18px 0",
            }}
          >
            AI-powered planning and progress tools built for teachers, schools, and districts.
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "680px",
              marginBottom: "28px",
            }}
          >
            Create lessons, generate worksheets, support multilingual learners,
            write measurable goals, and monitor student progress in one connected platform.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="https://app.edupromptsolutions.com" style={primaryButton}>
              Start Free Beta
            </a>
            <a href="#demo" style={secondaryButton}>
              Request Demo
            </a>
          </div>

          <p
            style={{
              marginTop: "18px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Built for teachers. Designed for schools. Ready for districts.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
            borderRadius: "28px",
            padding: "28px",
            color: "#ffffff",
            minHeight: "420px",
            boxShadow: "0 20px 60px rgba(15,23,42,0.15)",
          }}
        >
          <div style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>
            Platform Preview
          </div>
          <div
            style={{
              background: "#ffffff",
              color: "#0f172a",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <div style={{ fontWeight: 800, fontSize: "22px", marginBottom: "16px" }}>
              Teacher Workspace
            </div>

            <div style={previewGrid}>
              <div style={previewCardDark}>Lesson Generator</div>
              <div style={previewCard}>Worksheet Creator</div>
              <div style={previewCardSoft}>ECS Goal Builder</div>
              <div style={previewCardGreen}>Multilingual Support</div>
              <div style={previewCardBlue}>Progress Monitor</div>
            </div>

            <div
              style={{
                marginTop: "18px",
                padding: "16px",
                borderRadius: "16px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: "#475569",
                lineHeight: 1.6,
              }}
            >
              One workspace for planning, intervention, language support, and progress reporting.
            </div>
          </div>
        </div>
      </section>

      <section style={valueStrip}>
        <div style={valueCard}>
          <h3 style={valueTitle}>Faster Planning</h3>
          <p style={valueText}>Generate lessons and materials in minutes, not hours.</p>
        </div>
        <div style={valueCard}>
          <h3 style={valueTitle}>Diverse Learner Support</h3>
          <p style={valueText}>Support multilingual learners and special education students with confidence.</p>
        </div>
        <div style={valueCard}>
          <h3 style={valueTitle}>Privacy-Safe Progress Monitoring</h3>
          <p style={valueText}>Track student performance using secure student codes only.</p>
        </div>
      </section>

      <section id="solutions" style={sectionWrap}>
        <SectionHeader
          title="One platform. Five powerful tools."
          text="EduPrompt connects planning, support, and progress tracking into one seamless workflow for educators."
        />

        <div style={grid3}>
          {products.map((item) => (
            <div key={item.title} style={infoCard}>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionWrapAlt}>
        <SectionHeader
          title="From planning to progress reporting"
          text="EduPrompt helps educators move from instruction to intervention to documentation in one system."
        />

        <div style={workflowGrid}>
          {[
            "Generate instruction",
            "Build supports",
            "Assign student work",
            "Track progress",
            "Generate report-ready summaries",
          ].map((step, index) => (
            <div key={step} style={workflowCard}>
              <div style={stepNumber}>{index + 1}</div>
              <div style={{ fontWeight: 700 }}>{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="schools" style={sectionWrap}>
        <SectionHeader
          title="Built for teachers, specialists, and school leaders"
          text="EduPrompt supports instruction, intervention, language development, and student monitoring across classrooms and schools."
        />

        <div style={grid4}>
          {audiences.map((item) => (
            <div key={item.title} style={infoCard}>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={sectionWrapAlt}>
        <SectionHeader
          title="Simple pricing for teachers and schools"
          text="Start with a teacher plan, expand to school access, or request district pricing."
        />

        <div style={grid5}>
          {pricing.map((item) => (
            <div key={item.title} style={priceCard}>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.text}</p>
              <a href="#demo" style={secondaryButtonSmall}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="districts" style={sectionWrap}>
        <div style={ctaPanel}>
          <div>
            <h2 style={{ margin: "0 0 12px 0", fontSize: "34px" }}>
              Join the founding educator beta
            </h2>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.7, maxWidth: "760px" }}>
              We are inviting a small group of educators, specialists, and school leaders
              to help shape the future of EduPrompt.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
            <a href="https://app.edupromptsolutions.com" style={primaryButton}>
              Start Free Beta
            </a>
            <a href="#demo" style={secondaryButton}>
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <section id="demo" style={sectionWrapAlt}>
        <div style={ctaPanel}>
          <h2 style={{ margin: "0 0 12px 0", fontSize: "34px" }}>
            Ready to see EduPrompt in action?
          </h2>
          <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>
            Schedule a walkthrough to see how EduPrompt supports planning, differentiation,
            special education, multilingual support, and progress monitoring.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
            <a href="mailto:info@edupromptsolutions.com" style={primaryButton}>
              Request Demo
            </a>
            <a href="https://app.edupromptsolutions.com" style={secondaryButton}>
              Login
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          background: "#ffffff",
          marginTop: "32px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            color: "#64748b",
          }}
        >
          <div>EduPrompt Solutions © 2026</div>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <a href="#solutions" style={footerLink}>Solutions</a>
            <a href="#pricing" style={footerLink}>Pricing</a>
            <a href="#demo" style={footerLink}>Demo</a>
            <a href="https://app.edupromptsolutions.com" style={footerLink}>Login</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <h2 style={{ margin: "0 0 10px 0", fontSize: "38px", color: "#0f172a" }}>
        {title}
      </h2>
      <p style={{ margin: 0, color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
        {text}
      </p>
    </div>
  );
}

const navLink: React.CSSProperties = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: 600,
};

const footerLink: React.CSSProperties = {
  textDecoration: "none",
  color: "#64748b",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  fontSize: "14px",
  fontWeight: 700,
};

const primaryButton: React.CSSProperties = {
  background: "#0f172a",
  color: "#ffffff",
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: "14px",
  fontWeight: 700,
  display: "inline-block",
};

const secondaryButton: React.CSSProperties = {
  background: "#ffffff",
  color: "#111827",
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: "14px",
  fontWeight: 700,
  border: "1px solid #cbd5e1",
  display: "inline-block",
};

const secondaryButtonSmall: React.CSSProperties = {
  background: "#ffffff",
  color: "#111827",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: 700,
  border: "1px solid #cbd5e1",
  display: "inline-block",
  marginTop: "14px",
};

const valueStrip: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const valueCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "22px",
};

const valueTitle: React.CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: "20px",
};

const valueText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.7,
};

const sectionWrap: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "56px 24px",
};

const sectionWrapAlt: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "56px 24px",
};

const grid3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const grid4: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
};

const grid5: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
};

const infoCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "24px",
};

const priceCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: "22px",
  color: "#0f172a",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.7,
};

const workflowGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
};

const workflowCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "20px",
};

const stepNumber: React.CSSProperties = {
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  marginBottom: "12px",
};

const ctaPanel: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "24px",
  padding: "28px",
};

const previewGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
};

const previewCardBase: React.CSSProperties = {
  borderRadius: "16px",
  padding: "16px",
  fontWeight: 700,
};

const previewCardDark = {
  ...previewCardBase,
  background: "#0f172a",
  color: "#ffffff",
};

const previewCard: React.CSSProperties = {
  ...previewCardBase,
  background: "#ffffff",
  color: "#111827",
  border: "1px solid #cbd5e1",
};

const previewCardSoft = {
  ...previewCardBase,
  background: "#e2e8f0",
  color: "#111827",
};

const previewCardGreen = {
  ...previewCardBase,
  background: "#dcfce7",
  color: "#14532d",
};

const previewCardBlue = {
  ...previewCardBase,
  background: "#dbeafe",
  color: "#1d4ed8",
};
