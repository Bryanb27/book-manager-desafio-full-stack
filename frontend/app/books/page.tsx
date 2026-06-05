"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Book } from "@/types/book";

export default function BooksPage() {

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  async function searchBooks() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        `/books?title=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setBooks(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: string) {

    const confirmed = confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmed) return;

    try {

      const token = localStorage.getItem("token");

      await api.delete(
        `/books/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setBooks(prev =>
      prev.filter(book => book.id !== id)
      );

    } catch (error) {

      console.error(error);
      alert("Failed to delete book");

    }
  }

  useEffect(() => {

    async function loadBooks() {

      try {

        const token = localStorage.getItem("token");

        const response = await api.get(
          "/books",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setBooks(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    }

    loadBooks();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (

    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">
        Books
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
      </div>

      <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(e) =>
        setSearch(e.target.value)
        }
        className="border p-2 rounded"
      />

      <button
        onClick={searchBooks}
        className="border rounded px-4"
      >
        Search
      </button>
      </div>

      <div className="mb-4">
      <Link
        href="/books/new"
        className="border rounded p-2"
       >
        New Book
       </Link>
       </div>

      {books.length === 0 ? (

        <p>No books found.</p>

      ) : (

        <div className="space-y-4">

          {books.map(book => (

            <div
              key={book.id}
              className="border rounded p-4"
            >

              <h2 className="font-bold">
                {book.title}
              </h2>

              <p>
                {book.author}
              </p>

              {book.year && (
                <p>
                  Year: {book.year}
                </p>
              )}
              
              <div className="flex gap-2 mt-2">
              <Link
              href={`/books/${book.id}/edit`}
              className="border rounded px-2 py-1"
              >
              Edit
              </Link>

              <button
              onClick={() =>
              handleDelete(book.id)
              }
              className="border rounded px-2 py-1"
              >
              Delete
              </button>
              </div>

            </div>

          ))}

        </div>

      )}

    </main>

  );
}