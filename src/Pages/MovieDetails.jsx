import React from 'react';

const MovieDetails = ({ moviesDetails }) => {
  return (
    <div>
      <div id="container">
        <div class="product-image">
          <img src={moviesDetails?.show?.image?.medium} alt="Omar Dsoky" />
        </div>
        <div class="product-details">
          <h1>{moviesDetails?.show?.name}</h1>
          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p class="information">
            {moviesDetails?.show?.summary?.slice(0, 200)}
          </p>

          <div class="control">
            <a href={moviesDetails?.show?.url}>
              <button class="btn">
                <span class="buy">Watch Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
