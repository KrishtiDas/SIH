document.querySelector('.navbar-profile').addEventListener('click', function() {
    document.querySelector('.profile-dropdown').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.navbar-profile img')) {
        var dropdowns = document.getElementsByClassName("profile-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
