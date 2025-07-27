// すべての<button>要素を取得し、NodeListとして変数buttonsに格納
const buttons = document.querySelectorAll("button");

// 勝敗の結果を表示する要素を取得
const resultEl = document.getElementById("result");

// プレイヤーのスコアを表示する要素を取得
const playerScoreEl = document.getElementById("user-score");

// コンピューターのスコアを表示する要素を取得
const computerScoreEl = document.getElementById("computer-score");

// プレイヤーとコンピューターの初期スコアを設定
let playerScore = 0;
let computerScore = 0;

// 各ボタンにクリックイベントを追加
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // プレイヤーの選択（button.id）とコンピューターの選択を使って勝負
    const result = playRound(button.id, computerPlay());

    // 結果テキストを画面に表示
    resultEl.textContent = result;
  });
});

// コンピューターの手（rock, paper, scissors）をランダムで選ぶ関数
function computerPlay() {
  const choices = ["rock", "paper", "scissors"]; // 選択肢
  const randomChoice = Math.floor(Math.random() * choices.length); // 0〜2のランダムな整数
  return choices[randomChoice]; // 選ばれた選択肢を返す
}

// 勝敗を判定する関数（プレイヤーとコンピューターの選択を引数に受け取る）
function playRound(playerSelection, computerSelection) {
  // 引き分けの場合
  if (playerSelection === computerSelection) {
    return "It's a tie!"; // 引き分けのメッセージを返す
  }
  // プレイヤーが勝つ場合の条件
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++; // プレイヤースコアを加算
    playerScoreEl.textContent = playerScore; // スコア表示を更新
    return "You win! " + playerSelection + " beats " + computerSelection; // 勝利メッセージを返す
  } 
  // コンピューターが勝つ場合
  else {
    computerScore++; // コンピュータースコアを加算
    computerScoreEl.textContent = computerScore; // スコア表示を更新
    return "You lose! " + computerSelection + " beats " + playerSelection; // 敗北メッセージを返す
  }
}
