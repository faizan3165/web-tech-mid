import generateCard from "./GenerateCards";

import { data } from "../constants/data";

const renderSeasonsData = () => {
  const container = document.getElementById("cards-grid");

  let html = "";

  const d = data.filter((a) => a.kind.toLowerCase() === "season");

  d.forEach((anime) => {
    html += generateCard(anime);
  });

  container.innerHTML = html;
};

renderSeasonsData();
