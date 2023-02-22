let telegram_bot_id = "5436291698:AAGLEAAPXn9yIKvuX_J7rgYkx_YIdGcKINA";
let chat_id = 1995580819;
let name, subject, message, phone;
let ready = function () {
    name = document.getElementById("name").value;
    subject = document.getElementById("subject").value;
    phone = document.getElementById("phone").value;
    message = "\nTo'liq ism:" + name + "\nFan nomi:" + subject + "\nTelefon raqam:" + phone;
};
function sendmessage() {
    event.preventDefault();
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        playOn()
        // console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("phone").value = "";
    return false;
};
let playOn = () => new Audio("on.mp3").play();