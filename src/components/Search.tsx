"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import getWikiResults from "@/lib/getWikiResults";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}`);
    setSearch("");
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="p-2 text-xl rounded-xl ml-2 font-bold bg-slate-300">
        🚀
      </button>
    </form>
  );
}
