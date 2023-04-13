let button = document.querySelector(".body__button");
let article = document.querySelector(".body__article");
let header = document.querySelector(".body__header__1");
let articleOne = document.querySelector(".body__article__1");
let headerOne = document.querySelector(".body__header__2");
let articleTwo = document.querySelector(".body__article__2");
let articleThree = document.querySelector(".body__article__3");
let articleFour = document.querySelector(".body__article__4");
let articleFive = document.querySelector(".body__article__5");

button.addEventListener("click", () => {
    article.innerText = "More like András István Arató. He's a very famous and main character of many memes with people who are trying hide their pain by forced smile."
    header.innerText = "Who is real Harold?"
    articleOne.innerText = "András is a Hungarian enqineer living in Budapest. He's married and have son. After his retire, some photographer saw him and proposed to him photo session that presented many casual professions like carpenter or lawyer"
    headerOne.innerText = "Transformation"
    articleTwo.innerText = "After few months, András discovered in web many funny pictures with his face."
    articleThree.innerText = "From the beginning, András didn't like it at all. He had a little hope that users will forget about him and his Harold. But it didn't happen that way. After all he accepted his role and started to used this for his own advantage."
    articleFour.innerText = "He started speaking on the events and festivals. Thanks to his fame, he worked as DJ in local broadcasting station for five years. Also in 2019 he became a face of Coca-cola on Hungary."
    articleFive.innerText = "He also performed in music video by Cloud 9+, to track called Hide the Pain"
});