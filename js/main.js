function requestDataOne() {
  let xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let articles = JSON.parse(this.responseText);
      showData(articles.articles);
    }
  };
  xHttp.open("GET", "https://saurav.tech/NewsAPI/everything/cnn.json", false);
  xHttp.send();
}

function requestDataTwo() {
  let xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let articles = JSON.parse(this.responseText);
      data(articles.articles);
    }
  };
  xHttp.open(
    "GET",
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json",
    false
  );
  xHttp.send();
}

function data(articles) {
  let row = document.querySelector(".rowTwo");
  let content = "";
  articles.forEach(function (article) {
    content += `
            <div class='col-md-6 col-12 my-4 '>
                <div data-aos="zoom-in">
                  <a href='${article.url}'>
                  <div class="card text-bg-dark text-dark">
  <img src="${article.urlToImage}" class="card-img h-100" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title fs-2">${article.title}</h5>
    <p class="card-text fs-4">${article.description}.</p>
    <p class="card-text fs-5"><small>${article.publishedAt}</small></p>
  </div>
</div></a>
                </div>
            </div>
        `;
  });
  row.innerHTML = content;
}


function showData(articles) {
  let row = document.querySelector(".rowOne");
  let content = "";
  articles.forEach(function (article) {
    content += `
            <div class='col-lg-3 col-md-4 col-12 my-4 '>
                <div data-aos="zoom-in">
                    <div class="card mx-auto shadow-lg" style="width: 18rem;">
                        <img src="${article.urlToImage}" class="card-img-top" alt="Article image">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <p class="card-text text-secondary">author: ${article.author}</p>
                            <p class="card-text text-danger">${article.publishedAt}</p>
                            <a href="${article.url}" class="btn btn-outline-secondary" target="_blank">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  row.innerHTML = content;

  
}

window.onload = function () {
    requestDataOne();
    requestDataTwo();
    AOS.init();
};

