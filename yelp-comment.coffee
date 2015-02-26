$(document).on 'click','.rating-chooser-cover div',(e)->
  e.preventDefault()
  num = $(this).index()+1
  chooser = $(this).parent().parent().find('.rating-chooser')
  chooser.children().removeClass()
  chooser.children().addClass("star-img stars_#{num}")