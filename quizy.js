// let correct_button = document.getElementById("button_1_1")
// correct_button.className = "correct"
"use strict";


let option = [
  ["たかなわ","こうわ","たかわ"],
  ["かめいど","かめと","かめど"],
  ["こうじまち","かゆまち","おかとまち"],
  ["おなりもん","ごせいもん","おかどもん"],
  ["とどろき","たたりき","たたら"],
  ["しゃくじい","いじい","せきこうい"],
  ["ぞうしき","ざっしょく","ざっしき"],
  ["おかちまち","ごしろちょう","みとちょう"],
  ["ししぼね","ろっこつ","しこね"],
  ["こぐれ","こしゃく","こばく"],
]

for (let i = 0; i <= 9; i++) {


    let quiz_1 =
        `<div id="quiz">
      <h1>${i+1}. この地名はなんて読む？</h1> 
      <div class="green-line"></div>
      <div>
        <img src="img/photo${i+1}.png" alt="" />
      </div>
      <ul>
        <li id="button_${i+1}_0" class="button" onclick="blue(${i})">${option[i][0]}</li>
        <li id="button_${i+1}_1" class="button" onclick="red(${i},1)">${option[i][1]}</li>
        <li id="button_${i+1}_2" class="button" onclick="red(${i},2)">${option[i][2]}</li>
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

}

    function blue(count) {
        let correct_button = document.getElementById(`button_${count+1}_0`)
        let correct_comment = document.getElementById(`correct_comment_${count+1}`)
        let false_2 = document.getElementById(`button_${count+1}_1`)
        let false_3 = document.getElementById(`button_${count+1}_2`)
        correct_button.className = "correct"
        correct_comment.className = "appearance"
        false_2.className = "cannot_push"
        false_3.className = "cannot_push"
    }

    function red(count,x) {
        let false_button = document.getElementById(`button_${count+1}_${x}`)
        let false_comment = document.getElementById(`false_comment_${count+1}`)
        false_button.className = "false"
        false_comment.className = "appearance"
    }
