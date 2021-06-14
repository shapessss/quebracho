$("nav.about-nav a, a").on("click", function (event) {
    //event.preventDefault()

    const href = $(this).attr("href")

    window.history.pushState(null, null, href)

    $.ajax({
        url: href,
        seccess: function (data) {
            $("main").fadeOut(250, function () {
                const newPage = $(data).filter("main").html()

                $("main").html(newPage)

                $("main").fadeIn(250)
            })
        }
    })
})