import { useDeno } from "framework/react";
import React from "react";
import Logo from "~/components/logo.tsx";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);
  const preable = `
      I'm Ismail, software engineer, tinkerer, 
      and functional programming addict
  `;

  return (
    <div className="page">
      <head>
        <title>ib250</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo src="/e8.svg" size={300} title="lie group E8"/>
      </p>
      <h1>Hello friend</h1>
      <p className="main" style={{ padding: "15px" }}>
        {preable}
      </p>
      <p className="links">
        <a href="https://github.com/ib250" target="_blank">Github</a>
        <span></span>
        <a
          href="https://www.linkedin.com/in/ismail-bello-5b02536b"
          target="_blank"
        >
          LinkedIn
        </a>
        <span></span>
        <a
          href="https://www.researchgate.net/profile/Ismail-Bello-4"
          target="_blank"
        >
          ResearchGate
        </a>
      </p>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  );
}
