const ul = document.getElementById('users');




function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
          this.users = users;
          this.setUsers();
      });
}



function setUsers() {
  
  this.users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `<li><a href="https://jsonplaceholder.typicode.com/users/${user.id}">${user.name}</a></li>`;
      ul.appendChild(li);
  })
}
getUsers();


function enviado(element) {
  console.log("has clickeado")
  console.log(element)
}  
  

// function go(){

// }



// values.addEventListener("keyup", function(e){
//   if (e.which === 13){
//      for (let i = 0; i < ul.length; i++) {
//        if (values === ul[i])
//        console.log(ul[i])
//      }
//       }
//   })
 