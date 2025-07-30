'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//入力値を受け取る
// //空の動物
// const skyAnimal = {1:"ネコ"};
// //海の動物
// const seaAnimal = {1:"シャチ"};
// //陸の動物
// const gorundAnimal = {1:"ウマ", 2:"ネコ"};
const animaldic = [
  {animal:"ネコ", output:"🐈", live:"sky"},
  {animal:"イヌ", output:"🐕", live:"sky"},
  {animal:"トリ", output:"🐦", live:"sky"},
  {animal:"ネコ", output:"🐈", live:"sky"},
]
const button = document.getElementById("btn");
button.addEventListener("click", cheakanimals);

const input = document.getElementById("input");
const skyDiv = document.getElementById("skyHorizon");

function cheakanimals() {
  for (const val of animaldic) { //.mapの方がよさそう
    if (input.value.includes(val["animal"])) {
      if(val["live"] === "sky") {
        const paragraph = document.createElement("p");
        paragraph.innerText = val["output"];
        skyDiv.appendChild(paragraph);
      }
    } else {
      console.log("その他へようこそ");
    }
  }
}
