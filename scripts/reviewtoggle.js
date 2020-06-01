var toggle_button = document.createElement("button");
toggle_button.appendChild(document.createTextNode("Toggle Reviews"));
toggle_button.id = "toggle_button";
toggle_button.onclick = function() {
    var pop_reviews_section = document.getElementById("popular-reviews");
    var recent_reviews_section = document.getElementById("recent-reviews");
    var what_friends_section = document.getElementsByClassName("activity-from-friends")[0];
    if(pop_reviews_section.style.display == "block")
    {
        pop_reviews_section.style.display = "none";
        recent_reviews_section.display = "none";
        what_friends_section.display = "none";
        toggle_button.innerHTML = "Show Reviews";
    }
    else 
    {
        pop_reviews_section.style.display = "block";
        recent_reviews_section.display = "block";
        what_friends_section.display = "block";
        toggle_button.innerHTML = "Hide Reviews";
    }
};
document.getElementsByClassName("film-recent-reviews")[0].appendChild(toggle_button);