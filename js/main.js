let List = document.querySelector(".products-list")

watches.forEach((element) =>{

  let item = document.createElement("li");
  let img = document.createElement("img");
  img.src = element.img_src
  let title = document.createElement("h3");
  title.textContent = element.name
  let price = document.createElement("p");
  price.textContent = element.cost + " $"
  let link = document.createElement("a");
  link.text = "Sotib olish"

  item.classList.add("products-item");
  img.classList.add("products-img");
  title.classList.add("products-title");
  price.classList.add("products-cost");
  link.classList.add("products-link")

  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(price);
  item.appendChild(link);


  List.appendChild(item)
})
