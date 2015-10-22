
$(function() {
$('.add').on('click', function() {
  $(this).parent().removeClass("globalList").addClass("personalList");
      $(this).parent().appendTo("#my-list");
      $(this).remove();
  });
});


$(function() {
  $('.finalize').on('click', function() {

      //declare an array
    var myGearList = new Array();
    $(".show_array").html(' ');

    $('.personalList').each(function(){
        myGearList.push($(this).text());
      });

      myGearList = myGearList.toString();

      $.ajax({
       type: 'POST',
       url: '/usercreationlist',
       data: { userlist: myGearList },
      success: function(data){
       	console.log("done");
      	window.location.href = "/usercreationlist";
      },
      error: function() {
      	console.log("error");
      },
      complete: function() {
		    console.log("complete");
      }
    });
  });
});


