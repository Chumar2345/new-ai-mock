"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {

  const handleAuthRedirect = (e, path) => {
    e.preventDefault();
    window.location.href = path; // Redirect to the desired path
  };
  return (
    <div className="hero-section bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-8 py-4">
        <div className="text-purple-500 text-xl md:text-2xl font-bold">
          <span className="text-white">V</span>Mock <span className="text-xs">Ai</span>
        </div>
        <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm md:text-lg mt-2 md:mt-0">
          <li>
            <Link href="/" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-purple-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-purple-500">
            Help
            </Link>
          </li>
          {/* <li>
            <Link href="#" className="hover:text-purple-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-500">
              Contact Us
            </Link>
          </li> */}
        </ul>
        <div className="mt-4 md:mt-0">
          <Link
            href="/sign-in"
            className="bg-purple-500 px-4 py-2 rounded-full text-white hover:bg-purple-600 transition text-sm md:text-base"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4  flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="text-section md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Excel in Your <span className="text-purple-500">Hospitality</span> interviews
          </h1>
          <p className="text-base md:text-lg mb-6">
          Get ready for success with real-time voice-to-voice mock interviews powered by cutting-edge AI. Overcome interview anxiety and gain the confidence to excel in any role, at any level, across the hospitality industry. Receive personalized feedback on your answers and actionable tips to enhance your performance, bringing you closer to your dream job.
          </p>
          <Link
            href="/sign-in"
            className="bg-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Try a Free Mock Interview Now
          </Link>
        </div>

        {/* Right Section */}
        <div className="image-section md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="bg-black p-4 rounded-lg">
            <Image
              src="/home-ai-image.png" // Make sure this file is saved in the public folder
              alt="Robot"
              width={500}
              height={550}
              className="rounded-lg"
              style={{width:"auto",height:"550px"}}
            />
          </div>
        </div>
      </div>

      {/* Recent Interviews Section */}
      <div className="text-center py-10">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Recent Interviews Aced By Our Users
        </h2>
      </div>
    </div>
  );
}
