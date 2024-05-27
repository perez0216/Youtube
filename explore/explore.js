document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector(".nav-left .menu");
    var sidebar = document.querySelector(".sidebar");
    var container = document.querySelector(".music-container");
    var hideExplore = document.querySelectorAll(".hide-explore");
    var hrElements = document.querySelectorAll("hr");
    var homeBtn = document.querySelector(".music-navigation .music-home-btn");
    var communityBtn = document.querySelector(".music-navigation .music-community-btn");
    var homeContent = document.querySelector(".music-home");
    var communityContent = document.querySelector(".music-community");

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-trend-container");

        if (sidebar.classList.contains("small-sidebar")) {
            hideElements(hideExplore, true);
            hideElements(hrElements, true);
        } else {
            hideElements(hideExplore, false);
            hideElements(hrElements, false);
        }
    });

    homeBtn.addEventListener('click', function() {
        homeContent.style.display = "block";
        communityContent.style.display = "none";
        homeBtn.classList.add("active");
        communityBtn.classList.remove("active");
    });

    communityBtn.addEventListener('click', function() {
        communityContent.style.display = "block";
        homeContent.style.display = "none";
        communityBtn.classList.add("active");
        homeBtn.classList.remove("active");
    });

    function hideElements(elements, hide) {
        elements.forEach(function(element) {
            element.style.display = hide ? "none" : "";
        });
    }
});
