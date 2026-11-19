import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

// Link-preview image. Text only: no phone number, address or photo.
export const alt = `${SITE.name}: documenter, QA specialist and UI/UX designer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 20,
            background: "#1d4ed8",
            color: "#ffffff",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          {SITE.monogram}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {SITE.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 38, color: "#475569" }}>
          Documenter · QA Specialist · UI/UX Designer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 160,
            height: 8,
            borderRadius: 4,
            background: "#1d4ed8",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
