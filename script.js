document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('myVideoPlayer');
    const tgButton = document.getElementById('tgButton');
    const downloadButton = document.getElementById('downloadButton');

    // --- Video Source Handling ---
    // Option 1: URL parameter se video link lena (Recommended for sharing)
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video'); // 'video' parameter ko check karega
    
    if (videoUrl) {
        // Decode the URL to handle special characters (like the hash in your TG link)
        videoPlayer.src = decodeURIComponent(videoUrl);
        videoPlayer.load(); // Load the new video source
        videoPlayer.play().catch(error => {
            console.log("Autoplay prevented:", error);
            // Optionally show a message to the user to click play
        });
    } else {
        // Fallback: Agar URL mein koi video link nahi hai
        console.log("No video URL provided in the URL parameter. Please add ?video=YOUR_ENCODED_TG_LINK");
        // videoPlayer.src = "fallback_video.mp4"; // Aap yahan koi default video set kar sakte hain
    }

    // --- Button Functionality ---

    // Telegram Button
    tgButton.addEventListener('click', () => {
        // Replace with your Telegram Channel/Group link
        const tgLink = 'https://t.me/YourTelegramChannelOrGroup'; 
        window.open(tgLink, '_blank'); // Opens in a new tab
    });

    // Download Button
    downloadButton.addEventListener('click', () => {
        // Download current video. Ensure the TG link allows direct download.
        // For some TG links, this might just open the link in a new tab instead of downloading directly.
        if (videoPlayer.src) {
            const currentVideoSrc = videoPlayer.src;
            const link = document.createElement('a');
            link.href = currentVideoSrc;
            link.download = 'video_download.mp4'; // You can make this dynamic if needed
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('No video loaded to download!');
        }
    });

    // Optional: Hide controls when video plays and show on hover
    // videoPlayer.addEventListener('play', () => {
    //     // You might want to hide the overlay after a few seconds of play
    // });

    // videoPlayer.addEventListener('pause', () => {
    //     // Always show controls on pause
    // });
});
