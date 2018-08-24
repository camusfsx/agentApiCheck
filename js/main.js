window.onload = function () {
    var alertX = document.querySelector(`#alertX`);
    if ((!navigator.getUserMedia) && (!navigator.mediaDevices.getUserMedia)) {
        alertX.textContent = `no`;
    } else {
        alertX.textContent = `yes`;
    }
    alertX.textContent += navigator.userAgent;
}