path_array = window.location.pathname.split('/');
path = path_array[path_array.length - 1];
path = path.replace("page", "");
path = path.replace(".html", "");
prev_path = "page" + (parseInt(path) - 1) + ".html";
next_path = "page" + (parseInt(path) + 1) + ".html";
console.log(next_path);

function prev() {
    top.location.href = prev_path;
}
function next() {
    top.location.href = next_path;
}
