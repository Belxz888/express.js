

 /*let zakluchennii =  [
  {
    id: id.value,
    nameof: name.value,
  numberofprison: number.value
  },
]*/
const btnpost = document.getElementById("submit")
btnpost.addEventListener('click',()=>{
const id = document.getElementById("id").value
const name = document.getElementById("name").value
const surname= document.getElementById("surname").value
const sudimost = document.getElementById("Sud").value
const danger = document.getElementById("danger").value
const age = document.getElementById("age").value
const regim = document.getElementById("regim").value
alert("post")
  fetch('http://localhost:3000/api/prizoners/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(
    { 
      id: id,
      name: name,
      surname: surname,
      condemnation:sudimost,
      degreedanger:danger,
      prisonterm:age,
      hardness:regim

  })
}).then(data => {
  console.log(data);
  if (data.success) {
    window.location.href = data.profileUrl;
  } else {
    console.log("log")
  }
}).catch(err => console.log("err"))
/*const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/api/v1/prizoners/");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
const data = JSON.stringify({ id: id, nameof: name,numberofprison:number });
xhr.send(data);*/
}
)
 
//работает , но вылетает сайт , пофиксить баг 
let hp = document.getElementById("message")
let hs = document.getElementById("messagetwo")
//search function
//люблю тебя fetch и аддеевентлистенер
const buttonsearch = document.getElementById("findbtn")
 buttonsearch.addEventListener('click',()=>{
  const id = document.getElementById("input-id")
const idval = id.value
fetch(`http://localhost:3000/api/prizoners/${idval}`)
.then(response => response.json())
.then(data =>  hp.innerText = `Имя: ${data[0].name}
Фамилия: ${data[0].surname}
Судимость: ${data[0].condemnation}  
Опастность для общества: ${data[0].degreedanger}  
Срок в тюрьме: ${data[0].prisonterm}  
Режим тюрьмы: ${data[0]. hardness} `
)
.catch(error => hp.innerText= `Не найдено заключенных с таким айди`);
 })
/*for (var i=0;i<10;i++){
  setTimeout(() =>{
    console.log(i)
  },1000)
}*/
//DELETE METHOD
const deletebtn = document.getElementById("deletebtn")
deletebtn.addEventListener('click',()=>{
  const deletevalue = document.getElementById("input-iddelete").value
  /*const xhr = new XMLHttpRequest();
xhr.open("DELETE", `http://localhost:3000/api/v1/prizoners/${deletevalue}`);
//xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};*/
fetch(`http://localhost:3000/api/prizoners/${deletevalue}`, {
  method: 'DELETE',})
  //работает , доделать функционал
  
})
 
const buttonenter = document.getElementById("enter")

buttonenter.addEventListener("click",()=>{
  const name  = document.getElementById("names").value
  const id = document.getElementById("ids").value
  fetch(`http://localhost:3000/api/prizoners/${id}`)
  .then(response => response.json())
  .then(data =>  {const token = data[0].token
    alert(token)
window.location.href =` http://localhost:3000/api/prizoners/profile/${token}`
  }
  )
  .catch(error => alert(`Не найдено заключенных с таким айди`));
})
   