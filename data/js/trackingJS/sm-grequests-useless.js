(function($){$(document).ready(function(){$("#fffm_keywords_block").children().each(function(){if ($(this).attr("id")=="fffm-cse-notice")return;$(this).wrapInner('<a href="http://www.google.com/cse?ie=UTF-8&cx=partner-pub-7140863250046446%3Aq0u9wkgl7ha&q='+$(this).text()+'" target="_blank"></a>');});});})(window.jQuery);