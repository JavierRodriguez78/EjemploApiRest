$(document).ready(function(){
  console.log("Jquery esta cargado");




  $(".tabla_libros").append("<table class='table table-striped '>  <thead class='thead-dark'>  <tr> <th>#</th> <th>Title</th><th>Autor</th><th>Accion</th></tr></thead><tbody id='cuerpo'>");
    function dibujarTabla(){
      $.get( "http://localhost:3000/libros", function( data ) {
        $
        data.forEach(function(elemento, id, array){
          $("#cuerpo").append("<tr>");
          $("#cuerpo").append("<th scope='row'>"+elemento.id+"</th>");
          $("#cuerpo").append("<td>"+elemento.title +"</td>");
          $("#cuerpo").append("<td>"+elemento.autor+"</td>");
          $("#cuerpo").append("<td><a class='selector' id='" +elemento.id+"'>eliminar</a></td>");
          $("#cuerpo").append("</tr>");
          $('#'+elemento.id).on("click", function(e){

            $.ajax({
              type:"DELETE",
              url:"http://localhost:3000/libros/"+$(this).attr('id'),
              data: null,
              success: successfinal,
              dataType:"json"
            });

          });
        });
    });
  };

  function successfinal(){
    $("#cuerpo").empty();

    dibujarTabla();
  }

    dibujarTabla();


    $('button').on("click",function(ev){
        ev.preventDefault();

        var titulo = $('#titulo').val();
        var autor = $('#autor').val();
        var datos = {
          "title":titulo,
          "autor": autor
        }

          function success(data){
            dibujarTabla();
        }

        $.ajax({
          type:"POST",
          url:"http://localhost:3000/libros",
          data: datos,
          success: success,
          dataType:"json"
        })

        $("#cuerpo").empty();

        dibujarTabla();
    });





})
