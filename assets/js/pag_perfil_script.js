function showDiv(div) {
    document.getElementById(`${div}`).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideDiv(div) {
    document.getElementById(`${div}`).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function createCommunity() {
    showDiv("createcommunity-feedback-modal")
}

function avanceBtn() {
    showDiv("createcommunity-modal2")
}

function newCommunity() {
    showDiv("createcommunity-modal")
}

function editDataBtn() {
    showDiv("editdata-modal");
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
    hideDiv("editdata-modal");
    hideDiv("createcommunity-modal")
    hideDiv("createcommunity-modal2")
    hideDiv("createcommunity-feedback-modal")
}

function previousDiv() {
    hideDiv("createcommunity-modal2")
    showDiv("overlay")
}