document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var paragraph = document.getElementById("openmodal");
    var span = document.getElementsByClassName("close")[0];

    paragraph.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});