const express=require('express')
const morgan = require('morgan')
require('./drivers/connect-db.js')


const app = express()
app.set('PORT',process.env.PORT || 3001 )

app.use(morgan('dev'))
app.use(express.json())

//app.use('/author',require('./routes/routes-authors.js'))
//app.use('/book',require('./routes/routes-books.js'))

app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${'PORT'}`))