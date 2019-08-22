$(document).ready(function(){

  $("form").on("submit", function(e){
    e.preventDefault()
    var nom = $('#nom').val();
    $.ajax({
      url:"php/insert.php",
      method:"post",
      data:{
        submit:true,
        nom:nom,
      },
      success: function(res){
        //important d'utiliser #myModal ici
        $("#myModal").modal("show")
      },
      error: function(res){
        $("#resultat").html("mais c'est d'la merde !!!!")
      },
    })
  })


})
