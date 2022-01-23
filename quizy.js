// let correct_button = document.getElementById("button_1_1")
// correct_button.className = "correct"
"use strict";


let option = [
    ["たかなわ", "こうわ", "たかわ"],
    ["かめいど", "かめと", "かめど"],
    ["こうじまち", "かゆまち", "おかとまち"],
    ["おなりもん", "ごせいもん", "おかどもん"],
    ["とどろき", "たたりき", "たたら"],
    ["しゃくじい", "いじい", "せきこうい"],
    ["ぞうしき", "ざっしょく", "ざっしき"],
    ["おかちまち", "ごしろちょう", "みとちょう"],
    ["ししぼね", "ろっこつ", "しこね"],
    ["こぐれ", "こしゃく", "こばく"],
]


for (let i = 0; i <= 9; i++) {

  //取り出す範囲(箱の中)を末尾から狭める繰り返し
const list = [
  0, 1, 2
]

  for(let j = 2;j>0;j--){
  //乱数生成を使ってランダムに取り出す値を決める
  let r = Math.floor(Math.random()*(j+1));
  //取り出した値と箱の外の先頭の値を交換する
  let tmp = list[j];
  list[j] = list[r];
  list[r] = tmp;
}

    let quiz_1 =
        `<div class="quiz">
      <h1>${i+1}. この地名はなんて読む？</h1> 
      <div class="green-line"></div>
      <div class="img_container">
        <img src="img/photo${i+1}.png" alt="" />
      </div>
      <ul>
        <li id="button_${i+1}_${list[0]}" class="button" 
        >${option[i][list[0]]}</li>
        <li id="button_${i+1}_${list[1]}" class="button" 
        >${option[i][list[1]]}</li>
        <li id="button_${i+1}_${list[2]}" class="button" 
        >${option[i][list[2]]}</li>
      </ul>
      <div id="correct_comment_${i+1}" class="comment" >
        <p class="result">正解！</p>
        <p>正解は「${option[i][0]}」です！</p>
      </div>
      <div id="false_comment_${i+1}" class="comment" >
        <p class="false_result">不正解！</p>
        <p>正解は「${option[i][0]}」です！</p>
      </div>
    </div>`;


    const quiz_2 = document.getElementById("quiz_1");
    quiz_2.insertAdjacentHTML("beforebegin", quiz_1);

    
    
    document.getElementById(`button_${i+1}_0`).setAttribute("onclick",`blue(${i})`)
    document.getElementById(`button_${i+1}_1`).setAttribute("onclick",`red(${i},1)`)
    document.getElementById(`button_${i+1}_2`).setAttribute("onclick",`red(${i},2)`)



}

function blue(count) {
    let correct_button = document.getElementById(`button_${count+1}_0`)
    let correct_comment = document.getElementById(`correct_comment_${count+1}`)
    let false_2 = document.getElementById(`button_${count+1}_1`)
    let false_3 = document.getElementById(`button_${count+1}_2`)
    correct_button.classList.add ("correct")
    correct_comment.className = "appearance"
    false_2.classList.add ("cannot_push")
    false_3.classList.add ("cannot_push")
}

function red(count, x) {
  let correct_button = document.getElementById(`button_${count+1}_0`)
    let false_button = document.getElementById(`button_${count+1}_${x}`)
    let false_comment = document.getElementById(`false_comment_${count+1}`)
    let false_2 = document.getElementById(`button_${count+1}_1`)
    let false_3 = document.getElementById(`button_${count+1}_2`)
    false_button.classList.add ("false")
    false_comment.className = "appearance"
    false_2.classList.add ("cannot_push")
    false_3.classList.add ("cannot_push")
    correct_button.classList.add ("cannot_push")
}




//取り出す範囲(箱の中)を末尾から狭める繰り返し
for(let i = option.length -1;i>0;i--){
    //乱数生成を使ってランダムに取り出す値を決める
    let r = Math.floor(Math.random()*(i+1));
    //取り出した値と箱の外の先頭の値を交換する
    let tmp = option[i];
    option[i] = option[r];
    option[r] = tmp;
}
//結果を表示
console.log(option);


