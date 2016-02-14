define(['modules/jquery-mozu'], function($) {

  var options = $('.mz-productoptions-option option');
  var $rows = $('.mz-productdetail-fulldesc tbody tr');
  var $prodCode = $('.mz-productcodes-productcode');
  var $sku;
  var isActive;

  $(document).on('click', '.mz-productdetail-fulldesc tbody tr', function() {
    isActive = $('tr.active');
    if(isActive.length > 0) {
      isActive.removeClass('active');
    }
    $(this).addClass('active');
    $sku = ($(this).children().eq(0).text());
    console.log($sku);
    // $prodCode.text($sku);
  });

  console.log(options);

});