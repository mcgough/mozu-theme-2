define(['modules/jquery-mozu','vendor/jquery-scrollto'], function($,_$) {
  $(document).on('click', ".tech-callout", function(){
    $('[alt="product features"]').eq(0).ScrollTo();
  });
});