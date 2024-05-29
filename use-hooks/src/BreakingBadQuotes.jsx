import React, { useState, useEffect } from 'react';

function BreakingBadQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/quotes/1')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {quotes.map((quote) => (
            <blockquote key={quote.quote_id}>
              <p>{quote.quote}</p>
              <footer>{quote.author}</footer>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}

export default BreakingBadQuotes;
