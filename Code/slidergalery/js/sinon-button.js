 $(function() {
    $( "#sinon-button" ).click(function() {
        $( "#sinon-info" ).toggle();

    });
});

 function sinondiv(id) {
     var div = document.getElementById(id);
     var overflowY = "hidden";

     if (div.style.display == "block") {
         div.style.display = "none";
         document.body.style.overflowY = "hidden";
     }
        else {
         div.style.display = "block"
         document.body.style.overflowY = "show";
     }
 }





