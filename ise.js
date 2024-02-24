let accessKey = "oCiIIJ0iTHqYswiDz57Uq55Rlxtufnvud-GsG4XxE0g";

let searchForm = document.querySelector("#search-form");
let searchBox = document.querySelector("#search-box");
let searchResult= document.querySelector(".search-result");
let showMoreBtn = document.querySelector("#show-more-btn");
let keyword = " ";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
const data = await response.json();
let results= data.results;

if(page ===  1){
    searchResult.innerHTML = " ";
}

results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;

    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);


})
showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=> {
    page++;
    searchImages();
})


