export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f3ee",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "650px",
          width: "100%",
          background: "#ffffff",
          borderRadius: "28px",
          padding: "48px 32px",
          textAlign: "center",
          border: "1px solid #e6d8cf",
          boxShadow: "0 18px 45px rgba(80, 45, 30, 0.12)",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "#6b3f2e",
            color: "#ffffff",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          J
        </div>

        <h1
          style={{
            color: "#4b2e24",
            fontSize: "34px",
            lineHeight: "1.2",
            marginBottom: "18px",
          }}
        >
          Site temporairement indisponible
        </h1>

        <p
          style={{
            color: "#333333",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "8px",
          }}
        >
          Le site est actuellement indisponible pour maintenance.
        </p>

        <p
          style={{
            color: "#666666",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
        </p>
      </section>
    </main>
  );
}
