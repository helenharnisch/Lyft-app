$().ready(function() {
  //Vista splash + función callback (view)
  $(".main-view").hide();
  $(".logo").fadeIn(5000).fadeOut(3000, view);

  function view (){
    $(".main-view").show();
  }

});
