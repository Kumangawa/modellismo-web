import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Benvenuto su Modellismo Community Ticino
      </h1>
      <p className="text-lg text-center max-w-2xl">
        Condividi le tue miniature, scopri modelli di aziende e incontra altri appassionati!
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Esplora i modelli
        </button>
        <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition">
          Carica la tua miniatura
        </button>
      </div>
    </main>
  );
}

