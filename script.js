'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//https://coliss.com/articles/build-websites/operation/javascript/3d-typography-ztext-js.html

const animaldic = [
  {animal:"インコ", output:"🦜", live:"sky"},
  {animal:"カンガルー", output:"🦘", live:"ground"},
  {animal:"シカ", output:"🦌", live:"ground"},
  {animal:"ゾウ", output:"🐘", live:"ground"},
  {animal:"キリン", output:"🦒", live:"ground"},
  {animal:"サイ", output:"🦏", live:"ground"},
  {animal:"クマ", output:"🐻", live:"ground"},
  {animal:"ペンギン", output:"🐧", live:"sea"},
  {animal:"コアラ", output:"🐨", live:"ground"},
  {animal:"ラッコ", output:"🦦", live:"sea"},
  {animal:"アザラシ", output:"🦭", live:"sea"},
  {animal:"トラ", output:"🐅", live:"ground"},
  {animal:"シマウマ", output:"🦓", live:"ground"},
  {animal:"リス", output:"🐿", live:"ground"},
  {animal:"フクロウ", output:"🦉", live:"ground"},
  {animal:"フラミンゴ", output:"🦩", live:"ground"},
  {animal:"ホッキョクグマ", output:"🐻‍❄️", live:"sea"},
  {animal:"サル", output:"🐒", live:"ground"},
  {animal:"ヒョウ", output:"🐆", live:"ground"},
  {animal:"ライオン", output:"🦁", live:"ground"},
  {animal:"パンダ", output:"🐼", live:"ground"},
  {animal:"バイソン", output:"🦬", live:"ground"},
  {animal:"ビーバー", output:"🦫", live:"ground"},
  {animal:"カメ", output:"🐢", live:"ground"},
  {animal:"カバ", output:"🦛", live:"ground"},
  {animal:"トカゲ", output:"🦎", live:"ground"},
  {animal:"オオカミ", output:"🐺", live:"ground"},
  {animal:"ワシ", output:"🦅", live:"ground"},
  {animal:"ゴリラ", output:"🦍", live:"ground"},
  {animal:"ブタ", output:"🐖", live:"ground"},
  {animal:"コウモリ", output:"🦇", live:"ground"},
  {animal:"プードル", output:"🐩", live:"ground"},
  {animal:"ウシ", output:"🐄", live:"ground"},
  {animal:"ウマ", output:"🐎", live:"ground"},
  {animal:"イノシシ", output:"🐗", live:""},
  {animal:"ウサギ", output:"🐰", live:"ground"},
  {animal:"ネズミ", output:"🐭", live:"ground"},
  {animal:"ニワトリ", output:"🐔", live:"ground"},
  {animal:"オラウータン", output:"🦧", live:"ground"},
  {animal:"ラクダ", output:"🐪", live:"ground"},
  {animal:"マンモス", output:"🦣", live:"ground"},
  {animal:"スカンク", output:"🦨", live:"ground"},
  {animal:"ナマケモノ", output:"🦥", live:"ground"},
  {animal:"ワニ", output:"🐊", live:"sea"},
  {animal:"ヘビ", output:"🐍", live:"ground"},
  {animal:"サメ", output:"🦈", live:"sea"},
  {animal:"イルカ", output:"🐬", live:"sea"},
  {animal:"クジラ", output:"🐳", live:"sea"},
  {animal:"アルパカ", output:"🦙", live:"ground"},
  {animal:"ロバ", output:"🫏", live:"ground"},
  {animal:"ユニコーン", output:"🦄", live:"ground"},
  {animal:"ヒツジ", output:"🐑", live:"ground"},
  {animal:"アナグマ", output:"🦡", live:"ground"},
  {animal:"ハリネズミ", output:"🦔", live:"ground"},
  {animal:"キツネ", output:"🦊", live:"ground"},
  {animal:"カエル", output:"🐸", live:"ground"},
  {animal:"ドラゴン", output:"🐉", live:"ground"},
  {animal:"ティラノサウルス", output:"🦖", live:"ground"},
  {animal:"クラゲ", output:"🪼", live:"sea"},
  {animal:"カモ", output:"🦆", live:"ground"},
  {animal:"ハト", output:"🕊️", live:"sky"},
  {animal:"スワン", output:"🦢", live:"sea"},
  {animal:"クジャク", output:"🦚", live:"ground"},
  {animal:"エビ", output:"🦐", live:"sea"},
  {animal:"ロブスター", output:"🦞", live:"sea"},
  {animal:"カニ", output:"🦀", live:"sea"},
  {animal:"タコ", output:"🐙", live:"sea"},
  {animal:"イカ", output:"🦑", live:"sea"},
  {animal:"サカナ", output:"🐠", live:"sea"},
  {animal:"フグ", output:"🐡", live:"sea"},
  {animal:"カラス", output:"🐦‍⬛", live:"sky"},
  {animal:"ガチョウ", output:"🪿", live:"ground"},
  {animal:"フェニックス", output:"🐦‍🔥", live:"sky"},
  {animal:"ドードー", output:"🪿", live:"ground"},
  {animal:"サンゴ", output:"🪸", live:"sea"},
  {animal:"カイ", output:"🐚", live:"sea"},
  {animal:"ネコ", output:"🐈", live:"ground"},
  {animal:"イヌ", output:"🐕", live:"ground"},
  {animal:"トリ", output:"🐦", live:"sky"},
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
        paragraph.style.fontSize = "50px";
        h2[0].appendChild(paragraph);
        zDraw(paragraph,{depth:"1rem",event:"pointer"});
      } else if(val["live"] === "sea") {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = '<span data-z data-z-event="pointer">' + val["output"] + '</span>';
        // paragraph.innerText = val["output"];
        h2[1].appendChild(paragraph);
        zDraw(paragraph,{depth:"1rem",event:"pointer"});
      } else if(val["live"] === "ground") {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = '<span data-z data-z-event="pointer">' + val["output"] + '</span>';
        // paragraph.innerText = val["output"];
        h2[2].appendChild(paragraph);
        zDraw(paragraph,{depth:"1rem",event:"pointer"});
      } 
    } 
  }
}
