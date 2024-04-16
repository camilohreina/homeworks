export default function MovieCard({ movie }) {
  return (
    <div className="relative ">
      <img
        src={movie.posterUrl}
        alt="image"
        className="object-cover rounded-3xl shadow-lg shadow-slate-700 opacity-70"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-end rounded-b-3xl">
        <div className="bg-gradient-to-b from-transparent w-full rounded-b-3xl to-gray-800 py-8 px-4 flex justify-between items-center">
          <h3 className="text-gray-300 text-2xl font-bold">{movie.title}</h3>
          <span className="text-gray-300 text-xl font-bold">{movie.year}</span>
        </div>
      </div>
    </div>
  );
}
