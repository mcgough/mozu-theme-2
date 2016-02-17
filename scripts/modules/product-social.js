define(['modules/jquery-mozu'], function($) {
  var $socialLinks = $('.right-content .social .social-icon');
  $socialLinks.on('click', function(e) {
    e.preventDefault();
    var title, image, description, url, $icon;
    $icon = $(this);
    title = $icon.parent().attr('data-title');
    // var host = "http://" + window.location.hostname;
    image = "https:" + $icon.parent().attr('data-image');
    description = $icon.parent().attr('data-description');
    url = document.URL;
    if($icon.hasClass('facebook')) {
      FB.ui({
        method: "feed",
        name: title,
        picture: image,
        link: url,
        description: description,
        actions: {
          name: "on FB @RedingtonGear",
          link: "https://www.facebook.com/RedingtonGear"
        }
      });
    } else if($icon.hasClass('twitter')) {
      var tweetUrl, tweetWindow;
      tweetUrl = "//twitter.com/intent/tweet?text=" + encodeURIComponent(title.substr(0,140)) + "&url=" + encodeURIComponent(url) + "&via=RedingtonGear";
      tweetWindow = window.open(tweetUrl, 'tweetWindow', 'height=300, width=500');
      if (window.focus) {
        return tweetWindow.focus();
      }
    } else if($icon.hasClass('pinterest')) {
      var pinUrl, pinWindow;
      pinUrl = "//pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&media=" + encodeURIComponent(image) + "&description=" + encodeURIComponent(title);
      pinWindow = window.open(pinUrl, 'pinWindow', 'height=400,width=600');
      if (window.focus) {
        return pinWindow.focus();
      }
    } else if($icon.hasClass('google')) {
      var shareURL, shareWindow;
      shareURL = "https://plus.google.com/share?url=" + encodeURIComponent(url);
      shareWindow = window.open(shareURL, 'shareWindow', 'height=400,width=600');
      if (window.focus) {
        return shareWindow.focus();
      }
    }
  });
});