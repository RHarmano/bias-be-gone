function reviewToggle() {
    console.log("function call");
    var toggle_button = document.createElement("BUTTON");
    document.getElementsByClassName("film-recent-reviews")[0].style.opacity = "0.01";
    document.getElementsByClassName("activity-from-friends")[0].style.opacity = "0.01";
    document.getElementsByClassName("rating-histogram clear rating-histogram-exploded")[0].opacity = "0.01";
    toggle_button.appendChild(document.createTextNode("Show Reviews"));
    toggle_button.id = "toggle_button";
    toggle_button.onclick = function() 
    {
        var recent_reviews_section = document.getElementsByClassName("film-recent-reviews")[0],
            what_friends_section = document.getElementsByClassName("activity-from-friends")[0]
            hist_section = document.getElementsByClassName("rating-histogram clear rating-histogram-exploded")[0]
        if(recent_reviews_section.style.opacity === "1.0")
        {
            recent_reviews_section.style.opacity = "0.01";
            what_friends_section.style.opacity = "0.01";
            hist_section.style.opacity = "0.01";
            toggle_button.innerHTML = "Show Reviews";
        }
        else 
        {
            recent_reviews_section.style.opacity = "0.01";
            what_friends_section.style.opacity = "0.01";
            hist_section.style.opacity = "0.01";
            toggle_button.innerHTML = "Hide Reviews";
        }
    }
    document.getElementsByClassName("sidebar")[0].appendChild(toggle_button);
}

if (window.attachEvent)
  {window.attachEvent('onload', reviewToggle);}
else if (window.addEventListener)
  {window.addEventListener('load', reviewToggle, false);}
else {
    document.addEventListener('load', reviewToggle, false);
    document.addEventListener('DOMContentLoaded', reviewToggle, false);
}