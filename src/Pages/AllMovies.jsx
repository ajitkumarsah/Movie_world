import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllMovies = ({ moviesData, getMovieDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="allMovies">
      {moviesData?.map((item) => (
        <>
          <div class="card">
            <div class="image">
              <img src={item?.show?.image?.medium} />
            </div>
            <span class="title">{item?.show?.name}</span>
            <span class="price">{item?.show?.rating?.average} ★</span>
            <span class="price">
              <button
                onClick={() => {
                  getMovieDetails(item);
                  navigate('/movie-details');
                }}
              >
                Watch Now
              </button>
            </span>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllMovies;
