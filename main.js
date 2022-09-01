let btn = document.querySelector(".btn");
let img = document.querySelector(".img");
let types = document.querySelector("#types");
let url = "https://picsum.photos/200";

types.addEventListener("change", gUrl);
btn.addEventListener("click", gImg);
//
function gUrl(e) {
  if (e.target.value == "B&W") {
    url = "https://picsum.photos/200?grayscale";
  } else {
    url = "https://picsum.photos/200";
  }
}

async function gImg() {
  let res = await fetch(url);
  if (img.children.length > 0) {
    Array.from(img.children).unshift(`<img src="${res.url}">`);
  }
  img.innerHTML += `<img src="${res.url}">`;
  // console.log(res.url);
  // let c = Array.from(img.children).reverse();
  // console.log(c);
}
