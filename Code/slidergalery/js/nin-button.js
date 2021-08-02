 $(function() {
    $( "#nin-button" ).click(function() {
        $( "#nin-info" ).toggle();

    });
});

 function nindiv(id) {
     var div = document.getElementById(id);
     div.style.display = div.style.display == "block" ? "none" : "block";
 }


