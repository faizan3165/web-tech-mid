import generateCard from "./GenerateCards";

import { data } from "../constants/data";

const renderCards = () => {
  const container = document.getElementById("cards-grid");

  let html = "";

  data.forEach((anime) => {
    html += generateCard(anime);
  });

  container.innerHTML = html;
};

renderCards();
