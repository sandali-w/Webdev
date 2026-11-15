const target = document.getElementById("target");

picArray.forEach(pic => {
  const article = document.createElement("article");
  
  const h2 = document.createElement("h2");
  h2.textContent = pic.title;
  
  const img = document.createElement("img");
  img.src = pic.image;
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
  
  target.appendChild(article);
});