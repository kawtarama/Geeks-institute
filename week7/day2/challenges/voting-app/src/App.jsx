import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const updatedLanguages = languages.map((language, i) => {
      if (i === index) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(updatedLanguages);
  };

  const getTotalVotes = () => {
    return languages.reduce((total, language) => total + language.votes, 0);
  };

  const getWinner = () => {
    if (getTotalVotes() === 0) return null;
    return languages.reduce((winner, current) => 
      current.votes > winner.votes ? current : winner
    );
  };

  const resetVotes = () => {
    const resetLanguages = languages.map(language => ({
      ...language,
      votes: 0
    }));
    setLanguages(resetLanguages);
  };

  const winner = getWinner();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🗳️ Programming Language Voting
          </h1>
          
          <div className="space-y-4 mb-8">
            {languages.map((language, index) => (
              <div key={language.name} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-semibold text-gray-700">
                    {language.name}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language.votes} votes
                  </span>
                </div>
                <button
                  onClick={() => handleVote(index)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 active:scale-95"
                >
                  Vote
                </button>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold text-gray-700">
                Total Votes: <span className="text-blue-600">{getTotalVotes()}</span>
              </div>
              <button
                onClick={resetVotes}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Reset All
              </button>
            </div>
            
            {winner && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                   Current Leader
                </h3>
                <p className="text-green-700">
                  <span className="font-bold">{winner.name}</span> with {winner.votes} votes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;