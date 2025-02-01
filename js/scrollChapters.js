// Save scroll position before navigating away
function saveScrollPosition() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
}

// Function to go back and restore scroll position
function goBack() {
    window.location.href = "index.html#return";
}

// Restore scroll position OR smooth scroll to a section on page load
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        let element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            return; // Prevent further execution if scrolling to an anchor
        }
    }

    if (window.location.hash === "#return") {
        let scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, scrollPosition);
        }
        // Remove #return from the URL to keep it clean
        history.replaceState(null, null, window.location.pathname);
    }
});
