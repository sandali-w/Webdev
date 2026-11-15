const target = document.getElementById("target");
const dialog = document.querySelector("dialog");
const dialogImg = dialog.querySelector("img");
const closeBtn = dialog.querySelector("span");

picArray.forEach(pic => {
  const article = document.createElement("article");
  
  const h2 = document.createElement("h2");
  h2.textContent = pic.title;
  
  const img = document.createElement("img");
  img.src = pic.image.medium;
  img.alt = pic.title;
  
  const figure = document.createElement("figure");
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = pic.caption;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  
  const p = document.createElement("p");
  p.textContent = pic.description;
  
  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);
  
  article.addEventListener("click", () => {
    dialogImg.src = pic.image.large;
    dialogImg.alt = pic.title;
    dialog.showModal();
  });
  
  target.appendChild(article);
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});