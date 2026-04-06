var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var message = "";

    if (x < 5 || x >= 20) {
        message = "Good night, Welcome to Monomuseum!";
    } else if (x < 12) {
        message = "Good morning, Welcome to Monomuseum!";
    } else if (x < 18) {
        message = "Good afternoon, Welcome to Monomuseum!";
    } else {
        message = "Good evening, Welcome to Monomuseum!";
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

var galleryImages = [
    "../static/gallery1.jpeg",
    "../static/gallery2.jpeg",
    "../static/gallery3.jpeg"
];

var currentImageIndex = 0;

function showImage() {
    var img = document.getElementById("galleryImage");
    if (img) {
        img.src = galleryImages[currentImageIndex];
    }
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    showImage();
}

function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    showImage();
}

function goToCheckout(date) {
    localStorage.setItem("selectedDate", date);
    window.location.href = "checkout.html";
}

function loadCheckout() {
    var storedDate = localStorage.getItem("selectedDate");
    var visitDate = document.getElementById("visitDate");

    if (visitDate && storedDate) {
        var convertedDate = new Date(storedDate);
        if (!isNaN(convertedDate)) {
            var year = convertedDate.getFullYear();
            var month = String(convertedDate.getMonth() + 1).padStart(2, "0");
            var day = String(convertedDate.getDate()).padStart(2, "0");
            visitDate.value = year + "-" + month + "-" + day;
        }
    }

    calculateTotal();
}

function calculateTotal() {
    var ticketCount = document.getElementById("ticketCount");
    var totalText = document.getElementById("totalPrice");

    if (!ticketCount || !totalText) {
        return;
    }

    var quantity = parseInt(ticketCount.value);

    if (isNaN(quantity) || quantity < 1) {
        totalText.innerHTML = "Total: $0";
        return;
    }

    var total = 18 * quantity;
    totalText.innerHTML = "Total: $" + total;
}

function clearErrors() {
    var errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.innerHTML = "";
    });
}

function submitOrder() {
    clearErrors();

    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var ticketCount = document.getElementById("ticketCount");
    var email = document.getElementById("email");
    var zipCode = document.getElementById("zipCode");

    var valid = true;

    if (!visitDate.value) {
        document.getElementById("visitDateError").innerHTML = "Please select a visit date.";
        valid = false;
    }

    if (!ticketType.value) {
        document.getElementById("ticketTypeError").innerHTML = "Please select a ticket type.";
        valid = false;
    }

    var quantity = parseInt(ticketCount.value);
    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
        document.getElementById("ticketCountError").innerHTML = "Please enter a quantity from 1 to 10.";
        valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    var zipPattern = /^\d{5}$/;
    if (zipCode.value.trim() !== "" && !zipPattern.test(zipCode.value.trim())) {
        document.getElementById("zipCodeError").innerHTML = "Zip code must be exactly 5 digits.";
        valid = false;
    }

    if (!valid) {
        return;
    }

    var total = 18 * quantity;

    localStorage.setItem("name", email.value);
    localStorage.setItem("total", total);

    window.location.href = "confirmation.html";
}

function showConfirmation() {
    var name = localStorage.getItem("name");
    var total = localStorage.getItem("total");

    document.getElementById("message").innerHTML =
        "Thank you! Your order has been placed.";

    document.getElementById("total").innerHTML =
        "Total Paid: $" + total;
}