import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

async function loadInterBold() {
  const css = await (
    await fetch(
      "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
      {
        headers: {
          // Request a UA that gets served TTF (satori doesn't support woff2)
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
        },
      }
    )
  ).text();

  const matches = [...css.matchAll(/src: url\(([^)]+)\) format\('(?:truetype|opentype|woff)'\)/g)];
  const last = matches[matches.length - 1];
  if (!last) throw new Error("Could not find Inter font URL");

  const res = await fetch(last[1]);
  return res.arrayBuffer();
}

export default async function Icon() {
  const interBold = await loadInterBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#ffffff" }}>sm</span>
          <span style={{ color: "#38bdf8" }}>.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
