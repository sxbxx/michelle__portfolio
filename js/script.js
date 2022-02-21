/* -------------------------------------------------------------------------- */
/* ---------------------------------- index --------------------------------- */
/* -------------------------------------------------------------------------- */
$(document).ready(function() {
    $(".link_michelle").on("mouseover", function() {

        $(".img_michelle").show()
    }).on("mouseout", function() {
        $(".img_michelle").hide()
    }),
    $(".link_tauranga").on("mouseover", function() {
        $(".img_tauranga").show()
    }).on("mouseout", function() {
        $(".img_tauranga").hide()
    }),
    $(".link_projects").on("mouseover", function() {
        $(".img_projects").show()
    }).on("mouseout", function() {
        $(".img_projects").hide()
    }),



    /* -------------------------------------------------------------------------- */
    /* -------------------------------- projects -------------------------------- */
    /* -------------------------------------------------------------------------- */

    $(".link_ranger__cover").on("mouseover", function() {
        $(".img_01__ranger").show()
    }).on("mouseout", function() {
        $(".img_01__ranger").hide()
    })
});
