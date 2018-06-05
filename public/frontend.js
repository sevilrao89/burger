$(document).ready(function(){
  

  $( ".change-devoured" ).click(function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id)

    $.ajax({
    url: "/api/burger/" + id ,
    method: "PUT"
    }).done(function(dbData){
    console.log(dbData)
  }) 
  })

  $( "#create-form" ).submit(function( event ) {
    event.preventDefault();
  
  var burgerName = $("#br").val()
  var devoured = $("#ateburger:checked").val();
  var notDevoured = $("#didnoteatburger:checked").val();

  console.log("burgername " + burgerName + "devoured " + typeof devoured + "notDevoured " + notDevoured)

  var newData = {burger_name: burgerName, devoured: devoured == "1" ? true:false }

  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: newData,    
  }).done(function(dbData){
    console.log(dbData)
  }) 
});
  

  });
  







