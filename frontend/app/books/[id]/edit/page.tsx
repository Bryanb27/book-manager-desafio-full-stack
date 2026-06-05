"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/services/api";

export default function EditBookPage() {

  const { id } = useParams();

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    async function loadBook() {

      try {

        const token =
          localStorage.getItem("token");

        const response = await api.get(
          `/books/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const book = response.data;

        setTitle(book.title);
        setAuthor(book.author);
        setYear(book.year?.toString() || "");
        setDescription(book.description || "");

      } catch (error) {

        console.error(error);

      }
    }

    loadBook();

  }, [id]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await api.put(
        `/books/${id}`,
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

      alert("Failed to update book");
    }
  }

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Edit Book
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <input
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
          className="border p-2 rounded"
        />

        <textarea
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
          Save
        </button>

      </form>

    </main>

  );
}