$("#menu-items-position").on("change", function(e) {
  $("#main-nav-list").css("justify-content", $(this).find("option:selected").val());
});

$("#menu-items").on("change", function(e) {
  $("#main-nav-list li").css("flex", $(this).find("option:selected").val());
});
