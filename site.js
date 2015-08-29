window.onpopstate = function () {
    $('#vyrobky').toggle();
    $('#vyrobek-detail').toggle();
};

$(".vyrobek").click(function () {
    var vyrobek = $(this);
    var detailVyrobku = $('#vyrobek-detail');
    var vyrobky = $('#vyrobky');

    var nadpisVyrobku = vyrobek.find('.title').text();
    detailVyrobku.find('.title').text(nadpisVyrobku);
    detailVyrobku.find('.image').attr("src", vyrobek.find('.image').attr("src"));
    detailVyrobku.find('.descrition').text(vyrobek.find('.descrition').text());

    vyrobky.toggle();
    detailVyrobku.toggle();

    var title = 'Detail výrobku: ' + nadpisVyrobku;
    document.title = title;
    window.history.pushState("", title, '/detail');
});