import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title =
    url.searchParams.get("title") || "Germerott Performance Consulting";
  const font = fetch(
    new URL("../../../public/fonts/Poppins-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const playfairDisplay = fetch(
    new URL(
      "../../../public/fonts/PlayfairDisplay-Regular.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());
  const fontData = await font;
  const playfairDisplayData = await playfairDisplay;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "8rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            fontFamily: "Poppins",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "8rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "pre-wrap",
              textWrap: "balance",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <img
              src={url.origin + "/profile.jpeg"}
              alt="Germerott Consulting"
              height={60}
              width={60}
              style={{
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "4.5rem",
                  lineHeight: "4.5rem",
                  whiteSpace: "pre-wrap",
                  textWrap: "balance",
                }}
              >
                Germerott Consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Poppins",
          data: fontData,
          style: "normal",
        },
        {
          name: "Playfair Display",
          data: playfairDisplayData,
          style: "normal",
        },
      ],
    }
  );
}
