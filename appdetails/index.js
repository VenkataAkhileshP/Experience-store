function loadApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('app');

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", `../${myParam}/index.html`, false);
    xmlhttp.send();
    document.getElementById("app-holder").innerHTML = xmlhttp.responseText;

}