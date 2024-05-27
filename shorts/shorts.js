document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll("video");

    function pauseAllVideos(exceptVideo) {
        videos.forEach(function(video) {
            if (video !== exceptVideo) {
                video.pause();
            }
        });
    }

    function playNextVideoAndScroll() {
        if (videos.length > 1) {
            // Pause and hide the current video
            videos[0].pause();
            videos[0].style.display = "none";

            // Show and play the next video
            videos[1].style.display = "block";
            videos[1].play();
            videos[1].scrollIntoView({ behavior: 'smooth' });

            // Pause all other videos
            pauseAllVideos(videos[1]);
        }
    }

    if (videos.length > 1) {
        // Event listener for when the first video finishes playing
        videos[0].addEventListener('ended', function() {
            playNextVideoAndScroll();
        });
    }

    // Event listener for clicking on a video
    videos.forEach(function(video) {
        video.addEventListener('click', function() {
            // Toggle playback of the clicked video
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }

            // Pause all other videos except the clicked one
            pauseAllVideos(video);
        });
    });

    // Event listener for like button
    document.querySelectorAll(".like-button").forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Liked the video!");
        });
    });

    // Event listener for dislike button
    document.querySelectorAll(".dislike-button").forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Disliked the video!");
        });
    });

    // Event listener for share button
    document.querySelectorAll(".share-button").forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Shared the video!");
        });
    });
});
    