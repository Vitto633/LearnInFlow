function showDiv(div) {
    document.getElementById(`${div}`).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideDiv(div) {
    document.getElementById(`${div}`).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function newPostBtn() {
    showDiv("newpost-modal");
}

function postBtn() {
    showDiv("newpost-feedback-modal")
}

function cancelBtn() {
    hideDiv("newpost-modal");
    hideDiv("newpost-feedback-modal");
}