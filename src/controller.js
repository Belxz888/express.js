const pool = require('../db')
const queries = require('./queries')
const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//крч квери  файл  просто укорачивает запись то есть не нужно не посредственно здесь делать запрос, а можно прописать его
//взятие данных
let time = new Date()
const getPrizoners = (req,res)=>{
    pool.query(queries.getPrizoners, (err, result) => {
      if(err) throw console.error("err");
      res.status(200).json(result.rows)
      console.log(`Выполнен показ данных о всех зеках (Get); ${time}`)
})
}
//взятие данных
const idPrizoner = (req,res)=>{
 const id  = parseInt(req.params.id) 
 pool.query(queries.firstPrizoner,[id],(err, result) => {
    if(err) throw console.error("err");
    res.status(200).json(result.rows)
    console.log(`Выполнен показ данных о конкретном  зеке с id ${id} (Get); ${time}`)
 }
 )
}
const addPrizoner  = (req,res)=>{
    const {id,name,surname,condemnation,degreedanger,prisonterm,hardness} = req.body;
    //дистрактуризация
    //проверка
    /*
    pool.query(queries.checkidExists,[numberofprison],(err,results)=>{
        if(results.rows.length){
            res.send("ID already  exist")
        }
    })*/
    //add to db
    //token password here and obj props and expireness
    const token = jwt.sign({ id: id,name:name }, 'super', { expiresIn: '1w' });
    pool.query(queries.addPrizoner,[id,name,surname,condemnation,degreedanger,prisonterm,hardness,token],(err, result) => {
        if(err){ console.error("Нет таких зеков(err)")
// Добавление токена в заголовок ответа
// ошибка в том что типо рес.сенд отправляется 2 раза нужно помещать все в один запрос все что хочешь
        console.log(`Ошибка нет таких заключенных (post); ${time}`)};
       res.status(201).send(`Зек идентифицирован и создан  Токен:${token}`)
       console.log(`Создан 1 новый зек c id: ${id} (POST); ${time}`)
     });
     }
    const deletePrizoner = (req,res) =>{
        const id  = parseInt(req.params.id) 
       pool.query(queries.firstPrizoner,[id],(err, result) => {
            if (!result.rows.length){
                console.log(`Ошибка нет таких заключенных (delete); ${time}`)
            }
            pool.query(queries.deletePrizoner,[id],(err, result) => {
                    if(err) throw err;
                    res.status(200).send("Зек успешно удален")
                    console.log(`Удалён 1  зек c id: ${id} (DELETE); ${time}`)
                 }
                 )

        }
       )}
       const updatePrizoner = (req,res) =>{
        const id  = parseInt(req.params.id)
        const {name,surname,condemnation,degreedanger,prisonterm} = req.body
        pool.query(queries.firstPrizoner,[id],(err, result) => {
            if (!result.rows.length){
                res.send("Нету таких зеков")
                console.log(`Ошибка нет таких заключенных (put); ${time}`)
            }
            pool.query(queries.updatePrizoner,[name,surname,condemnation,degreedanger,prisonterm,id],(err,result)=>{
                if(err) throw err;
                res.status(200).send("Информация  о зекe обновлена")
                console.log(`Информация о заключенном с id:${id} обновленно (PUT); ${time}`)
            })
        })
       }
       const createAccount  = (req,res)=>{
        const token = req.params.token;
        const {name,surname,condemnation,degreedanger,prisonterm} = req.body
            const decoded = jwt.verify(token, 'super');
            const nale = decoded.name;
        
            // Получение данных пользователя из базы данн
            pool.query(queries.getToken,[token],(err, result) => {
                if(err) throw console.error("err");
               // res.status(200).json(result.rows)
                res.render('index', { name: result.rows[0].name,surname:result.rows[0].surname });
                console.log(`Выполнен показ данных о конкретном  зеке с tokenom ${token} (Get); ${time}`)
             }
             )
             //логика кода работает завтра нужно разобрастся поглубже в бекенде и начать фронтенд
             // скорее всего завтра и послезавтра не смогу , крч продолжу в среду (наверное)
       }
 
 //экспорты подробнее в кверисах
module.exports={
    getPrizoners,
    idPrizoner,
    addPrizoner,
    deletePrizoner,
    updatePrizoner,
    createAccount
}