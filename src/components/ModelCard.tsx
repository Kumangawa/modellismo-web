type ModelCardProps = {
    title: string
    author: string
    category: string
    scale: string
    image: string
    description: string
}

export default function ModelCard({ title, author, category, scale, image, description }: ModelCardProps) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-2">Autore: {author}</p>
                <p className="text-gray-600 text-sm mb-2">Categoria: {category} | Scala: {scale}</p>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
        </div>
    )
}
