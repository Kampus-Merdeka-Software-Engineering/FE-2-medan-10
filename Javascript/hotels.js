$(function(){
    $('input[name="daterange"]').daterangepicker({
        ssingleDatePicker: 'true',
        showShortcuts: 'false',
        showTopbar: 'false'
    }
    );
    
    $('input[name="daterange"]').val('');
    $('input[name="daterange"]').attr("placeholder","Check-in/Check-out");
});