$(document).ready(function () {
    alert('hola');
    $('#product-price__second').hide();
    $('#btn__left').click(function(){
        $('#product-price__first').show(3000);
        $('#product-price__second').hide();
    });
    $('#btn__right').click(function(){
        $('#product-price__first').hide(3000);
        $('#product-price__second').show(3000);
    });
});