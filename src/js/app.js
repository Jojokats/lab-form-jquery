
$(document).ready(function(){


    // $("button.hide").click(function(){
    //     $("#issue-call2").hide();

    // $('button#track').click(function() {
    //     		$('#issue-call').fadeOut(1000);
    // });

    $('#issue-call').hide();
    $('#issue-call2').hide();

    $("button#track").click(function(){
      //  $("#issue-call").toggle();
       $("#issue-call").fadeToggle( "slow", "linear" );
   });

   $('#delete').click(function() {
       		$('#issue-call').fadeOut(1000);
   });

   $('button.open').click(function() {
		$('#issue-call').slideDown(1000);
	});

  $('#close').click(function() {
   $('#issue-call').slideDown(1000);
 });

  $('.open').click(function() {
    $('#issue-call2').slideDown();
  });

  $('#close').click(function() {
    $('#issue-call2').hide(1000);
  });

});





// });
