export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Benvenuto su Modellismo Community
      </h1>
      <p className="text-lg max-w-2xl mb-6">
        Condividi le tue miniature, scopri modelli di aziende e incontra altri appassionati!
      </p>
      <div className="flex gap-4">
        <a href="/community" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Esplora la Community
        </a>
        <a href="/companies" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition">
          Modelli delle Aziende
        </a>
      </div>
    </div>
  )
}
