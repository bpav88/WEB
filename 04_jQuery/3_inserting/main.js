var images = ["https://via.placeholder.com/350/fff", "https://via.placeholder.com/350", "https://via.placeholder.com/350", "https://via.placeholder.com/350", "https://via.placeholder.com/350", "https://via.placeholder.com/350"];

var $body = $("body");

function addImg() {
    for (var i = 0; i < images.length; i++) {
        var img = $("<img src='" + images[i] + "'>");
        $body.append(img);
    }
}

addImg();