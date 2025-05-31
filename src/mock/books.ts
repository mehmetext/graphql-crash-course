import { Book } from "../generated/graphql";

const books: Omit<Book, "author">[] = [
  {
    id: "1",
    title: "Suç ve Ceza",
    description:
      "Rus edebiyatının başyapıtlarından biri olan bu roman, bir öğrencinin işlediği çifte cinayet ve sonrasında yaşadığı vicdan azabını konu alır.",
    price: 45.99,
    coverImage: "https://example.com/suc-ve-ceza.jpg",
    category: "Roman",
    authorId: "1",
  },
  {
    id: "2",
    title: "1984",
    description:
      "Distopik bir dünyada geçen bu roman, totaliter bir rejimin insanlar üzerindeki etkisini anlatır.",
    price: 35.5,
    coverImage: "https://example.com/1984.jpg",
    category: "Distopik",
    authorId: "2",
  },
  {
    id: "3",
    title: "Küçük Prens",
    description:
      "Çocuklar için yazılmış ama her yaştan okuyucuya hitap eden bu masal, bir prensin farklı gezegenlerdeki maceralarını anlatır.",
    price: 25.75,
    coverImage: "https://example.com/kucuk-prens.jpg",
    category: "Çocuk",
    authorId: "2",
  },
  {
    id: "4",
    title: "Simyacı",
    description:
      "Bir çobanın kendi efsanesini bulmak için çıktığı yolculuğu anlatan bu roman, kişisel gelişim temasını işler.",
    price: 30.0,
    coverImage: "https://example.com/simyaci.jpg",
    category: "Kişisel Gelişim",
    authorId: "3",
  },
  {
    id: "5",
    title: "Şeker Portakalı",
    description:
      "Brezilya'nın yoksul bir bölgesinde yaşayan Zezé'nin hikayesini anlatan bu roman, çocukluğun masumiyetini ve acımasızlığını yansıtır.",
    price: 28.5,
    coverImage: "https://example.com/seker-portakali.jpg",
    category: "Roman",
    authorId: "4",
  },
];

export default books;
