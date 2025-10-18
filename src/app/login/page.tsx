"use client" // Serve per usare React state e hooks
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

export default function LoginPage() {
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setIsRegister] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Qui in futuro chiamerai il backend
        login({ name: isRegister ? name : "Utente", email })
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6">{isRegister ? "Registrazione" : "Login"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {isRegister && (
                    <input
                        type="text"
                        placeholder="Nome"
                        className="border p-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                    {isRegister ? "Registrati" : "Accedi"}
                </button>
            </form>
            <button
                onClick={() => setIsRegister(!isRegister)}
                className="mt-4 text-blue-600 hover:underline"
            >
                {isRegister ? "Hai già un account? Accedi" : "Non hai un account? Registrati"}
            </button>
        </div>
    )
}
