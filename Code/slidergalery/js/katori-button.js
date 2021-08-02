 $(function() {
    $( "#katori-button" ).click(function() {
        $( "#katori-info" ).toggle();

    });
});

 function katoridiv(id) {
     var div = document.getElementById(id);
     div.style.display = div.style.display == "block" ? "none" : "block";
 }


