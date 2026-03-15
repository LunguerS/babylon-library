const chars = "abcdefghijklmnopqrstuvwxyz .,!?";
function generatePage(seed, length = 3200) {
    let text = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.abs(Math.sin(seed + i)) * chars.length);
        text += chars[index];
    }
    return text;
}
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}
function showPage(text) {
    document.getElementById("bookContent").innerText = text;
}
document.getElementById("searchBtn").onclick = () => {
    const query = document.getElementById("query").value;
    if(query) {
        showPage(generatePage(hashCode(query)));
    }
};
document.getElementById("randomBtn").onclick = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    showPage(generatePage(randomSeed));
};
