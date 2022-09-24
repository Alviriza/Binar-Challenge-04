const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

const app = new App();

function search() {
    app.clear();
    document.getElementById("tombol").style.visibility = "hidden";
    const element = document.getElementById("main");
    element.remove();
    document.getElementById("search").style.visibility = "visible";
  }

function activeBg() {
    document.getElementById("background").style.width = "100%";
}
function inactiveBg() {
    document.getElementById("background").style.width = "0";
}

function runSearch() {
    app.init().then(app.run);
  }
