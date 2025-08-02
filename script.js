'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//https://coliss.com/articles/build-websites/operation/javascript/3d-typography-ztext-js.html

//入力値を受け取る
// //空の動物
// const skyAnimal = {1:"ネコ"};
// //海の動物
// const seaAnimal = {1:"シャチ"};
// //陸の動物
// const gorundAnimal = {1:"ウマ", 2:"ネコ"};
const animaldic = [
  {animal:"ネコ", output:"🐈", live:"ground"},
  {animal:"イヌ", output:"🐕", live:"sea"},
  {animal:"トリ", output:"🐦", live:"sky"},
  {animal:"ネコ", output:"🐈", live:"ground"},
  {animal:""}
]
const button = document.getElementById("btn");
button.addEventListener("click", cheakanimals);

const input = document.getElementById("input");
const h2 = document.getElementsByTagName("h2");

function cheakanimals() {
  for (const val of animaldic) {
    if (input.value.includes(val["animal"])) {
      if(val["live"] === "sky") {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = '<span data-z data-z-event="pointer">' + val["output"] + '</span>';
        // paragraph.innerText = val["output"];
        h2[0].appendChild(paragraph);
      } else if(val["live"] === "sea") {
        const paragraph = document.createElement("p");
        paragraph.innerText = val["output"];
        h2[1].appendChild(paragraph);
      } else if(val["live"] === "ground") {
        const paragraph = document.createElement("p");
        paragraph.innerText = val["output"];
        h2[2].appendChild(paragraph);
      } 
    } else {
      console.log("その他へようこそ");
    }
  }
}
