"use client";

import { UserButton, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  useEffect(() => {
  }, [path]);

  const handleSignOut = async () => {
    try {
      // Sign out the user
      await signOut();
      // Redirect explicitly to `/`
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <div
      className="flex p-4 items-center justify-between"
      style={{
        backgroundColor: "#000000", // Black background
        borderBottom: "4px solid #7e22ce", // Bold white bottom border
        boxShadow: "0px 8px 15px rgba(126, 34, 206, 0.8)",// Bold shadow effect
      }}
    >
        <div className="text-purple-500 text-xl md:text-2xl font-bold">
        <Link href="/" >
          <span className="text-white">V</span>Mock <span className="text-xs">Ai</span>
          </Link>
        </div>
      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/dashboard">
            <span
              style={{ color: "white" }}
              className={`hover:text-gray-200 hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard" && "text-gray-200 font-bold"
              }`}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/upgrade">
            <span
              style={{ color: "white" }}
              className={`hover:text-gray-200 hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/upgrade" && "text-gray-200 font-bold"
              }`}
            >
              Upgrade
            </span>
          </Link>
        </li>
      </ul>
      <UserButton afterSignOutUrl="/" onSignOut={handleSignOut} />
    </div>
  );
};
