      function showVideo(index) {
            var videos = document.querySelectorAll('.media-toggle');
            var options = document.querySelectorAll('.video-option');
            var popups = document.querySelectorAll('.popup');
            
            videos.forEach(function(video, i) {
                video.classList.remove('active');
                if (i === index) {
                    video.classList.add('active');
                }
            });

            options.forEach(function(option, i) {
                option.classList.remove('active');
                if (i === index) {
                    option.classList.add('active');
                }
            });

            popups.forEach(function(popup, i) {
                popup.classList.remove('active');
                if (i === index) {
                    popup.classList.add('active');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            showVideo(0); 
        });
