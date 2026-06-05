"use client";

import { useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await api.post(
        "/auth/register",
        {
          username,
          email,
          password
        }
      );

      alert("User created successfully!");

      router.push("/login");

    } catch (error) {

      console.error(error);

      alert("Failed to create user");

    }
  }

  return (

    <main className="flex min-h-screen items-center justify-center">

      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 border p-6 rounded w-96"
      >

        <h1 className="text-2xl font-bold">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="border p-2 rounded"
        />

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
          Create Account
        </button>

      </form>

    </main>
  );
}