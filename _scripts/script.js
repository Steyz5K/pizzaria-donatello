$('section.pizza').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('section.pizza p').addClass('animate__animated animate__fadeInUp')

    }
})