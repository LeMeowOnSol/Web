// window.onload = function() {
//     document.getElementById("my_audio").addEventListener('mousemove', () => {
//
//     })
// }

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "music/music.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})