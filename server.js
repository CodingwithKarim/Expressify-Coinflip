const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('Connected')
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))//here it can be app.use(express.urlencoded({extended: true})) instead of bodyParser
app.use(express.json()) // here bodyParser has to be replace with express
app.use(express.static('public'))
let result = {answer: '', score: 0}
app.get('/', (req,res) => {
    // console.log('We have a get here')
    res.render('index.ejs',  {data : result} )    
})


app.post('/heads',(req,res)=> {
     let random = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'
    //  console.log('i am random',random);
    // //  console.log('iam choice',req.body.choice);
      if (random == 'heads') {
        result['answer']  = `The result is ${random}, you won!`
        result['score']++
        
      } else {
        result['answer'] = `The result is ${random}, you lost!`
        result['score']--
      
      }
      console.log(result)
    res.redirect('/')

})

app.post('/tails',(req,res)=> {
  let random = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'
  // console.log('i am random',random);
 //  console.log('iam choice',req.body.choice);
   if (random == 'tails') {
     result['answer'] = `The result is ${random}, you won!`
     result['score']++
   } else {
     result['answer'] = `The result is ${random}, you lost!`
     result['score']--
   }
   console.log(result)
   res.redirect('/')

})