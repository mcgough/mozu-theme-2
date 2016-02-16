define(['modules/jquery-mozu'], function($) {

  $(document).on('click', '.right-content .social .social-icon', function(e) {
    var title, image, description, url;
    e.preventDefault();
    title = $(this).parent().attr('data-title');
    // var host = "http://" + window.location.hostname;
    image = "https:" + $(this).parent().attr('data-image');
    description = $(this).parent().attr('data-description');
    url = document.URL;
    if($(this).hasClass('facebook')) {
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
    } else if($(this).hasClass('twitter')) {
      var tweetUrl, tweetWindow;
      tweetUrl = "//twitter.com/intent/tweet?text=" + encodeURIComponent(title.substr(0,140)) + "&url=" + encodeURIComponent(url) + "&via=RedingtonGear";
      tweetWindow = window.open(tweetUrl, 'tweetWindow', 'height=300, width=500');
      if (window.focus) {
        return tweetWindow.focus();
      }
    } else if($(this).hasClass('pinterest')) {
      var pinUrl, pinWindow;
      pinUrl = "//pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&media=" + encodeURIComponent(image) + "&description=" + encodeURIComponent(title);
      pinWindow = window.open(pinUrl, 'pinWindow', 'height=400,width=600');
      if (window.focus) {
        return pinWindow.focus();
      }
    } else if($(this).hasClass('google')) {
      var shareURL, shareWindow;
      shareURL = "https://plus.google.com/share?url=" + encodeURIComponent(url);
      shareWindow = window.open(shareURL, 'shareWindow', 'height=400,width=600');
      if (window.focus) {
        return shareWindow.focus();
      }
    }
  });
});