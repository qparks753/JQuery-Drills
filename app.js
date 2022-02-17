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
    //The below text comment out the h2 that would be displayed on the body
    // let newH2 = $("<h2>" + text + "</h2>")
    // $('#display').append();
    // newH2.mouseover(() => {
    //   newH2.css({
    //     "background-color": "red",
    //     "border-radius": "5px"
    //   })
    // });
    // $("#h2Div").append(newH2)
    let mainList = ("<ul id=main-list></ul>");
    let list = $("<li id=list>" + text + "</li>");
    list.css("list-style", "none");
    $("#h2Div").append(mainList);
    $("#main-list").append(list);
    let colors = '#'+Math.floor(Math.random()*16777215).toString(16);
    $("#list").click(() => {
      $("#list").css("color",colors);
    });

    $("#list").dblclick(() => {
      $("#list").remove();
    });

    alert(text);
  });
  

});