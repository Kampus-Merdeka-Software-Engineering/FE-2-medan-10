fetch("http://localhost:3001/hotel")
.then(res => res.json())
.then(data => renderDataToContent(data));

function renderDataToContent(hotels) {
    // get element content
    let content = document.getElementById("content");
    let id = 1;
  
    for (let hotel of hotels) {
        console.log(hotel);
        content.innerHTML += `
    

        <div class="custom-col col-lg-4 my-3" id=${id} >
          <div class="costum-card card border-0 shadow">
           <img src=${hotel.image} alt="..." class="card-img-top">
            <div class="card-body">
             <h4 class="card-title text-center"><a onclick="redirectToDetail(${id})">${hotel.name}</a></h4>
             <h6 class=" text-center"><a onclick="redirectToDetail(${id})">${hotel.location}</a></h6>
             <div class="features text-center">
              <span class="badge rounded-pill bg-light fs-5">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </span>
            </div>
           </div>
           <div class="d-flex">
            <p class="harga text-center">From <br><span>Rp. <a onclick="redirectToDetail(${id})">${hotel.price}</a></span><br> per night</p>
            <a href="http://localhost/opulent/OpulentRoom-main/detailHotel.html?id=${id}" class="btn btnhtls">More Details</a>
          </div>
         </div>
      </div>`       
        id++;
    }
    
};

