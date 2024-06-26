
function moreDetails(){
    $(".more-details").click(function(){
    $("#projectTitle").text($(this).closest(".project").find(".project-title").text());
    var link = $(this).closest(".project").find(".project-title").attr("data-link");
    var page = $(this).closest(".project").find(".project-title").attr("href");
    $("#projectLink").attr("href",link);
    $("#morePage").attr("src",page);

});
}
$(document).ready(function(){
setTimeout(function(){
    moreDetails();

},1000);

});
setTimeout(function(){
    moreDetails();

},1000);