fetch("http://localhost:3001/hotel")
.then(res => res.json())
.then((data) => renderDataToContent(data.slice(0, 3)));;

function renderDataToContent(home) {
    // get element content
    let content = document.getElementById("homeContent");
    let id = 1;
  
    for (let hotel of home) {
        console.log(hotel);
        content.innerHTML += `
    
      <div class="col-lg-4 col-md-6 my-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" id=${id} >
        <div class="card border-0 shadow" style="max-width: 350px; margin: auto;">
          <img src=${hotel.image}  class="card-img-top" alt="..." style="width: 100%; height: 200px;">
          <div class="card-body">
            <h5 class="card-title"><a onclick="redirectToDetail(${id})">${hotel.name}</a></h5>
            <h6 class="mb-4">Rp.<a onclick="redirectToDetail(${id})">${hotel.price}</a> per night </h6>
            <div class="features mb-4">
              <h6 class="mb-1">Features</h6>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                2 Rooms
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                1 Bathroom
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                1 Balcony
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                3 Sofa
              </span>
            </div>
            <div class="Facilities mb-4">
              <h6 class="mb-1">Facilities</h6>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                Wifi
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                Television
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                AC
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                Room Heater
              </span>
            </div>
            <div class="guests mb-4">
              <h6 class="mb-1">Guests</h6>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                5 Adults
              </span>
              <span class="badge rounded-pill bg-light text-dark text-wrap">
                4 Children
              </span>
            </div>	
            <div class="rating mb-4">
              <h6 class="mb-1">Rating</h6>
              <span class="badge rounded-pill bg-light">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </span>
            </div>
            <div class="d-flex justify-content-end mb-2">
              <a href="http://localhost/opulent/OpulentRoom-main/detailHotel.html?id=${id}" class="btn btn-sm btn-outline-dark shadow-none btndetails">More details</a>
            </div>
          </div>
        </div>
      </div>`      
        id++;
    }
    
};