var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var message = "";

    if (x < 5 || x >= 20) {
        message = "Good night";
    } else if (x < 12) {
        message = "Good morning";
    } else if (x < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }

    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = message;
    }
}

greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    var copyYear = document.getElementById("copyYear");
    if (copyYear) {
        copyYear.innerHTML = "© " + year + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('.nav_bar a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage && currentPage !== "index.html") {
            link.classList.add("active");
        }
    });
}

ActiveNav();

if (typeof $ !== "undefined") {
    $("#readLess").click(function(){ 
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}

function showPurchaseForm(date) {
    var purchaseForm = document.getElementById("purchaseForm");
    var selectedDate = document.getElementById("selectedDate");

    if (purchaseForm) {
        purchaseForm.style.display = "flex";
    }

    if (selectedDate) {
        selectedDate.value = date;
    }
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}

function toggleNav() {
    const nav = document.querySelector(".nav_bar");
    if (nav) {
        nav.classList.toggle("responsive");
    }
}

function loadMap() {
    var map = L.map("map").setView([40.4433, -79.9436], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    L.marker([40.4433, -79.9436]).addTo(map);
}

loadMap();

