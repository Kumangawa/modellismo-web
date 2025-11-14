type ModelCardProps = {
    title: string
    author: string
    category: string
    scale: string
    image: string
    description: string
}
import Image from "next/image"

export default function ModelCard({ title, author, category, scale, image, description }: ModelCardProps) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="rounded"
            />

            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-2">Autore: {author}</p>
                <p className="text-gray-600 text-sm mb-2">Categoria: {category} | Scala: {scale}</p>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
        </div>
    )
}
