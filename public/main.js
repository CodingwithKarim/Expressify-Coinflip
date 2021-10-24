// let result = document.querySelector("#result");
// let score = document.querySelector("#score");
// let heads = document.querySelector("#heads");
// let tails = document.querySelector("#tails");
// let buttons = document.querySelectorAll('button')


// buttons.forEach(e => e.addEventListener('click', game => {
//   const choice = game.target.id
//   console.log(choice);
 
//   // const results = result.innerText
//   fetch(`heads`, {
//     method: 'post',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       'choice': choice,
//       //  'results': results,
         
//     })
//   })
//   .then(response => {
//     if (response.ok) return response.json()
//   })
//    .then(data => {
//      console.log(data)
//      window.location.reload(true)
//    })
// })
// )
// tails.addEventListener ('click',() => { 
//   const choice = `tails`;
//   fetch(`/api?coin=${choice}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.face);
//       if (e.target.id === data.face) {
//         counter++
//         score.innerText = counter;
//         result.innerText = `The result is ${data.face}, you won!`;
//       } else {
//         result.innerText = `The result is ${data.face}, you lost!`;
//         counter--
//         score.innerText = counter; 
//       }
//       if (counter < -2 && counter > -5 ){
//         alert('At this point just refresh cause you not very good at the game')
//       }
//     });
// });
