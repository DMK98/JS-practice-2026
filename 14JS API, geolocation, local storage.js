"use strict"
// =============== getCurrentPosition check location one time ============
document.querySelector(".geo").addEventListener("click", function () {
    document.querySelector(".err").innerHTML = "fetching geo location";
    document.querySelector(".stop").removeAttribute("disabled")
    navigator.geolocation.getCurrentPosition(x => {
        console.table(x.coords);
        let n = "North", e = "East";
        if (x.coords.latitude < 0) { n = "South" }
        if (x.coords.longitude < 0) { e = "West" }
        document.querySelector(".lat").innerHTML = x.coords.latitude;
        document.querySelector(".lan").innerHTML = x.coords.longitude;
        document.querySelector(".acc").innerHTML = x.coords.accuracy;
        document.querySelector(".alt").innerHTML = x.coords.altitude || "altitude not available";
    }, e => {
        console.warn(e.message);
        document.querySelector(".err").innerHTML = "permission denied";
    })
})

// ===========================navigator.geolocation.watchPosition change on location change
document.querySelector(".geo").addEventListener("click", function () {
    document.querySelector(".err").innerHTML = "fetching geo location";
    const id = navigator.geolocation.watchPosition(x => {
        console.table(x.coords);
        let n = "North", e = "East";
        if (x.coords.latitude < 0) { n = "South" }
        if (x.coords.longitude < 0) { e = "West" }
        document.querySelector(".lat").innerHTML = x.coords.latitude;
        document.querySelector(".lan").innerHTML = x.coords.longitude;
        document.querySelector(".acc").innerHTML = x.coords.accuracy;
    }, e => {
        console.warn(e.message);
        document.querySelector(".err").innerHTML = "permission denied";
    })
    console.log(id);

    document.querySelector(".stop").addEventListener("click", function () {
        navigator.geolocation.clearWatch(id);
        document.querySelector(".err").innerHTML = "location not watching";
    })
})
// ========================Cookies==========================================

// console.log(localStorage);
// console.log(sessionStorage);
// =============================dark & light mode =========================
document.querySelector(".mode input").addEventListener("change", function () {
    let x = this.checked;
    if (x) {
        document.querySelector("html").classList.add("dark");
    } else {

    }
})