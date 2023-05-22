import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          className="blur-mdd"
          style={{
            backgroundImage: "url('./bg.jpg')",
            width: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: "-999",
          }}
        ></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
