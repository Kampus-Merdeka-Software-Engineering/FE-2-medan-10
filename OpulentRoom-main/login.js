document.querySelector("userForm")
.addEventListener("submit", postLogin);

function postLogin (event){
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;



    //simpan ke dalam object js
    const data = {
        name:name,
        email:email,
        password:password
    };

    //post ke BE
    fetch('http://localhost:3001/users',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        form.reset();
        alert(data.message);
    });
}







