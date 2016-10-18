$(function(){
    // var $filterButton = $('.__filter_button');
    // var $filterFormPopup = $('.__filter_form');
    // $filterButton.popup({
    //     popup: $filterFormPopup,
    //     on: 'click',
    //     inline     : true,
    //     closable  : false,
    //     exclusive: false,
    //     position   : 'bottom center'
    // });

    // var $change_price_form = $('.__change_budget_form');
    // var $change_budget_button = $('.__change_budget');
    // $change_budget_button.popup({
    //     popup: $change_price_form,
    //     on: 'click',
    //     inline: true,
    //     closable: false,
    //     exclusive: false,
    //     position: 'bottom center'
    // });

    // var $service_item = $('.service-list .service-item');
    // $service_item.dimmer({
    //     on: 'hover'
    // });

    var $review_button = $('.Review_Button');
    var $review_modal = $('.Review__Modal');
    // modal settings
    $review_modal.modal({
        allowMultiple: true,
        closable: false,
        transition: 'fade up',
        blurring: true
    });
    // $review_button.on('click', function(e){
    //     $review_modal.modal('show');
    // });

    var $zoomButton = $('.Zoom__Button');
    var $zoomModal = $('.Zoom__Modal');
    $zoomModal.modal({
        closable: false,
        transition: 'fade up',
        blurring: true
    });
    // $zoomButton.on('click', function(e){
    //     $zoomModal.modal('show');
    // });

    console.log('kit loaded...');
});