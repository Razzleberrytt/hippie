import { useEffect, useState } from 'react';
import herbs from '../herbs.json';

export default function Encyclopedia() {
  const [selectedHerb, setSelectedHerb] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">🌿 Psychoactive Herb Index</h1>

      {herbs.map((herb: any, idx: number) => (
        <div key={idx} className="mb-4 border border-purple-500 rounded">
          <button
            className="w-full text-left p-4 bg-purple-700 text-white font-semibold"
            onClick={() => setSelectedHerb(selectedHerb === herb.Name ? null : herb.Name)}
          >
            {herb.Name}
          </button>
          {selectedHerb === herb.Name && (
            <div className="p-4 bg-purple-900 text-white">
              <p><strong>Scientific Name:</strong> {herb.ScientificName}</p>
              <p><strong>Effects:</strong> {herb.Effects}</p>
              <p><strong>Preparation:</strong> {herb.Preparation}</p>
              <p><strong>Legal Status:</strong> {herb.LegalStatus}</p>
              {/* Add more fields from your JSON as needed */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
