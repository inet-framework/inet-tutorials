---
layout: page
title: File listing
---
<script>
document.addEventListener("DOMContentLoaded", function (event) {
    var location = new URL(window.location);
    var url = location.searchParams.get("url");
    var name = url.replace(/.*\//g, ""); // keep only the name part (the one after the last / ) 

    $('h1.page-title').text(name);
    pre = $('pre#content');
    jQuery.ajax({url: url,
                   success: function(data) { pre.text(data) },
                   error: function() { pre.text('Failed to load '+url)},
                   dataType: "text" });   
});
</script>
<pre id="content">Loading...</pre>
