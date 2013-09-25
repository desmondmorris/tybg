'use strict';
(function ($) {
  $(document).ready(function(){
    var html = '';
    html = $('body').html().replace(/god|yahweh|allah/ig,'Based God');
    html = html.replace(/jesus/ig, 'Lil B');
    html = html.replace(/thank you/ig, 'Thank You Based God');
    html = html.replace(/based ?based god/ig, 'Based God');
    $('body').html(html);
  });
})(jQuery);

