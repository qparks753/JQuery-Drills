$(document).ready(() => {

  $(".body").append('<div id="h2Div"></div>');

  $("#box").keyup(() => {
    if ($("#box").val() !== "") {
      $("#btnSubmit").attr("disabled", false);
    };
  });

  $("#btnSubmit").on("click", () => {
    alert("Hello This Button Has Been Clicked");
  });


  $("#btnSubmit").click((e) => {
    e.preventDefault();
    let text = $("#box").val();
    let newH2 = $("<h2>" + text + "</h2>")
    // $('#display').append();
    newH2.mouseover(() => {
      newH2.css({
        "background-color": "red",
        "border-radius": "5px"
      })
    });
    $(".body").append('<ul id=list></ul>');
    $("#list").append('<li id=listItem></li>')
    $('#listItem').append(text);
    let colors = rgb(Math.random()*255,Math.random()*255,Math.random()*255);
     $(#listItem).click((e)=>{
      e.preventDefault();
      $(#listItem).css("color",colors);
     });
    // $("#h2Div").append(newH2)
    
    alert(text);
  });


  // $(".body").append('<ul id=list></ul>');
  // $("#btnSubmit").click(()=>{
  //   let text = $("#box").val();
  //   $("#list").append('<li id=listItem></li>')
  //   $('#listItem').append(text);
  //   alert(text);
  // });



















});