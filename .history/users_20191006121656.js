const ul = document.getElementById('users');

function init() {
  this.getUsers();
}


function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
          this.users = users;
          this.setUsers();
      });
}

//scope users.js


function setUsers() {
  //scope setUsers
  this.users.forEach(user => {
    console.log('primer this', this);
    const li = document.createElement('li');
      li.innerHTML = `<li><a href="https://jsonplaceholder.typicode.com/users/${user.id}">${user.name}</a></li>`;
      ul.appendChild(li);
  })

  this.users.forEach(function (users) {
    console.log('segundo this', this);
  });
}

function enviado(event) {
  console.log("has clickeado");
  console.log(event);
} 

/**
 * La llamada a init() se hace lo último
 * porque es la llamada que inicia todo,
 * quieres que antes esté todo el archivo cargado.
 */
init();


 
  
//YO TE OIGO


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
 