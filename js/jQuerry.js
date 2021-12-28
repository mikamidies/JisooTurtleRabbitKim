$(function() {
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
        console.log(scrollPos);
    });

    function checkScroll(scrollPos, introH){
        if ( scrollPos > introH)    {
            header.addClass("fixed");
        }   else    {
            header.removeClass("fixed");
        }
    }

    // header.addClass("fixed");

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        console.log(elementOffset);
        nav.removeClass("show-menu");
        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 700);  
    });

    let nav = $("#nav-menu");
    let navToggle = $("#nav-toggle");

    navToggle.on("clikc", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});

