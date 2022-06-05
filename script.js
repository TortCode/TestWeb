function request(url, handler) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE
            && req.status === 200)
            handler(req.responseText);
    };
    req.open("GET", url);
    req.send(null);
}

function load(page) {
    request('snippets/' + page + '.html', function(response) {
        document.getElementById("stage").innerHTML = response;
    });
}

window.addEventListener('DOMContentLoaded', function () {load('about_me')});