
$(".search-bar input")
.focus(function () {
 $(".header").addClass("wide");
})
.blur(function () {
 $(".header").removeClass("wide");
});

$(document).click(function (e) {
var container = $(".status-button");
var dd = $(".dropdown");
if (!container.is(e.target) && container.has(e.target).length === 0) {
 dd.removeClass("is-active");
}
});

$(function () {
$(".dropdown").on("click", function (e) {
 $(".content-wrapper").addClass("overlay");
 e.stopPropagation();
});
$(document).on("click", function (e) {
 if ($(e.target).is(".dropdown") === false) {
  $(".content-wrapper").removeClass("overlay");
 }
});
});