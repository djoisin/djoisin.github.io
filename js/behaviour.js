$(function() {

  // Events
  $(".js-doc-title").on("click", function(e) {
    e.preventDefault();
    $(this).next(".documentation-ressource-content").slideToggle();
  });

  $(".js-doc-getUrl").on("click", function(e) {
    e.stopPropagation();
    var data = $(this).parents(".js-doc-ressource").data("ressource"),
        url = window.location.protocol+"//"+window.location.host+window.location.pathname+"?ressource="+data;
    prompt("Copy to clipboard: Ctrl+C, Enter", url);
  });

  // fonctions
  urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results?results[1]:"";
  };

  scrollToParam = function () {
    var param = urlParam('ressource'),
        $target = $("[data-ressource='"+ param +"']");

    if ($target.length != 0) {
      $target.find(".js-doc-title").trigger("click");
      $('html, body').animate({ scrollTop: $target.offset().top - 50},1000);
    }
  }


  scrollToParam();

});
