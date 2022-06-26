
//express.js 다운로드
// index.js 에서 
//기본 문서를 참고해서
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mlawrtbn0831:1234@boilerplate.iwacr.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!~~ 안녕하세요 ~'))

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))