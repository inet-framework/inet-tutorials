//
// Allows including a line range of a file from HTML. Example:
//
// <pre src="../WirelessA.ned" from="network WirelessA" until="####"></pre>
//
// "from", "until" are regexes that match substring of a line; "from" is inclusive, "until" is exclusive
//
var getLines = function(text, from, until) {
   re = new RegExp("(^.*" + from + "[\\s\\S]*?)\n^.*" + until, 'm'); //TODO alert on regex syntax error!
   console.log(re);
   matches = text.match(re);
   return matches ? matches[1] : "<b>No matching lines!</b>";
}

var fileLoaded = function(file, data) {
   pres = $('pre[src="' + file + '"]');
   $.each(pres, function(i,pre) {
      excerpt = getLines(data, pre.attributes.from.value, pre.attributes.until.value);
      $(pre).html(excerpt);
   });
};

document.addEventListener("DOMContentLoaded", function (event) {
   pres = $('pre[src]');
   files = new Set();
   $.each(pres, function(i,pre) {files.add(pre.attributes.src.value); });
   console.log(files);

   files.forEach(function(file) {
      jQuery.get(file, function(data) {
          fileLoaded(file, data);
      });
   });
});

