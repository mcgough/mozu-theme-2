require(['modules/jquery-mozu'],function($){
  var $rows = $('.mz-productdetail-fulldesc table tr');
  var $prodCode = $('.mz-productcodes-productcode');
  var $sku;
  var isActive;
  $rows.on('click',function(){
    isActive = $('tr.active');
    if(isActive.length) {
      isActive.removeClass('active');
    }
    $(this).addClass('active');
    $sku = ($(this).children().eq(0).text());
    $prodCode.text($sku);
  });
});