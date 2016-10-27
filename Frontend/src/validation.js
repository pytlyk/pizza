$("#inputName").keyup(function(){
  setTimeout(function(){
    var name = $("#inputName").val();
    if (!/^[a-zA-Z ]+$/.test(name)) {
      $(".name-help-block").css("display", "inline-block");
    } else {
      $(".name-help-block").css("display", "none");
    }
  }, 2 * 1000);
});

$("#inputPhone").keyup(function(){
  setTimeout(function(){
    var phone = $("#inputPhone").val();
    if (phone.length != 13 || phone.slice(0,4) !== "+380") {
      $(".telephone-help-block").css("display", "inline-block");
    } else {
      $(".telephone-help-block").css("display", "none");
    }
  }, 2 * 1000);
});

$("#inputAddress").keyup(function(){
  setTimeout(function(){
    var re = /^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/;
    var address = $("#inputAddress").val();
    if (!re.test(address)) {
      $(".address-help-block").css("display", "inline-block");
    } else {
      $(".address-help-block").css("display", "none");
    }
  }, 2 * 1000);
});