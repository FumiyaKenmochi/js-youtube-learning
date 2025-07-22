const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice")

buttonE1.addEventListener('click' , () => {
  diceE1.classList.add("roll-animation");
})