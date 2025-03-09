"use client";

import React, { type ImgHTMLAttributes } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Updated icon components using <img> with a source to an SVG image file.
function MongoDBIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/mongodb.svg" alt="MongoDB Logo" {...props} />;
}

function CloudFlareIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/cloudflare.svg" alt="Cloudflare Logo" {...props} />;
}

function StreamLitIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/streamlit.svg" alt="Streamlit Logo" {...props} />;
}

function AptosIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/aptos.svg" alt="Aptos Logo" {...props} />;
}

function PolygonIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/polygon.svg" alt="Polygon Logo" {...props} />;
}

function EthIndiaIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/images/ethindia.png" alt="EthIndia Logo" {...props} />;
}

// Example list of logos.
const allLogos = [
  { name: "MongoDb", id: 1, img: MongoDBIcon },
    { name: "CloudFlare", id: 2, img: CloudFlareIcon },
    { name: "StreamLit", id: 3, img: StreamLitIcon },
    { name: "Aptos", id: 4, img: AptosIcon },
    { name: "Polygon", id: 5, img: PolygonIcon },
    { name: "EthIndia", id: 6, img: EthIndiaIcon },
  // You can add more logos here following the same structure.
];

export function Sponsors() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            The best are already here
          </GradientHeading>
          <a href="https://www.newcult.co" target="_blank" rel="noreferrer">
            <GradientHeading size="xxl">
              Support us in our journey
            </GradientHeading>
          </a>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}
