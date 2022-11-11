require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded());

db.sequelize.sync().then(()=>{
    console.log('DB Successfully Sync');
}).catch(err => {
    console.log(err)
})

app.use('/api' ,router)

app.listen(port,()=>{
    console.log(`Server Listning On port ${port}`);
})