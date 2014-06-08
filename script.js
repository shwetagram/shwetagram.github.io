

$(document).ready(function() {

//Makes list sortable
	$('ol').sortable();


    //Enter button
	$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').prepend('<li class="item">' + toAdd + '</li>');
        
//Empty text field after hitting Enter
        $('input').val('');
    };
});	

//Removing list items on click

$(document).on('click', '.item', function() {
        $(this).remove();
        $("input").text("removed");
    });

});
