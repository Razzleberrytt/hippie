import { useState } from 'react';
import herbs from '../../data/herbs.json'; // Adjust path if needed

type Herb = {
  Name: string;
  ScientificName?: string;
  Region?: string;
  Effects?: string;
  Preparation?: string;
  [key: string]: any; // Allow flexible fields
};

export default function EncyclopediaPage() {
  const [search, setSearch] = useState('');

  const filtered = herbs.filter((herb: Herb) =>
    herb.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-retro mb-6">🌿 Herb Encyclopedia</h1>

      <input
        type="text"
        placeholder="Search herbs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 bg-black border border-gray-700 text-white"
      />

      <div className="space-y-4">
        {filtered.map((herb: Herb, idx: number) => (
          <details key={idx} className="border border-gray-700 rounded-lg">
            <summary className="cursor-pointer px-4 py-2 bg-gray-800">
              {herb.Name}
            </summary>
            <div className="p-4 bg-gray-900 text-sm">
              {Object.entries(herb).map(([key, value]) => (
                key !== 'Name' && value ? (
                  <div key={key} className="mb-2">
                    <strong>{key}:</strong> {value}
                  </div>
                ) : null
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
