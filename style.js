const firstTab = document.getElementById("firstTab");
const secondTab = document.getElementById("secondTab");
const thirdTab = document.getElementById("thirdTab");
const fourthTab = document.getElementById("fourthTab");

const tabs = [firstTab,secondTab,thirdTab,fourthTab];

tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        resetTabs();
        tab.classList.add("current");
        const contentId = tab.dataset.content;
        const content = document.getElementById(contentId);
        content.style.display = "block";
    });

});

const firstContent = document.getElementById("firstContent");
const secondContent = document.getElementById("secondContent");
const thirdContent = document.getElementById("thirdContent");
const fourthContent = document.getElementById("fourthContent");

function resetTabs() {

const contents = [firstContent, secondContent, thirdContent, fourthContent];

contents.forEach(function(content) {
    content.style.display = "none"; // Hide all content
});

tabs.forEach(function(tab) {
    tab.classList.remove("current"); //Remove active underline from all tabs
});

}