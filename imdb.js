function noRate() {
    $("#sidebar").remove();
    $(".imdbRating").hide();
    console.log("Call order");
}

if (window.attachEvent) {
    window.attachEvent('onload', noRate);
}
else if (window.addEventListener) {
    window.addEventListener('load', noRate, false);
}
else if (jQuery) {
    $(window).ready(noRate);
}
else {
    document.addEventListener('load', noRate, false);
    document.addEventListener('DOMContentLoaded', noRate, false);
    hist_section.addEventListener('change', noRate, false);
}