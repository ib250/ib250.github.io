import React from "react";

type LogoProps = {
  src: string;
  size?: number;
  title: string;
};

export default function Logo({ src, size, title}: LogoProps) {
  return (
    <img src={src} width={size || 75} title={title} />
  );
}
