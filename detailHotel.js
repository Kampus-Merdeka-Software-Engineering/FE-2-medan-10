const urlParams = new URLSearchParams(window.location.search);
const hotelId = (urlParams.get('id')); 
console.log('hotelId:', hotelId);


if (hotelId !== null) {
  fetch(`http://localhost:3001/hotel/${hotelId}`)
    .then(res => res.json())
    .then((hotel) => renderDataToContent([hotel]))
    .catch(error => console.error('Error fetching data:', error));
} else {
  console.error('ID hotel tidak ditemukan dalam URL.');
}

function renderDataToContent(hotels) {
  // get element content
  let content = document.getElementById("detail");
  let id = hotels.id;

  for (let hotel of hotels) {
      console.log(hotel);
      content.innerHTML += `
      <div class="sidehead">
      <div id="carouselExampleCaptions" class="carousel slide bg-light" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
              <img src=${hotel.image}  class="d-block w-100 gambar" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="sidebody htl">
      <div>
        <h2 class="text-uppercase"><a onclick="redirectToDetail(${id})">${hotel.name}</a></h2>
      </div>
      <div>
        <h6 class="text-muted"><a onclick="redirectToDetail(${id})">${hotel.location}</a></h4>
      </div>
      <div>
        <hr>
        <h5 class="pb-4 text-uppercase">Offered Amenities</h5>
        <div class="row feature">
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0l7 7m-19.9-.2l6.4-6.3M19 5l-7 7"/></svg>
            <h6 class="ps-3">Kitchen</h6>
          </div>
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"/><path d="M11 7.5v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2m-.5 5h.1A1.4 1.4 0 0 0 4 11.1V10m7.5 2.5h-.1a1.4 1.4 0 0 1-1.4-1.4V10m-3 3.5V10"/></g></svg>
            <h6 class="ps-3">Air Conditioner</h6>
          </div>
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="M10.5 18.5a5.5 5.5 0 0 1 10.865-1.218c-.264.276-.563.55-1.05.76c-.694.3-1.839.478-3.814-.016c-2.204-.55-3.69-.223-4.728.421a5.067 5.067 0 0 0-1.157 1.008l-.028.031a5.537 5.537 0 0 1-.088-.986ZM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Zm8.5 8a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15Zm-4.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM17 7h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Z"/></svg>
            <h6 class="ps-3">Washer</h6>
          </div>
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4l-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"/></svg>
            <h6 class="ps-3">Netflix on TV</h6>
          </div>
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M3.916 3.381a8.056 8.056 0 0 1 8.782 1.747a.75.75 0 1 0 1.06-1.06a9.556 9.556 0 0 0-13.517 0a.75.75 0 1 0 1.061 1.06a8.056 8.056 0 0 1 2.614-1.747ZM7 5.61a5.526 5.526 0 0 0-3.919 1.63a.75.75 0 0 1-1.064-1.058a7.027 7.027 0 0 1 9.966 0a.75.75 0 1 1-1.064 1.058A5.526 5.526 0 0 0 7 5.61Zm-.98 2.939a2.594 2.594 0 0 1 2.867.58a.75.75 0 1 0 1.075-1.047a4.094 4.094 0 0 0-5.866 0A.75.75 0 1 0 5.17 9.13c.242-.248.531-.446.85-.58Zm-.612 3.164a1.592 1.592 0 1 1 3.184 0a1.592 1.592 0 0 1-3.184 0Z" clip-rule="evenodd"/></svg>
            <h6 class="ps-3">Free Wi-Fi</h6>
          </div>
          <div class="col col-lg-5 mb-4 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M10 10v2H8v-2h2m6 2v-2h-2v2h2m5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1M7 16H5v4h2v-4m4 0H9v4h2v-4m0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08M13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14m2 2h-2v4h2v-4m4 0h-2v4h2v-4Z"/></svg>
            <h6 class="ps-3">Balcony or Patio</h6>
          </div>
        </div>
      </div>
    </div>`      
      id++;
  }
  
};