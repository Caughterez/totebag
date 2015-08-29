window.onpopstate = function () {
    //$('#vyrobky').toggle();
    //$('#vyrobek-detail').toggle();
    if (location.search !== '?detail') {
        location.reload();
    }
};

$(".vyrobek").click(function () {
    var vyrobek = $(this);
    var detailVyrobku = $('#vyrobek-detail');
    var vyrobky = $('#vyrobky');

    var nadpisVyrobku = vyrobek.find('.title').text();
    detailVyrobku.find('.title').text(nadpisVyrobku);

    detailVyrobku.find('.main-image').attr("href", vyrobek.find('.main-image').attr("src"));
    detailVyrobku.find('.main-image img').attr("src", vyrobek.find('.main-image').attr("src"));

    detailVyrobku.find('.image-1').attr("href", vyrobek.find('.image-1').attr("src"));
    detailVyrobku.find('.image-1 img').attr("src", vyrobek.find('.image-1').attr("src"));
    
    detailVyrobku.find('.image-2').attr("href", vyrobek.find('.image-2').attr("src"));
    detailVyrobku.find('.image-2 img').attr("src", vyrobek.find('.image-2').attr("src"));
    
    detailVyrobku.find('.image-3').attr("href", vyrobek.find('.image-3').attr("src"));
    detailVyrobku.find('.image-3 img').attr("src", vyrobek.find('.image-3').attr("src"));
    
    detailVyrobku.find('.image-4').attr("href", vyrobek.find('.image-4').attr("src"));
    detailVyrobku.find('.image-4 img').attr("src", vyrobek.find('.image-4').attr("src"));
    


    detailVyrobku.find('.descrition').text(vyrobek.find('.descrition').text());

    vyrobky.toggle();
    detailVyrobku.toggle();

    var title = 'Detail výrobku: ' + nadpisVyrobku;
    document.title = title;
    window.history.pushState("", title, '?detail');
});