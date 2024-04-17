export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=z3CViMAMJ5ltyBhUHxUaAMve2e6G7p0B`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
