import React, { useEffect, useState }from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetchMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          console.log("Error fetching movies:", error);
        });
    }, []);

    const fetchMovies = async () => {
      const response = await fetch(
        "https://seleksi-sea-2023.vercel.app/api/movies"
      );
      const data = await response.json();
      return data;
    };

  return (
    <div>
      <section id="movies" className="pt-10">
        <div className="container">
          <h2 className="text-4xl font-bold text-center p-5 text-white">
            Movies
          </h2>

          {movies.length === 0 ? (
            <div className="text-white text-center">Loading...</div>
          ) : (
            <div className="flex flex-wrap justify-center items-center">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className=" bg-violet-950 text-white text-center w-64 m-2 p-4 rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <div className="font-bold text-lg h-[50px] overflow-hidden">
                    {movie.title}
                  </div>
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="mx-auto my-4"
                  />
                  <div className="bg-purple-700 font-bold rounded-lg mr-20 ml-20 mb-3">
                    {movie.age_rating} +
                  </div>
                  <div className="italic">
                    Release Date: {movie.release_date}
                  </div>
                  <div className="font-bold text-green-400">
                    Ticket Price: {movie.ticket_price}
                  </div>
                  <div className="bg-white text-indigo-900 bottom-0 right-0 left-0 p-3 absolute opacity-0 transition-all duration-300 ease-in-out transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                    <h2 className="font-bold text-lg">Description:</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Movies