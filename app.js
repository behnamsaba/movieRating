$("button").on("click",function(){
    const $movieName = $("input[type=text]").val();
    const $movieRatting = $("input[type=number]").val();
    $("table").append("<tr><td>"+$movieName+"</td><td>"+$movieRatting+"</td><td><button class=deletemovie>DELETE</button></td></tr>");
    $("input[type=text]").val("")
    $("input[type=number]").val("");

    $("button.deletemovie").on("click",function(){
        $(this).closest("tr").remove();

        
    
        
    })




});



