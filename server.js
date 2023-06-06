const express = require("express")
const app  = express()
const cors = require('cors')
const mainroute = require('./src/routes')
const css = require('./style/index.css')
//app.set("view engine","ejs")
app.use(cors());
app.use(express.json())
//set for ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(express.static(process.cwd() + '/style'));
/*pool.query('SELECT * FROM public.levaiadata WHERE id = 777;', (err, res) => {
  console.log(err, res);
  pool.end();
})*/
/*app.get('/', (req, res) => {
    pool.query('SELECT * FROM my_table WHERE id = 1', (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows[0]);
    });
  });*/
  
/*app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const user = { name, email };
    res.json(user);
  });*/
  
  
  app.get('/', (req, res) => {
    res.send('Кидай на postgre sql  и получай данные в виде json ');
  });
   const port= 3000
   app.use('/api/prizoners',mainroute)
app.listen(port, ()=>{console.log(`Express.js запущен на порте ${port}`)})
//npm run devStart