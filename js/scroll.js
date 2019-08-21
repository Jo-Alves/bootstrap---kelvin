(function () {
    $("#navMenu a").click(function (e) {
        e.preventDefault();

        let linkTarget = $(this).attr("href"), target = $(linkTarget).offset();
       
        $("html, body").animate({
            scrollTop: target.top
        }, 800)
    })
})()