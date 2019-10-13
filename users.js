const ul = document.getElementById('users');

function init() {
  this.getUsers();
}


function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
          this.users = users;
      });
}

//scope users.js


function setUsers(users) {
  //scope setUsers
  users.forEach((user) => {
      const li = document.createElement('li');
      li.innerHTML = `<li id="${user.name}">${user.name}</a></li>`;
      ul.appendChild(li);
      // TODO: Los resultados son clicables y te llevan a la página de ese usuario. 
      li.addEventListener('click', function (){
        alert("Ud. Esta accediendo a los datos de:  " + user.name);
        document.getElementById("h").innerHTML = "Datos de Usuario";
        const tr = document.createElement('tr');
        const table = document.getElementById('myTable');
        table.className.toggle = ('open');
        tr.innerHTML = `<tr><td>Nombre:  <br>${user.name}</td><td>Usuario:  <br>${user.username}</td><td>E-mail:  <br>${user.email}</td><td>Codigo Postal:  <br>${user.address.zipcode}</td><td>Calle:  <br>${user.address.street}</td><td>Ciudad:  <br>${user.address.city}</td><td>Web:  <br>${user.website}</td></tr>`
        table.appendChild(tr);
        closeList();
       });
  })
}
// AUTOCOMPLETE 

function searchUser(keypress) {

    // TODO: Buscar en la lista de usuarios sin pulsar enter y se va rellenando una lista debajo del input.
    const input = document.getElementById('inputName').value;
    const foundUsers = this.users.filter(user => user.name.includes(input));
    console.log(foundUsers)
    this.setUsers(foundUsers);
    input !== ''  ? openList() : closeList();
    
    //foundUsers === input ?  closeList() : openList();

        }
 //TODO: Si no hay resultados, la lista debajo del input debería desaparecer.                
function closeList (){
        const div = document.getElementById('myDiv');
        div.className = ('close');
}
function openList (){
        const div = document.getElementById('myDiv');
        div.className = ('open');
}
init();