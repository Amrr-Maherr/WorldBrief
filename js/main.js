function requestData() {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articles = JSON.parse(this.responseText);
            showData(articles.articles)
        }
    }
    xHttp.open("get", "https://saurav.tech/NewsAPI/everything/cnn.json", false);
    xHttp.send()
}


function showData(articles) {
    let row = document.querySelector('.row');
    let content = ''
    articles.forEach(function (article) {
        content += `
        <div class='col-lg-3 col-md-4 col-12 my-4'>
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${article.urlToImage}" class="card-img-top" alt="Article image">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <p class="card-text text-secondary">author : ${article.author}</p>
                    <p class="card-text text-danger">${article.publishedAt}</p>
                    <a href="${article.url}" class="btn btn-outline-secondary" target="_blank">Read Full Article</a>
                </div>
            </div>
        </div>
        `;
    })
    row.innerHTML = content
}


this.onload = function () {
    requestData();
}