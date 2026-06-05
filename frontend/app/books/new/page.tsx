"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

export default function NewBookPage() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await api.post(
        "/books",
        {
          title,
          author,
          year: year ? Number(year) : null,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      router.push("/books");

    } catch (error) {

      console.error(error);
      alert("Failed to create book");

    }
  }

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        New Book
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="border rounded p-2"
        >
          Create Book
        </button>

      </form>

    </main>

  );
}