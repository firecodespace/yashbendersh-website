// document.addEventListener('DOMContentLoaded', function() {
//     var bgMusic = document.getElementById('bg_music');
//     var playMusicBtn = document.getElementById('playMusicBtn');
    
//     playMusicBtn.addEventListener('click', function() {
//         bgMusic.play();
//         playMusicBtn.parentNode.removeChild(playMusicBtn); // Remove the button from the DOM after clicking
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var bgMusic = document.getElementById('bg_music');
//     var playMusicBtn = document.getElementById('playMusicBtn');
    
//     playMusicBtn.addEventListener('click', function() {
//         bgMusic.play();
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    var bgMusic = document.getElementById('bg_music');
    var playMusicBtn = document.getElementById('playMusicBtn');
    
    // Function to play or pause the music
    function toggleMusic() {
        if (bgMusic.paused) {
            bgMusic.play();
            playMusicBtn.textContent = "Pause";
        } else {
            bgMusic.pause();
            playMusicBtn.textContent = "Play";
        }
    }
    
    // Play or pause the music when the button is clicked
    playMusicBtn.addEventListener('click', toggleMusic);
    
    // Update the button text when the music ends
    bgMusic.addEventListener('ended', function() {
        playMusicBtn.textContent = "Replay";
    });
});
