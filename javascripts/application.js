// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  $(document).bind('domchange', function() {
    $("select, input:checkbox, input:radio, input:file").each(function() {
      if( !$(this).data('uniformed') ) {
        $(this).uniform();
        $(this).data('uniformed', true)
      }
    })
  });
  
  $(document).trigger('domchange');
});