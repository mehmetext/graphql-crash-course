"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Filters({ categories }: { categories: string[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    router.push(`/?search=${search}&category=${category}`);
  };

  return (
    <div className="flex gap-4">
      <form action={handleSearch}>
        <Input
          placeholder="Kitap ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Select value={category} onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Kategori seç" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
