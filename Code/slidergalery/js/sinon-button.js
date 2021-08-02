 $(function() {
    $( "#sinon-button" ).click(function() {
        $( "#sinon-info" ).toggle();

    });
});

 function sinondiv(id) {
     var div = document.getElementById(id);
     div.style.display = div.style.display == "block" ? "none" : "block";
 }


