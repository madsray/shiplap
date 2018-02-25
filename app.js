console.log("Spunky is a goat");
$( () => {

  $( ".button" ).click(function() {

    $( "#left" ).css("transform","translateX(-100%)").css("opacity",".4")
    $( "#right" ).css("transform","translateX(100%)").css("opacity",".4")
    $('#welcome').text("Welcome Home!")
    });

    $( ".buttonun" ).click(function() {

      $( "#left" ).css("transform","translateX(0)").css("opacity","1");
      $( "#right" ).css("transform","translateX(0)").css("opacity","1");
      $('#welcome').text("Are You Ready To See Your New Home?")
      });

});
