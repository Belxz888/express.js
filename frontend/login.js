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