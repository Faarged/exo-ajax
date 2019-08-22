$(document).ready(function(){

  var $nom = $('#nom');

  $(document).on('click' , '#okay' ,function(){
    /*$.ajax({
      url: 'php/insert.php',
      type: 'POST',
      dataType: 'JSON',
      data: $(#fatigue).serialize(),
      success:function(code_html, statut){
        $("#resultat").html("<p>ça a marché, gg all!!!</p>")
      },
      error : function(resultat, statut, erreur){
        $("#resultat").html("<p>ça a foiré, ça pue la merde ajax!!!</p>")
      },
      complete : function(resultat, statut){

      }

    })*/


    /*$.post(
      'php/insert.php',
      {
        nom: $("#nom").val()
      },
      function(result){
        if(result == "success"){
          $("#resultat").html("<p>ça a marché, gg all!!!</p>")
        }else{
          $("#resultat").html("<p>ça a foiré, ça pue la merde ajax!!!</p>")
        }
      }
    );*/

    $('#fatigue').submit(function(e){
        // On désactive le comportement par défaut du navigateur
        // (qui consiste à appeler la page action du formulaire)
        e.preventDefault();

        $.post(
          'php/insert.php',
          {
            nom: $("#nom").val()
          },
          function(result){
            if(result == "success"){
              $("#resultat").html("<p>ça a marché, gg all!!!</p>")
            }else{
              $("#resultat").html("<p>ça a foiré, ça pue la merde ajax!!!</p>")
            }
          }
        );

      })


  });
})
