let List = document.querySelector(".products-list");
let searchInput = document.querySelector(".product-search__input");
let Select = document.querySelector(".product-sort__select");

function makeItem(params){
  List.innerHTML = ''
  params.forEach((element) =>{
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
}

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



// 1-usul


function maxCost(num){
  let resultmax = []
  watches.forEach((arr) =>{
    if(arr.cost >= num.value){
      resultmax.push(arr)
    }
  })
  console.log(resultmax);
  makeItem(resultmax)
}


function minCost(num){
  let resultmin = []
  watches.forEach((item)=>{
    if(item.cost <= num.value){
      resultmin.push(item)
    }
  })
  console.log(resultmin);
  makeItem(resultmin)
}






// 2-usul

// function maxCost(num){
//   let resultComp = []
//   watches.forEach((item) =>{
//     if(item.cost >= num.value){
//       resultComp.push(item)
//     }
//   })

//   console.log(resultComp);
// }

// function minCost(num){
//   let resultComp = []
//   watches.forEach((item) =>{
//     if(item.cost <= num.value){
//       resultComp.push(item)
//     }
//   })

//   console.log(resultComp);
// }
