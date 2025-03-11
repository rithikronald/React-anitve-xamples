import React, {useEffect, useState} from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`,
      )
        .then(res => res.json())
        .then(data => {
          setResults(data.query.search);
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold">Search Wikipedia</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border rounded"
      />
      {loading && <p className="text-gray-500">Loading...</p>}
      <ul className="mt-2">
        {results.map(result => (
          <li key={result.pageid} className="p-2 border-b">
            <a
              href={`https://en.wikipedia.org/wiki/${result.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
