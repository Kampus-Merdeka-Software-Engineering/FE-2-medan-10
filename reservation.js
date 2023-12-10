document.getElementById("paymentForm").addEventListener("submit", postPayment);


function postPayment (event){
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const address = form.querySelector('input[name="address"]').value;
    const phone_number = form.querySelector('input[name="phone_number"]').value;
    const description = form.querySelector('input[name="description"]').value;
    const coupon = form.querySelector('input[name="coupon"]').value;
    const bank = form.querySelector('select[name="bank"]').value;

    //simpan ke dalam object js
    const data = {
        name:name,
        email:email,
        address:address,
        phone_number:phone_number,
        description:description,
        coupon:coupon,
        bank:bank
    };
    console.log(data);

    //post ke BE
    fetch('http://localhost:3001/payments',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        const message = data.message || 'Your Hotel is Successfully Booked'
        form.reset();
        window.location.href = "home.html";
        alert("Your Hotel is Successfully Booked");
    });

}