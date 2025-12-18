"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Contact from "@/components/_app/Contacts";
import Educations from "@/components/_app/Educations";
import Intro from "@/components/_app/Intro";
import Works from "@/components/_app/Works";

export default function Home() {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <main className="mt-[40px]">
      <Intro />
      <Works />
      <Educations />
      <Contact />
    </main>
  );
}
