document.addEventListener('DOMContentLoaded', function() {
    var homeTab = document.getElementById("home-tab");
    homeTab.click(); 
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].style.opacity = "0.6"; 
    }

    evt.currentTarget.style.opacity = "1";

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
