import { ImageResponse } from "next/og";

export const alt = "Lokesh Sequeira, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #05070d 0%, #0b1220 60%, #11204a 100%)",
        color: "#e8eef9",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#38bdf8" }}>
        portfolio
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 700,
          marginTop: 16,
        }}
      >
        Lokesh Sequeira
        <span style={{ color: "#4f8cff" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "#8a97b0",
          marginTop: 20,
        }}
      >
        Full-Stack Developer · Python · FastAPI · React · Next.js
      </div>
    </div>,
    { ...size },
  );
}
