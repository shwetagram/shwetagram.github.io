$(document).ready(function() {
//makes list sortable
	$('ol').sortable();
    //making enter button work
	$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<li class="item">' + toAdd + '</li>');
    };
});	
$(document).on('click', '.item', function() {
        $(this).remove();
    });
$('ol').hover(function(){
    $(this).append("<div>'.close'</div>");

});

/*
    //this isn't working
$("input").focus(function(){
    $("#flip form").addClass("ready");
});
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
    $("input").blur(function(){
    if($(this).val() == "")
        $("#flip form").removeClass("ready");
});
    //end of non working code
*/

$("#todo").focus(function(){
    $("#flip form").addClass("ready");
})




});
