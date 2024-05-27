document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector(".nav-left .menu");
    var sidebar = document.querySelector(".sidebar");
    var container = document.querySelector(".trend-container");
    var hideExplore = document.querySelectorAll(".hide-explore");
    var trendingLetter = document.querySelector('.trending-icon .letter');
    var trendingOptions = document.querySelector('.trending-options');
    var homeLink = document.querySelector('.trending-home');
    var videosLink = document.querySelector('.trending-videos');
    var communityLink = document.querySelector('.trending-gaming');
    var homeContent = document.getElementById('home');
    var videosContent = document.getElementById('videos');
    var communityContent = document.getElementById('community');
    var searchInput = document.querySelector(".search input");
    var ytVideoLists = document.querySelectorAll(".yt-video-list");

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-trend-container");

        if (sidebar.classList.contains("small-sidebar")) {
            hideElements(hideExplore, true);
        } else {
            hideElements(hideExplore, false);
        }
    });

    function hideElements(elements, hide) {
        elements.forEach(function(element) {
            if (hide) {
                element.style.display = "none";
            } else {
                element.style.display = "";
            }
        });
    }

    
    trendingLetter.style.display = 'block';
    trendingOptions.style.display = 'block';

    function toggleContent(category) {
        homeContent.style.display = 'none';
        videosContent.style.display = 'none';
        communityContent.style.display = 'none';

        document.getElementById(category).style.display = 'block';
    }

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('home');
    });

    videosLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('videos');
    });

    communityLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('community');
    });

    searchInput.addEventListener('input', function(event) {
        const searchQuery = event.target.value.toLowerCase().trim();

        ytVideoLists.forEach(function(item) {
            const title = item.querySelector('.trend-video-info2 a').textContent.toLowerCase();

            if (title.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

});

function toggleSubscribe(button) {
    if (button.textContent === "Subscribe") {
        button.textContent = "Subscribed";
        button.style.backgroundColor = "gray";
    } else {
        button.textContent = "Subscribe";
        button.style.backgroundColor = "black";
    }
    alert("You clicked the Subscribe button!"); 
}