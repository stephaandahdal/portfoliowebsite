import { ImageResponse } from "next/og";

export const alt = "Stephaan Dahdal Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(16,185,129,0.65) 0%, rgba(16,185,129,0) 45%), radial-gradient(circle at 82% 82%, rgba(234,179,8,0.62) 0%, rgba(234,179,8,0) 45%)",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Stephaan Dahdal
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#d4d4d4",
            }}
          >
            Software Engineer • Full-Stack Developer
          </div>
        </div>
      </div>
    ),
    size
  );
}
