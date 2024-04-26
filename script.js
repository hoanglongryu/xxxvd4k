document.getElementById("myImage").onclick = function() {
    var modal = document.getElementById("myModal");
    var vid = document.getElementById("myVideo");
    var audio = document.getElementById("myAudio");

    modal.style.display = "block";

    vid.onplay = function() {
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
            vid.controls = false; // Ẩn các điều khiển khi video ở chế độ toàn màn hình
        } else if (vid.mozRequestFullScreen) { /* Firefox */
            vid.mozRequestFullScreen();
            vid.controls = false;
        } else if (vid.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            vid.webkitRequestFullscreen();
            vid.controls = false;
        } else if (vid.msRequestFullscreen) { /* IE/Edge */
            vid.msRequestFullscreen();
            vid.controls = false;
        }
    }

    audio.play();
    vid.play();

        // Chuyển hướng sau 7 giây
        setTimeout(function(){
            window.location.href = 'https://translate.google.com/?sl=en&tl=vi&text=you%20are%20Lustful%20guy%20Ion&op=translate';
         }, 7000);
}
