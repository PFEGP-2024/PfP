const express = require('express')
const app = express()
const mysql = require('mysql')
const  cors = require('cors')
app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('server is runninh on port 3002')
})
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'user'

})
app.post('/Register',(req, res)=>{
 const sentemail = req.body.email
 const sentusername = req.body.username
 const sentpassword = req.body.password

 const SQL = 'INSERT INTO users1 (username,email,password) VALUES(?,?,?)'
 const Values = [sentusername,sentemail,sentpassword]
 db.query(SQL,Values, (err,results)=>{
    if(err){
        res.send(err)
    }else{
        console.log("user Inserted successfuly")
        res.send({message: 'User added'})
    }
 })
})
app.post('/Login',(req, res)=>{
  const sentLoginusername = req.body.Loginusername
  const sentLoginpassword = req.body.Loginpassword 
  
  const SQL = 'SELECT * FROM users1 WHERE username = ? && password = ?'
  const Values = [sentLoginusername,sentLoginpassword]
  db.query(SQL,Values,(err,results)=>{
   if(err){ res.send({error: err})}
   if(results.length > 0){
    res.send(results)
   }
   else{
    res.send({message:'cordentials dont match'})
   }
  })
})


