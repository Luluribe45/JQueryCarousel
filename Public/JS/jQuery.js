$(function () {
    $(".carrousel")
        .wrap('<div class="carrousel-conteneur"></div>')
    $(".carrousel-conteneur")
        .css("width",  Reference.width()  )
        .css("height", Reference.height() )
        .css("overflow", "hidden");
});