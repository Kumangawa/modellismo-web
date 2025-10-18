import ClientLayout from './ClientLayout'

export const metadata = {
  title: 'Modellismo Community',
  description: 'Condividi le tue miniature e scopri modelli delle aziende!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
