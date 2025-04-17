import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center bg-black shadow-sm">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-400 text-transparent bg-clip-text">
        INCARS
      </h1>
      <nav className="space-x-6 text-sm font-medium text-white">
        <Link href="/catalog" className="hover:text-gray-300">Автомобили</Link>
        <Link href="/kalkulyator" className="hover:text-gray-300">Калькулятор</Link>
        <Link href="/about" className="hover:text-gray-300">О компании</Link>
        <Link href="/contact" className="hover:text-gray-300">Контакты</Link>
      </nav>
    </header>
  );
}