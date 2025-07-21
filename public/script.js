let fullscr = document.querySelector(".fullscr")

let menu = document.querySelector(".menu")
let menuborder = document.getElementById("menuborder")


let flag = 0

menu.addEventListener("click", function () {
    if (flag === 0) {
        fullscr.style.top = "0%"; // Show the fullscreen menu
        flag = 1;
        menu.style.color = "white"
        menuborder.style.borderColor=  "white"
    } else {
        fullscr.style.top = "-100%"; // Hide the fullscreen menu
        flag = 0;
        menu.style.color = "white"
        menuborder.style.borderColor =  "white"
    }
});


let button1 = document.querySelector("#b1")


document.getElementById('infoForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    

    const data = { name, number ,address , date , time ,people};

    try {
        const response = await fetch('http://localhost:3000/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Information saved successfully!');
        } else {
            alert('Failed to save information.');
        }
    } 
    catch (error) {
        alert('Error: ' + error.message);
    }
});
