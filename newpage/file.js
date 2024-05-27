var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var hideExplore = document.querySelectorAll(".hide-explore");
var trendingIcon = document.querySelectorAll(".trending-icon");
var libraryIcon = document.querySelectorAll(".library");
var historyIcon = document.querySelectorAll(".history");
var hrElements = document.querySelectorAll("hr");

sidebar.classList.add("small-sidebar");
container.classList.add("small-container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("small-container");

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
}

function hideElements(elements, hide) {
    elements.forEach(function(element) {
        if (hide) {
            element.style.display = "none";
        } else {
            element.style.display = "";
        }
    });
}

function toggleLike(element, event) {
    event.preventDefault();
    var likeBtn = element.querySelector('img');
    likeBtn.classList.toggle('liked');
    
    var dislikeBtn = document.querySelector('#dislikeBtn');
    dislikeBtn.classList.remove('disliked');

    alert("You clicked the Like button!"); 
}

function toggleDislike(element, event) {
    event.preventDefault();
    var dislikeBtn = element.querySelector('img');
    dislikeBtn.classList.toggle('disliked');
    
    var likeBtn = document.querySelector('#likeBtn');
    likeBtn.classList.remove('liked');

    alert("You clicked the Dislike button!"); 
}

function toggleSubscribe(button) {
    if (button.textContent === "Subscribe") {
        button.textContent = "Subscribed";
        button.style.backgroundColor = "gray";
    } else {
        button.textContent = "Subscribe";
        button.style.backgroundColor = "red";
    }
    alert("You clicked the Subscribe button!"); 
}

function shareVideo(event) {
    event.preventDefault();
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl)
        .then(() => {
            alert('Video URL copied to clipboard!');
        })
        .catch((error) => {
            console.error('Failed to copy video URL: ', error);
        });
}

function toggleCommentLike(element, event) {
    event.preventDefault();
    alert("You liked the comment!");
}

function toggleCommentDislike(element, event) {
    event.preventDefault();
    alert("You disliked the comment!");
}

function addComment() {
    var commentInput = document.getElementById("commentInput").value;
    var commentSection = document.getElementById("commentSection");
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("prev-comnet");
    commentDiv.innerHTML = `
        <img src="../imagee/user.jpg" alt="">
        <div>
            <h3>User <span> Just now</span></h3>
            <p>${commentInput}</p>
            <div class="action">
                <a href="#" onclick="toggleCommentLike(this, event)"><img src="../imagee/like (2).png" alt=""><span id="commentLikeCount1">0</span></a>
                <a href="#" onclick="toggleCommentDislike(this, event)"><img src="../imagee/dislike (1).png" alt=""><span id="commentDislikeCount1">0</span></a>
            </div>
        </div>`;
    commentSection.appendChild(commentDiv);
}
