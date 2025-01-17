"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to The School Of Science<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Admission Open....
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={'https://www.krapasc.com/wp-content/uploads/2021/11/SOS-Schools-Colleges-1024x853.jpg'}
          alt="hero"
          height={820}
          width={1500}
          className="mx-auto rounded-xl object-cover h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
