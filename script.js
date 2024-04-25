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
            window.location.href = 'https://translate.google.com/?sl=vi&tl=en&text=th%E1%BA%B1ng%20d%C3%A2m%20I%E1%BB%93n&op=translate';
         }, 7000);
}