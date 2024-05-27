document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector(".nav-left .menu");
    var sidebar = document.querySelector(".sidebar");
    var container = document.querySelector(".trend-container");
    var hideExplore = document.querySelectorAll(".hide-explore");
    var trendingIcon = document.querySelectorAll(".trending-icon");
    var libraryIcon = document.querySelectorAll(".library");
    var historyIcon = document.querySelectorAll(".history");
    var hrElements = document.querySelectorAll("hr");
    var searchInput = document.querySelector(".search input");
    var ytVideoLists = document.querySelectorAll(".yt-video-list");

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-trend-container");

        if (sidebar.classList.contains("small-sidebar")) {
            hideElements(hideExplore, true);
            hideElements(trendingIcon, true);
            hideElements(libraryIcon, true);
            hideElements(historyIcon, true);
            hideElements(hrElements, true);
        } else {
            hideElements(hideExplore, false);
            hideElements(trendingIcon, false);
            hideElements(libraryIcon, false);
            hideElements(historyIcon, false);
            hideElements(hrElements, false);
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

    function toggleContent(category) {
        document.querySelectorAll('.now-content, .music-content, .gaming-content, .movies-content').forEach(function(content) {
            content.style.display = 'none';
        });

        document.querySelector('.' + category + '-content').style.display = 'block';
    }

    document.querySelector('.trending-now').addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('now');
    });

    document.querySelector('.trending-music').addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('music');
    });

    document.querySelector('.trending-gaming').addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('gaming');
    });

    document.querySelector('.trending-movies').addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent('movies');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const videoItems = document.querySelectorAll('.yt-video-list');

    searchInput.addEventListener('input', function (event) {
        const searchQuery = event.target.value.toLowerCase().trim();

        videoItems.forEach(function (item) {
            const title = item.querySelector('.yt-video-info').textContent.toLowerCase();

            if (title.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
