$(function () {
    var addActiveClassToNav = function () {
        var pathName = document.location.pathname,
            activePath = pathName.split('/')[1],
            activeNavLink = $('nav ul li a[href="/' + activePath + '"]');

        $('nav ul li').removeClass('active');
        activeNavLink.parent().addClass('active');
    };

    addActiveClassToNav();
    hljs.initHighlightingOnLoad();
    $('table.oskari-sortable').stupidtable();
    $('.menu-icon').click(function () {
        $('nav').toggleClass('active');
    });

    // Swipe handler for Carousel
    $('.carousel').bcSwipe({ threshold: 50 });
});
