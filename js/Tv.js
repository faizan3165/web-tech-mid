import generateCard from "./GenerateCards";

import { data } from "../constants/data";

const renderTvCards = () => {
  const container = document.getElementById("cards-grid");

  let html = "";

  const d = data.filter((a) => a.kind.toLowerCase() === "tv");

  d.forEach((anime) => {
    html += generateCard(anime);
  });

  container.innerHTML = html;
};

renderTvCards();
