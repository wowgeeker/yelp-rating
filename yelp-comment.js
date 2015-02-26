(function() {

  $(document).on('click', '.rating-chooser-cover div', function(e) {
    var chooser, num;
    e.preventDefault();
    num = $(this).index() + 1;
    chooser = $(this).parent().parent().find('.rating-chooser');
    chooser.children().removeClass();
    return chooser.children().addClass("star-img stars_" + num);
  });

}).call(this);
