// Function to request data from the server
function requestDataOne() {
  // Create a new XMLHttpRequest object
  let xHttp = new XMLHttpRequest();
  
  // Define a function to handle changes in the request's state
  xHttp.onreadystatechange = function () {
    // Check if the request is complete and successful
    if (this.readyState == 4 && this.status == 200) {
      // Parse the JSON response from the server
      let articles = JSON.parse(this.responseText);
      // Call the showData function with the articles data
      showData(articles.articles);
    }
  };
  
  // Initialize a GET request to the specified URL (synchronous request)
  xHttp.open("GET", "https://saurav.tech/NewsAPI/everything/cnn.json", false);
  
  // Send the request to the server
  xHttp.send();
}


function requestDataTwo() {
  // Create a new XMLHttpRequest object to handle the request
  let xHttp = new XMLHttpRequest();
  
  // Define the function to be called whenever the state of the request changes
  xHttp.onreadystatechange = function () {
    // Check if the request is complete and successful
    if (this.readyState == 4 && this.status == 200) {
      // Parse the JSON response to a JavaScript object
      let articles = JSON.parse(this.responseText);
      
      // Call the data function and pass the articles array to it
      data(articles.articles);
    }
  };
  
  // Initialize the request with the GET method to retrieve data from the provided URL
  xHttp.open(
    "GET",
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json",
    false
  );
  
  // Send the request
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

