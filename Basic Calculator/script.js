// すべての<button>要素を取得
const buttonsE1 = document.querySelectorAll("button");

// 結果を表示するinput要素（id="result"）を取得
const inputFieldE1 = document.getElementById("result");

// ボタン1つ1つにクリックイベントを設定
for (let i = 0; i < buttonsE1.length; i++) {
  buttonsE1[i].addEventListener("click", () => {
    // クリックされたボタンのテキスト（例: 1, +, C, =など）を取得
    const buttonValue = buttonsE1[i].textContent;

    // 「C」ボタンが押された場合、入力欄をクリア
    if (buttonValue === "C") {
      clearResult();
    }
    // 「=」ボタンが押された場合、計算を実行
    else if (buttonValue === "=") {
      calculateResult();
    }
    // それ以外（数字や演算子）は、入力欄に追加
    else {
      appendValue(buttonValue);
    }
  });
}

// 入力欄を空にする関数（Cボタン用）
function clearResult() {
  inputFieldE1.value = "";
}

// 入力された数式を計算する関数（=ボタン用）
// ※ eval() はセキュリティ上の注意が必要（信頼できる入力だけで使う）
function calculateResult() {
  inputFieldE1.value = eval(inputFieldE1.value);
}

// 入力欄に数字や記号を追加する関数
function appendValue(buttonValue) {
  inputFieldE1.value += buttonValue;
}