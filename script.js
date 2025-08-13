document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('myVideoPlayer');
    const tgButton = document.getElementById('tgButton');
    const downloadButton = document.getElementById('downloadButton');

    // --- Video Source Handling ---
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video'); 
    
    if (videoUrl) {
        videoPlayer.src = decodeURIComponent(videoUrl);
        videoPlayer.load(); 
        videoPlayer.play().catch(error => {
            console.log("Autoplay prevented:", error);
            // Optionally, show a message to the user: "Click play to start video."
        });
    } else {
        console.log("Video URL missing. Please add ?video=https://stream.pwjarvis.app/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlb0lkIjoiZmJhYWNmNDktYzgzNC00YzZlLWE3MzEtZWI3NGEzZTE0NDEyIiwiZXhwIjoxNzU1MjYyMTE2fQ.AqOqtdCspRfcDLj17mScDSNpo3jfCDC3QHWZdWZ76Hs/hls/360/main.m3u8");
        // Fallback or placeholder video
        // videoPlayer.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // Example fallback video
        // videoPlayer.load();
        // alert("No video URL provided. Please add ?video=YOUR_ENCODED_TG_LINK to the URL.");
    }

    // --- Button Functionality ---

    // Telegram Button
    tgButton.addEventListener('click', () => {
        // *** YAHAN APNA TELEGRAM CHANNEL/GROUP LINK DALNA HAI ***
        const tgLink = 'https://t.me/NEETxJEE_Official'; 
        window.open(tgLink, '_blank'); 
    });

    // Download Button
    downloadButton.addEventListener('click', () => {
        if (videoPlayer.src) {
            const currentVideoSrc = videoPlayer.src;
            const link = document.createElement('a');
            link.href = currentVideoSrc;
            link.download = 'MrXTitans_Video.mp4'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('No video loaded to download!');
        }
    });
});
