
//mostrar lista de usuarios pag principal
$.getJSON("https://jsonplaceholder.typicode.com/users", function (users){
          for (let i = 0; i < users.length; i++) {
            while (users[i].name === "Leanne Graham") {
              $("#UserOne").html("<a href='https://jsonplaceholder.typicode.com/users/1'>" + users[i].name + "</a>") 
              i++}
              while (users[i].name === "Ervin Howell") {
                $("#UserTwo").html("<a href='https://jsonplaceholder.typicode.com/users/2'>" + users[i].name + "</a>") 
                i++}
                while (users[i].name === "Clementine Bauch") {
                  $("#UserThree").html("<a href='https://jsonplaceholder.typicode.com/users/3'>" + users[i].name + "</a>") 
                  i++}
                  while (users[i].name === "Patricia Lebsack") {
                    $("#UserFour").html("<a href='https://jsonplaceholder.typicode.com/users/4'>" + users[i].name + "</a>") 
                    i++}
                    while (users[i].name === "Chelsey Dietrich") {
                      $("#UserFive").html("<a href='https://jsonplaceholder.typicode.com/users/5'>" + users[i].name + "</a>")
                      i++}
                    }
  })    
  //Lista de usuarios pag 1
  $.getJSON("https://jsonplaceholder.typicode.com/users", function (users){
          for (let i = 0; i < users.length; i++) {
            while (users[i].name === "Mrs. Dennis Schulist") {
              $("#UserSix").html("<a href='https://jsonplaceholder.typicode.com/users/1'>" + users[i].name + "</a>") 
              i++}
              while (users[i].name === "Kurtis Weissnat") {
                $("#UserSeven").html("<a href='https://jsonplaceholder.typicode.com/users/2'>" + users[i].name + "</a>") 
                i++}
                while (users[i].name === "Nicholas Runolfsdottir V") {
                  $("#UserEight").html("<a href='https://jsonplaceholder.typicode.com/users/3'>" + users[i].name + "</a>") 
                  i++}
                  while (users[i].name === "Glenna Reichert") {
                    $("#UserNine").html("<a href='https://jsonplaceholder.typicode.com/users/4'>" + users[i].name + "</a>") 
                    i++}
                    while (users[i].name === "Clementina DuBuque") {
                      $("#UserTen").html("<a href='https://jsonplaceholder.typicode.com/users/10'>" + users[i].name + "</a>") 
                      i++}
                    }
  })    
  // var username = users[i].username;
  //           var address = users[i].address;
  //           var street = users[i].street;
  //           var suite = users[i].suite;
  //           var city = users[i].city;
  //           var zipcode = users[i].zipcode;     
  $(input).keypress(function(e) {
    var key = e.which;
    if(key === 13){
      searching()
    }
  })  
  function searching() {
        //pick input value and keep in a variable
var valor = $(input).val()
$.getJSON("https://jsonplaceholder.typicode.com/users", function (data){
        for (let x = 0; x < data.length; x++) {
          if (data[x].name == valor){
            location.href = 'https://jsonplaceholder.typicode.com/users/' + data[x].id
           }
          
        }
   })
  }