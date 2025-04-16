
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <motion.img
          src="/logo.jpg"
          alt="INCARS Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-72 h-auto"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">INCARS</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-gray-300">Услуги</a>
          <a href="#cars" className="hover:text-gray-300">Автомобили</a>
          <a href="#about" className="hover:text-gray-300">О нас</a>
          <a href="#contact" className="hover:text-gray-300">Контакты</a>
        </nav>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-6">Авто под заказ из Кореи и Китая</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Полный цикл — от подбора до доставки. Безопасно, выгодно, под ключ.
        </p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Оставить заявку</a>
      </section>

      <section id="services" className="px-6 py-20 bg-gray-900 text-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Наши услуги</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-bold mb-2">Подбор авто</h4>
            <p>Ищем надёжные авто по вашему запросу</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Проверка и выкуп</h4>
            <p>Техническая диагностика, торг и выкуп</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Доставка и оформление</h4>
            <p>Доставка в РФ, растаможка, постановка на учёт</p>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 bg-black text-white">
        <h3 className="text-3xl font-semibold text-center mb-12">О компании</h3>
        <p className="max-w-3xl mx-auto text-center">
          INCARS — это команда профессионалов с опытом более 7 лет. Мы доставили сотни автомобилей и гордимся тем, что предлагаем честный сервис, прозрачную цену и полное сопровождение сделки.
        </p>
      </section>

      <section id="contact" className="px-6 py-20 bg-gray-900 text-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Свяжитесь с нами</h3>
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Ваше имя" className="p-3 rounded bg-black border border-gray-600" />
            <input type="tel" placeholder="Телефон" className="p-3 rounded bg-black border border-gray-600" />
            <textarea placeholder="Комментарий" className="p-3 rounded bg-black border border-gray-600"></textarea>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              Отправить заявку в WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 bg-black text-gray-500">
        © 2025 INCARS. Все права защищены.
      </footer>
    </div>
  );
}
