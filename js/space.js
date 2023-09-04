document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('container');
    let dataArray = [];

    document.getElementById("btnBuscar").addEventListener("click", function(){
        let nombre = document.getElementById('inputBuscar').value;

    fetch('https://images-api.nasa.gov/search?q='+nombre)
    .then(response => response.json())
    .then(data => {
        dataArray = data.collection.items;
        showData(dataArray);
    })
    });

    function showData(dataArray) {
        container.innerHTML = "";
        for (const item of dataArray) {
          container.innerHTML += `<div class="list-group-item list-group-item-action cursor-active">
          <div class="row">
              <div class="col-3">
                  <img src="${item.links[0].href}" alt="${item.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${item.data[0].title}</h4>
                  </div>    
                  <p class="mb-1">${item.data[0].description}</p>
              </div>
          </div>
      </div>`;
        }
      }
});

