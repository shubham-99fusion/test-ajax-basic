 
jQuery(document).ready(function(){
    $("button").click(function(){
                $.ajax({
                    url: "test.php", 
                    success: function(result){
                        var data =JSON.parse(result);
                        console.log(data);
                  $("#div1").html(data.first);
                }});
              });




});
 

function formSubmit(){
    var data = $('.form').serializeArray();
    jQuery.ajax({
        url: "test.php",
        data: data,
        type: "POST",
        success: function(data){
            var data =JSON.parse(data);
            console.log(data);
            $("#div1").html(data.fname);
        },
        error: function (){}
    });
return true;
}