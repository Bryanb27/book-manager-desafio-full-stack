"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      router.push("/books");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-80"
      >
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="border rounded p-2"
        >
          Login
        </button>
      </form>
    </main>
  );
}