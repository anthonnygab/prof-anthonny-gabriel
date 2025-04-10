const videos = [
    "./assets/video/indicaçãoJoão.mp4",
    "./assets/video/indicaçãoKat.mp4"
];

let videoIndex = 0;

function mudarVideo(direcao) {
    videoIndex += direcao;

    if(videoIndex < 0) {
        videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
        videoIndex = 0;
    }

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videos[videoIndex];
    videoPlayer.load();
    videoPlayer.play();
}