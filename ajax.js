$("nav.about-nav a, a").on("click", function (event) {
    //event.preventDefault()

    const href = $(this).attr("href")

    window.history.pushState(null, null, href)

    $.ajax({
        url: href,
        seccess: function (data) {
            $("main").fadeOut(500, function () {
                const newPage = $(data).filter("main").html()

                $("main").html(newPage)

                $("main").fadeIn(500)
            })
        }
    })
})