const express = require('express');
const app = express();
const  PORT = 3000;
const bodyParser = require('body-parser');
const __dirnametwo = require('./util/path')
const path = require('path')
app.use(express.static(path.join(__dirnametwo,'public')));

const userRouter = require('./routes/user.router')
const shopRouter = require('./routes/shop.router')
const notFoundRouter = require('./routes/404.router')
app.use(bodyParser.urlencoded({extended: false}));


app.use('/user', userRouter);
app.use('/shop', shopRouter)
app.use(notFoundRouter)

app.listen(PORT);