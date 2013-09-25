'use strict';
(function ($) {
  $(document).ready(function(){
    var html = '';
    html = $('body').html().replace(/god|yahweh|allah/ig,'Based God');
    html = html.replace(/jesus/ig, 'Lil B');
    $('body').html(html);
  });
})(jQuery);

