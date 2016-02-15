define(['modules/jquery-mozu'], function($) {

  var sku;
  var isActive;
  var isSelected;

  $(document).on('click', '.mz-productdetail-fulldesc tbody tr', function(e) {
    e.stopPropagation();
    sku = $(this).children().eq(0).text();
    $('[sku="' + sku + '"]').prop("selected",true).change();
    isActive = $('tr.active');
    if(isActive.length > 0) {
      isActive.removeClass('active');
    }
    $(this).addClass('active');
    return false;
  });

});

