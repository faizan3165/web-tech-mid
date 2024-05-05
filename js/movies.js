import generateCard from "./GenerateCards";

import { data } from "../constants/data";

const renderMovieCards = () => {
  const container = document.getElementById("cards-grid");

  let html = "";

  const d = data.filter((a) => a.kind.toLowerCase() === "movie");

  d.forEach((anime) => {
    html += generateCard(anime);
  });

  container.innerHTML = html;
};

renderMovieCards();
