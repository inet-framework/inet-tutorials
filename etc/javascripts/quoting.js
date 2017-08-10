//
// Allows including a line range of a file from HTML. Example:
// <pre src="../WirelessA.ned" from="network WirelessA" until="####"></pre>
// "from", "until" are regexes that match substring of a line; "from" is inclusive, "until" is exclusive
//
var getLines = function(text, from, until) {
    if (from == null && until == null) {
        return text;
    } else if (from == null) {
        re = new RegExp("(^[\\s\\S]*?)\n^.*" + until, 'm'); //TODO alert on regex syntax error!
    } else if (until == null) {
        re = new RegExp("(^.*" + from + "[\\s\\S]*)", 'm'); //TODO alert on regex syntax error!
    } else {
        re = new RegExp("(^.*" + from + "[\\s\\S]*?)\n^.*" + until, 'm'); //TODO alert on regex syntax error!
    }
    matches = text.match(re);
    return matches ? matches[1] : "!!! No matching lines !!!";
}

var fileLoaded = function(file, data) {
   pres = $('pre[src="' + file + '"]');
   $.each(pres, function(i,pre) {
      excerpt = getLines(data, 
                         pre.attributes.from ? pre.attributes.from.value : null, 
                         pre.attributes.until ? pre.attributes.until.value : null);
      var language = file.includes(".ned") ? "ned" : file.includes(".xml") ? "xml" : file.includes(".ini") ? "ini" : "generic";
      Rainbow.color(excerpt, language, function(highlightedCode) {
            $(pre).html(highlightedCode);
      });
   });
};

document.addEventListener("DOMContentLoaded", function (event) {
   pres = $('pre[src]');
   files = new Set();
   $.each(pres, function(i,pre) {files.add(pre.attributes.src.value); });

   files.forEach(function(file) {
      jQuery.ajax({url: file,
                   success: function(data) { fileLoaded(file, data); },
                   dataType: "text" });
   });
});

