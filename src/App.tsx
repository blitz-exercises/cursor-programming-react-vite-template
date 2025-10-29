import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* BLITZ Header */}
        <div className="mb-8 text-center">
          <img 
            src="/blitz-logo-green.webp" 
            alt="BLITZ" 
            className="h-32 mx-auto mb-4 drop-shadow-lg"
          />
          <p className="text-lg font-semibold text-white">Blitz React Vite Starter</p>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <button 
              onClick={() => setCount((c) => c + 1)}
              className="px-8 py-3 bg-[#c6ff00] text-black rounded-lg hover:bg-lime-300 transition font-semibold text-lg"
            >
              Count: {count}
            </button>
          </div>
          <p className="text-white">
            Click the button to increment the counter
          </p>
        </div>

        <div className="mt-6 text-center text-sm text-white">
          <p>Built with React 19 • Powered by Vite • Styled with Tailwind ⚡</p>
        </div>
      </div>
    </div>
  );
}

export default App;
