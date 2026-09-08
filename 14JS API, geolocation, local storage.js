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
        localStorage.setItem("mode", "dark")
    } else {
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("mode", "light")
    }
});
if (localStorage.getItem("mode") == "dark") {
    document.querySelector(".mode input").checked = true;
    document.querySelector("html").classList.add("dark");
}
// =============================Canvas=============================
const c1=document.querySelector("canvas");
const ctx=c1.getContext("2d");

ctx.moveTo(0,0);
ctx.lineTo(300,200);
ctx.lineTo(350,50);
ctx.lineTo(50,50);
ctx.stroke();
ctx.fillStyle="pink"
ctx.fill();

// ctx.arc(c1.width/2,c1.height/2,c1.width/3,0,Math.PI);
// ==========================CHarts===================
const ctxy = document.querySelector('.chart1');
const ctxz = document.querySelector('.chart2');

  new Chart(ctxy, {
    type: 'pie',
    data: {
      labels: ['Jan', 'feb', 'mar', 'apr', 'may', 'june'],
      datasets: [{
        label: 'sales report 2025',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 new Chart(ctxz, {
    type: 'bar',
    data: {
      labels: ['Jan', 'feb', 'mar', 'apr', 'may', 'june'],
      datasets: [{
        label: 'sales report 2025',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
