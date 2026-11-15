const target = document.getElementById("target");
const dialog = document.querySelector("dialog");
const dialogImg = dialog.querySelector("img");
const closeSpan = dialog.querySelector("span");

picArray.forEach(pic => {
  const article = document.createElement("article");
  
  const h2 = document.createElement("h2");
  h2.textContent = pic.title;
  
  const img = document.createElement("img");
  img.src = pic.image.medium;
  img.alt = pic.title;
  
  const figure = document.createElement("figure");
  const caption = document.createElement("figcaption");
  caption.textContent = pic.caption;
  figure.appendChild(img);
  figure.appendChild(caption);
  
  const p = document.createElement("p");
  p.textContent = pic.description;
  
  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);
  
  article.addEventListener("click", function() {
    dialogImg.src = pic.image.large;
    dialogImg.alt = pic.title;
    dialog.showModal();
  });
  
  target.appendChild(article);
});

closeSpan.addEventListener("click", function() {
  dialog.close();
});