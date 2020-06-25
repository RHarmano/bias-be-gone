var toggle_button = document.createElement("BUTTON");
document.getElementsByClassName("film-recent-reviews")[0].style.display = "none";
document.getElementsByClassName("activity-from-friends")[0].style.display = "none";
document.getElementsByClassName("section ratings-histogram-chart")[0].style.display = "none";
toggle_button.appendChild(document.createTextNode("Show Reviews"));
toggle_button.id = "toggle_button";
toggle_button.onclick = function() 
{
    var recent_reviews_section = document.getElementsByClassName("film-recent-reviews")[0],
        what_friends_section = document.getElementsByClassName("activity-from-friends")[0]
        hist_section = document.getElementsByClassName("section ratings-histogram-chart")[0]
    if(recent_reviews_section.style.display === "block")
    {
        recent_reviews_section.style.display = "none";
        what_friends_section.style.display = "none";
        hist_section.style.display = "none";
        toggle_button.innerHTML = "Show Reviews";
    }
    else 
    {
        recent_reviews_section.style.display = "block";
        what_friends_section.style.display = "block";
        hist_section.style.display = "block";
        toggle_button.innerHTML = "Hide Reviews";
    }
};
document.getElementsByClassName("sidebar")[0].appendChild(toggle_button);