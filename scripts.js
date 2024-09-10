document.addEventListener("DOMContentLoaded", function () {
    // Show the popup after 2 seconds
    setTimeout(function () {
        document.getElementById('popup').style.display = 'flex';
    }, 2000);

    // Close the popup when clicking the close button
    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
        }
    });
});
