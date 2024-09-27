const text = document.querySelector('.text-two')

function textLoad() {

      setTimeout(() => {
            text.textContent = 'Developer'
      },0)
      setTimeout(() => {
            text.textContent = 'Artist'
      },4000)
      setTimeout(() => {
            text.textContent = 'Dancer'
      },8000)
      setTimeout(() => {
            text.textContent = 'Athlet'
      },12000)
}

textLoad()
setInterval(textLoad, 16000)

const colors =  ['green', 'black', 'blue', 'orange', 'brown', 'purple', 'deeppink', 'green'];
let i = 0;

setInterval(() => {

      i = i % colors.length;
      document.getElementById('t').style.color = colors[i];
      i++
},70)