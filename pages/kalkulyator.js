import { useState, useEffect } from "react";
import Header from "./Header";

export default function Kalkulyator() {
  const [carPrice, setCarPrice] = useState(0);
  const [delivery, setDelivery] = useState(50000);
  const [tax, setTax] = useState(0);
  const [engineVolume, setEngineVolume] = useState(0);
  const [engineType, setEngineType] = useState("benzin");
  const [carAge, setCarAge] = useState("do3");
  const [customDuty, setCustomDuty] = useState(0);

  useEffect(() => {
    let rate = 0;
    if (carAge === "do3") {
      rate = engineType === "benzin" ? 3.5 : 4.2;
    } else {
      rate = engineType === "benzin" ? 5.5 : 6.2;
    }
    setCustomDuty(Math.round(engineVolume * rate));
  }, [engineVolume, engineType, carAge]);

  const calculateTotal = () => {
    const taxAmount = carPrice * 0.15;
    setTax(taxAmount);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Калькулятор доставки авто</h1>

        <div className="flex flex-col gap-4 max-w-md">
          <label>
            Стоимость автомобиля (₽):
            <input
              type="number"
              value={carPrice}
              onChange={(e) => setCarPrice(Number(e.target.value))}
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            Доставка (по умолчанию 50 000 ₽):
            <input
              type="number"
              value={delivery}
              onChange={(e) => setDelivery(Number(e.target.value))}
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <button
            onClick={calculateTotal}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Рассчитать
          </button>

          <div className="mt-4 text-lg">
            <p>Ориентировочная пошлина: <strong>{tax.toLocaleString()} ₽</strong></p>
            <p>Итого: <strong>{(carPrice + delivery + tax).toLocaleString()} ₽</strong></p>
          </div>
        </div>
        <div className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-semibold mb-4">Калькулятор растаможки</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <label>
              Объём двигателя (см³):
              <input type="number" value={engineVolume} onChange={(e) => setEngineVolume(Number(e.target.value))} className="w-full border p-2 rounded mt-1" />
            </label>
            <label>
              Тип двигателя:
              <select value={engineType} onChange={(e) => setEngineType(e.target.value)} className="w-full border p-2 rounded mt-1">
                <option value="benzin">Бензин</option>
                <option value="dizel">Дизель</option>
              </select>
            </label>
            <label>
              Возраст автомобиля:
              <select value={carAge} onChange={(e) => setCarAge(e.target.value)} className="w-full border p-2 rounded mt-1">
                <option value="do3">До 3 лет</option>
                <option value="ot3">От 3 лет</option>
              </select>
            </label>
            
            <div className="mt-4 text-lg">
              <p>Пошлина: <strong>{customDuty.toLocaleString()} ₽</strong></p>
              <p className="text-sm text-gray-600">Ставка: {carAge === "do3" ? (engineType === "benzin" ? "3.5" : "4.2") : (engineType === "benzin" ? "5.5" : "6.2")} ₽/см³</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}