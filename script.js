function showBooking(){
    table.hidden = !table.hidden;
}

function bookNow(){
    booking.name = nameInput.value;
    booking.email = emailInput.value;
    booking.phone = phoneInput.value;
    booking.people = peopleInput.value;
    booking.date = dateInput.value;
    booking.time = timeInput.value;
    clients.push(booking);
    //console.log(clients);
    render(clients);
}

function render(array){

    table = document.getElementById('table');
    elements = document.querySelectorAll(".booking-table-element");
    clearTable(elements);

    array.forEach(element => {
        let div = document.createElement('div');
        div.setAttribute('class', 'booking-table-element');
        div.innerText = `${element.name} ${element.email} ${element.phone} ${element.people} ${element.date} ${element.time}`;   
        table.append(div);

    });
}

function clearTable(nodeList){
    nodeList.forEach(element => {
        element.remove();
    });
}

let clients = [];

let booking = { 
}