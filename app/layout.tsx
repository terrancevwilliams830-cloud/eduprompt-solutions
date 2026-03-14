import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#f5f7fb",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            height: "60px",
            background: "#0f172a",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div style={{ fontWeight: 700 }}>EduPrompt</div>

          <div style={{ fontSize: "14px" }}>
            AI Instruction Platform
          </div>
        </div>

        {/* APP BODY */}
        <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
          
          {/* SIDEBAR */}
          <div
            style={{
              width: "240px",
              background: "white",
              borderRight: "1px solid #e5e7eb",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                marginBottom: "20px",
                fontSize: "18px",
              }}
            >
              Navigation
            </div>

            <NavLink href="/app" label="Dashboard" />
            <NavLink href="/lesson" label="Lesson Generator" />
            <NavLink href="/worksheet" label="Worksheet Creator" />
            <NavLink href="/ecs" label="ECS Goal Builder" />
            <NavLink href="/multilingual" label="Multilingual Builder" />
            <NavLink href="/progress" label="Progress Monitor" />
          </div>

          {/* MAIN CONTENT */}
          <div
            style={{
              flex: 1,
              padding: "40px",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <Link
        href={href}
        style={{
          textDecoration: "none",
          color: "#1f2937",
          fontWeight: 500,
        }}
      >
        {label}
      </Link>
    </div>
  );
}
