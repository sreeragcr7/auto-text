const text = document.querySelector('.auto-text');

const textLoad = () => {
    setTimeout(() => {
         text.textContent = 'Average'
    },0)
    setTimeout(() => {
         text.textContent = 'Free'
    },4000)
    setTimeout(() => {
         text.textContent = 'Fire'
    },8000)
    setTimeout(() => {
         text.textContent = 'Favourite'
    },12000)
}

textLoad()
setInterval(textLoad, 16000)

const colors =  ['green', 'black', 'blue', 'orange', 'brown', 'purple', 'deeppink', 'green'];
let i = 0;

setInterval(() => {

      i = i % colors.length;
      document.getElementById('').style.color = colors[i];
      i++
},70)