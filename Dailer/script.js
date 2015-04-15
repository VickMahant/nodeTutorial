$(document).ready(function(){
  $(".dialerNums").click(function(event) {
      $("#txt").val(function(index, val) {
          return val + event.target.value;
      });
  });
  $("#call").click(function() {
      var dail = $("#txt").val()
      //alert("Text: " + dail);
      document.location.href = "tel:" + dail;
  });
  $("#clearAll").click(function() {
     $("#txt").val(""); 
  });
  $("#backSpc").click(function(){
    var text=$("#txt").val();
    $('#txt').val(text.substr(0, text.length-1));

  });
});