 $(function() {
    $( "#hutao-button" ).click(function() {
        $( "#hutao-info" ).toggle();

    });
});

 function hutaodiv(id) {
     var div = document.getElementById(id);
     div.style.display = div.style.display == "block" ? "none" : "block";
 }


