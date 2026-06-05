"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/books");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="p-8">
      Loading...
    </div>
  );
}