"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

const demoLogos = [
  { id: 1, name: "Supabase", src: "https://www.prismui.tech/logo/supabase.svg" },
  { id: 2, name: "Devfolio", src: "brandlogos/devfolio.svg" },
  { id: 3, name: "EthIndia", src: "brandlogos/ethindia.svg" },
  { id: 4, name: "NeonDB", src: "brandlogos/neondb.svg" },
  { id: 5, name: "Appwrite", src: "brandlogos/appwrite.svg" },
  { id: 6, name: "MongoDB", src: "brandlogos/mongodb.svg" },
];

import { MorphingText } from "@/components/ui/liquid-text";

const texts = [
  "Coming Soon",
  "Stay Tuned",
  "For More",
  "Updates",
];

function Sponsors() {
  return (
    <Card className='bg-transparent border-0'>
      <CardContent className="pt-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-4xl font-bold tracking-widest ">
            SPONSORS
          </p>
          <p className="text-sm font-medium tracking-widest text-muted-foreground">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          {/* <h2 className="text-[3.5rem] font-bold tracking-tight leading-none">
            The best are already here
          </h2> */}
            <MorphingText texts={texts} />
        </div>
        {/* <LogoCarousel logos={demoLogos} /> */}
      </CardContent>
    </Card>
  
  );
}

export { Sponsors };
