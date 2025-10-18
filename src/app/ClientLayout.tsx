"use client"

import './globals.css'
import { ReactNode } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, logout } = useAuth()

    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Modellismo</h1>
                <div className="space-x-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/community" className="hover:underline">Community</a>
                    <a href="/companies" className="hover:underline">Aziende</a>

                    {user ? (
                        <>
                            <a href="/profile" className="hover:underline">{user.name}</a>
                            <button onClick={logout} className="hover:underline">Logout</button>
                        </>
                    ) : (
                        <a href="/login" className="hover:underline">Login</a>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <Navbar />
            <main className="container mx-auto p-8">{children}</main>
            <footer className="bg-gray-200 text-gray-700 p-4 text-center">
                © 2025 Modellismo Community
            </footer>
        </AuthProvider>
    )
}
