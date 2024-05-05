const generateCard = (anime) => {
  return `
      <div class="col-sm-12 col-md-4 col-lg-3">
        <div class="card mb-4 bg-dark text-light rounded-3">
          <a href="/pages/details.html">
            <img src="${anime.image.original}" class="card-img" alt="${anime.name}">
          </a>

          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <a href="/pages/details.html">
                <h5 class="card-title text-light">${anime.name}</h5>
              </a>
          
              <p class="badge rounded-pill text-bg-secondary">${anime.kind}</p>
            </div>
          
            </div>
            <div class="d-flex align-items-baseline justify-content-between w-100 mb-n3 px-3">
             <p>
              <i class="fa-solid fa-tv"></i> 
              <span> ${anime.episodes}</span>
             </p>
             
             <p>
              <i class="fa-regular fa-star"></i> 
              <span> ${anime.score}</span>
             </p>

            </div>
        </div>
      </div>
    `;
};

export default generateCard;
