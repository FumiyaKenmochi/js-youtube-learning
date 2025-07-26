const btnE1 = document.getElementById("calculate");     // 計算ボタン
const billInput = document.getElementById("bill")       // 請求額入力欄
const tipInput = document.getElementById("tip")         // チップ率入力欄
const totalSpan = document.getElementById("total")      // 合計表示欄

function calculateTotal() {
  const billValue = billInput.value;                    // 請求額を取得
  const tipValue = tipInput.value;                      // チップ率を取得
  const totalValue = billValue * (1 + tipValue / 100);  // 合計計算
  totalSpan.innerText = totalValue.toFixed(2);          // 小数点2桁で表示
}

btnE1.addEventListener("click", calculateTotal)  // ボタンクリックで計算実行