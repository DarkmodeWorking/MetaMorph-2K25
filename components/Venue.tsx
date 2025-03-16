"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function Venue() {  
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold md:text-6xl text-white">
              Hacking Starts Here<br />
              <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
                VENUE
              </span>
            </h1>
          </>
        }
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.9538350381315!2d88.3781361757916!3d22.694757338097457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6df041e831%3A0x6e3fc1531d1cb33!2sGuru%20Nanak%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1742124344644!5m2!1sen!2sin" width="100%" height="100%" style={{border:0 , borderRadius: "10px"}} loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe>
      </ContainerScroll>
    </div>
  );
}
