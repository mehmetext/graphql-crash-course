import { getHome } from "@/actions/get-home";
import Filters from "@/components/filters";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string; category: string }>;
}) {
  const home = await getHome(await searchParams);

  return (
    <div className="container mx-auto py-8">
      {/* Header Section */}
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Kitap Koleksiyonu</h1>
        <Filters categories={home.categories} />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Sample Book Card - This will be mapped over actual data */}
        {home.books.map((book) => (
          <Card key={book.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] relative bg-gray-100 rounded-md overflow-hidden mb-4">
                {book.coverImage ? (
                  <Image src={book.coverImage} alt={book.title} fill />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No image</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {book.description}
              </p>
              <div className="mt-2">
                <span className="text-lg font-semibold">
                  {Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(book.price)}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Detaylar</Button>
              <Button>Sepete Ekle</Button>
            </CardFooter>
          </Card>
        ))}

        {/* Repeat the card structure for more books */}
        {/* This is just a sample, in real implementation we'll map over the data */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline">Önceki</Button>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Sonraki</Button>
      </div>
    </div>
  );
}
