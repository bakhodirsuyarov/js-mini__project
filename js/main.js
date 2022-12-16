let List = document.querySelector(".products-list");
let searchInput = document.querySelector(".product-search__input");
let Select = document.querySelector(".product-sort__select");
let dan = document.querySelector("#mincost");
let gacha = document.querySelector("#maxcost");
let badge = document.querySelector("#badge");
let Modal = document.querySelector(".modal");
let Card = document.querySelector(".card");
let savatcha = []

function makeItem(params){
  List.innerHTML = ''
  params.forEach((element, index) =>{
    let item = document.createElement("li");
    let img = document.createElement("img");
    img.src = element.img_src
    let title = document.createElement("h3");
    title.textContent = element.name
    let price = document.createElement("p");
    price.textContent = element.cost + " $"
    let btn = document.createElement("button");
    btn.textContent = "Sotib olish"
    btn.setAttribute("onclick", `buyFunc(${index})`)


    item.classList.add("products-item");
    img.classList.add("products-img");
    title.classList.add("products-title");
    price.classList.add("products-cost");
    btn.classList.add("products-link", "btn")

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(btn);


    List.appendChild(item)
  })
}

// console.log(savat);


makeItem(watches)

function search(){
  let result = watches.filter((arr) =>{
    return arr.name.toLowerCase().includes(searchInput.value.toLowerCase())
  })
  makeItem(result)
}

let categoryList = []

function addCategory(){
  watches.map(item =>{
    if(categoryList.length === 0){
      categoryList.push(item.category)
    }
    let result = categoryList.filter(arr =>{
      return arr === item.category
    })
    if(result.length == 0){
      categoryList.push(item.category)
    }
  })
}

addCategory()



categoryList.forEach((item) =>{
  let opt = document.createElement("option")
  opt.value = item
  opt.textContent = item
  Select.appendChild(opt)
})


function searchCategory(item) {
  if (item.value === 'all') {
      makeItem(watches)
  } else {
      let result = watches.filter((arr) => {
          return arr.category === item.value
      })
      console.log(result);
      makeItem(result)
  }

}


function maxCost(){
  let result = watches.filter((item, index) =>{
      return item.cost > dan.value && item.cost < gacha.value
  })
  makeItem(result);
}



// Buying

function buyFunc(i){
  if(savatcha.length === 0){
    savatcha.push({...watches[i], count: 1})
    watches[i].count = watches[i].count - 1;
  }else{
    let result = savatcha.filter(item =>{
      return item.name === watches[i].name
    })
    if(result.length === 0){
      savatcha.push({...watches[i], count: 1})
      watches[i].count = watches[i].count - 1;
    }
    console.log(result);

  }

  console.log(savatcha);
  badge.innerText = savatcha.length
}


// BASCET

function view(){
  Card.innerHTML = ""
  Modal.classList.add("active")
  savatcha.forEach((element, index) =>{
    let item = document.createElement("li");
    let img = document.createElement("img");
    img.src = element.img_src
    let leftwrapper = document.createElement("div");
    let rightwrapper = document.createElement("div");
    let title = document.createElement("h3");
    title.textContent = element.name
    let price = document.createElement("p");
    price.textContent = element.cost + " $"
    let decr = document.createElement("button");
    decr.textContent = "-"
    decr.setAttribute("onclick", `decrFunc(${index})`)
    let countText = document.createElement("h5");
    countText.textContent = element.count
    let incr = document.createElement("button");
    incr.textContent = "+"
    incr.setAttribute("onclick", `incrFunc(${index})`)
    let leftTop = document.createElement("div")
    let leftBottom = document.createElement("div")
    let summa = document.createElement("h2");
    summa.innerText = "Umumiy summa : " + element.count * element.cost
    let uchirish = document.createElement("button");
    uchirish.textContent = "uchirish"
    uchirish.setAttribute("onclick", `uchirish(${index})`);


    item.classList.add("modal-item");
    img.classList.add("modal-img");
    title.classList.add("products-title");
    price.classList.add("products-cost");
    decr.classList.add("products-link", "btn")
    incr.classList.add("products-link", "btn")
    leftwrapper.classList.add("leftbox_top");
    leftTop.classList.add("leftTop");
    countText.classList.add("modal-countText");
    decr.classList.add("modal-decr");
    incr.classList.add("modal-incr");


    item.appendChild(img);
    item.appendChild(leftwrapper);
    item.appendChild(rightwrapper);
    item.appendChild(uchirish)
    leftTop.appendChild(decr);
    leftTop.appendChild(countText);
    leftTop.appendChild(incr);
    leftwrapper.appendChild(leftTop);
    leftBottom.appendChild(summa)
    leftwrapper.appendChild(leftBottom);
    rightwrapper.appendChild(title);
    rightwrapper.appendChild(price);



    Card.appendChild(item)
  })
};

function off(){
  Modal.classList.remove("active")
}


function incrFunc(i){
  savatcha[i].count += 1
  view()
}

function decrFunc(i){
  if(savatcha[i].count === 1){
    savatcha.splice(i, 1)
  }else{
    savatcha[i].count -= 1
  }
  view()
}

function uchirish(i){
  savatcha.splice(i, 1);
  view()
}