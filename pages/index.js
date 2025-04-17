import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-white to-gray-400 text-transparent bg-clip-text">
          Автомобили из Кореи и Китая
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Подбор, проверка, доставка и оформление автомобилей под ключ с полным юридическим сопровождением.
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200"
        >
          Оставить заявку
        </Link>
      </main>
    </div>
  );
}