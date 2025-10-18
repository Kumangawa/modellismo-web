import ModelCard from "../../components/ModelCard"
import { mockModels } from "../../data/mockModels"

export default function CommunityPage() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Modelli della Community</h2>
            <p className="mb-6">Esplora le miniature caricate dagli utenti.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockModels.map(model => (
                    <ModelCard
                        key={model.id}
                        title={model.title}
                        author={model.author}
                        category={model.category}
                        scale={model.scale}
                        image={model.image}
                        description={model.description}
                    />
                ))}
            </div>
        </div>
    )
}
