$(document).ready(function () {
  $("i").click(function () {
    $(".ul").removeClass("d-none");
    $(".li").removeClass("far fa-plus");
    $(".li").addClass("fal fa-minus");
    $(".ul").slideToggle();
  });

  $("#1").click(function () {
    $(".count-categories").addClass("d-none");
    $(".sort-categories").addClass("d-block");
    $(".sort-categories").removeClass("d-none");

    $(".sort-categories").slideToggle(1000);
  });
  $("#2").click(function () {
    $(".sort-categories").addClass("d-none");
    $(".count-categories").removeClass("d-none");
    $(".count-categories").addClass("d-block");
    $(".count-categories").slideToggle(1000);
  });
  $(document).ready(function () {
    $("h6").hover(function () {
      $(this).addClass("active");
    });
    $("h6").mouseout(function () {
      $(this).removeClass("active");
    });
  });
});
