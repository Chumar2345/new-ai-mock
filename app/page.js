// This is a Next.js project structure for the Mock Interviewer AI webpage design based on the provided image.
// Install dependencies: `npm install next react react-dom`.

// pages/_app.js
// import "../styles/globals.css";
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// pages/index.js
"use client";
import Head from "next/head";
import Image from "next/image";
import styles  from "./Home.module.css";
import HeroSection from "@/components/ui/HeroSection";
import FeatureSection from "@/components/ui/FeatureSection";
import MockInterviewSection from "@/components/ui/MockInterviewSection";
import VoiceInteractionSection from "@/components/ui/VoiceInteractionSection";
import PerformanceReportSection from "@/components/ui/PerformanceReportSection";
import SuccessStoriesSection from "@/components/ui/SuccessStoriesSection";
import NewCareerSection from "@/components/ui/NewCareerSection";
import FAQSection from "@/components/ui/FAQSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <MockInterviewSection />
      <VoiceInteractionSection />
      <PerformanceReportSection />
      <FAQSection />
      <SuccessStoriesSection />
      <NewCareerSection />
      <Footer />
    </div>
  );
}
