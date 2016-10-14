/**
 * Created by guru on 10/14/16.
 */

$(document)
    .ready(function() {
        console.log("running...");
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

        // initialize smooth-scroll
        smoothScroll.init();

    })
;
