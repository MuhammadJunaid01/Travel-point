document.getElementById('search-icon').addEventListener('click', function () {
    const searchInputDisplay = document.getElementById('searche-input');
    searchInputDisplay.style.display = 'block';
    document.getElementById('search-icon').style.display = 'none';
});


document.getElementById('destination').addEventListener('click', function () {
    const destiUl = document.getElementById('desti-ul');
    const destination = document.getElementById('destination');
    const destinationValue = destination.value;
    console.log(destinationValue)
    destiUl.style.display = 'block'
    document.getElementById('item1').addEventListener('click', function () {
        const item1 = document.getElementById('item1');
        const itemText = item1.innerText;
        destiUl.style.display = 'none';

        destination.value = itemText
    })
    document.getElementById('item2').addEventListener('click', function () {
        const item1 = document.getElementById('item2');
        const itemText = item1.innerText;
        destiUl.style.display = 'none';

        destination.value = itemText;
    })
    document.getElementById('item3').addEventListener('click', function () {
        const item3 = document.getElementById('item3');
        const itemText = item3.innerText;
        destiUl.style.display = 'none';
        destination.value = itemText
    })
    document.getElementById('item4').addEventListener('click', function () {
        const item4 = document.getElementById('item4');
        const itemText = item4.innerText;
        destiUl.style.display = 'none';
        destination.value = itemText
    })
    document.getElementById('item5').addEventListener('click', function () {
        const item5 = document.getElementById('item5');
        const itemText = item5.innerText;
        destiUl.style.display = 'none';
        destination.value = itemText
    })

});

const submit = () => {
    const destination = document.getElementById('destination');
    const destinationValue = destination.value;
    const stayHotel = document.getElementById('stay');
    const stayHotelValue = stayHotel.value;
    const childern = document.getElementById('Childern');
    const childernValue = childern.value;
    const roomType = document.getElementById('room-type');
    const roomTypeValue = roomType.value;
    // target table id
    const hotelFee = document.getElementById('hotel-fee');
    const carFee = document.getElementById('Car-fees');
    const guidefee = document.getElementById('guide-fee');
    const costTable = document.getElementById('price-table');
    costTable.style.display = 'block'


    if (destination) {
        if (destinationValue === 'Dhaka') {
            carFee.innerText = 5000;
        } else if (destinationValue === 'Khulna') {
            carFee.innerText = 6400;
        } else if (destinationValue === 'Barishal') {
            carFee.innerText = 8900;
        } else if (destinationValue === 'Rajshahi') {
            carFee.innerText = 9300;

        } else if (destinationValue === 'Jessore') {
            carFee.innerText = 10300;

        }
    }

    if (stayHotelValue <= '') {

    }
    else if (stayHotelValue <= '1') {
        hotelFee.innerText = 1150

        guidefee.innerText = 1000;
    }
    else if (stayHotelValue <= '2') {
        hotelFee.innerText = 1150 * 2;
        guidefee.innerText = 1000 * 2;
    }
    else if (stayHotelValue <= '3') {
        hotelFee.innerText = 1150 * 3;
        guidefee.innerText = 1000 * 3;
    }
    else if (stayHotelValue <= '4') {
        hotelFee.innerText = 1150 * 4;
        guidefee.innerText = 1000 * 4;

    }
    else if (stayHotelValue <= '5') {
        hotelFee.innerText = 1150 * 5;
        guidefee.innerText = 1000 * 5;

    }
    else if (stayHotelValue <= '6') {
        hotelFee.innerText = 1150 * 6;
        guidefee.innerText = 1000 * 6;

    }
    else if (stayHotelValue <= '7') {
        hotelFee.innerText = 1150 * 7;
        guidefee.innerText = 1000 * 8;


    }
    // start adult condition


    // start childern condition
    if (childernValue === '') {

    }
    else if (childernValue <= '1') {
        // n000
    }
    else if (childernValue <= '2') {
        // noo fee 
    }
    else if (childernValue <= '3') {
        // noo fee
    }
    else if (childernValue < 5) {
        hotelFee.innerText = hotelFee.innerText + 500;
        console.log('passssssssssss')

    }
    // start room type condition
    if (roomTypeValue === '') {

    }
    else if (roomTypeValue === 'Single') {
        hotelFee.innerText = 1150 * stayHotelValue;

    }
    else if (roomTypeValue === 'Double') {
        hotelFee.innerText = 1950 * stayHotelValue;
        console.log('double vale')

    }
    else if (roomTypeValue === 'Triple') {
        hotelFee.innerText = 2750 * stayHotelValue;
        console.log('tripple vale')

    }

    const totalAmount = document.getElementById('total');
    const addition = parseInt(carFee.innerText) + parseInt(guidefee.innerText) + parseInt(hotelFee.innerText);
    totalAmount.innerText = addition;
};
// type off rooms
document.getElementById('room-type').addEventListener('click', function () {
    const rooms = document.getElementById('room');
    const rooType = document.getElementById('room-type');
    rooms.style.display = 'block'
    document.getElementById('single').addEventListener('click', function () {
        const single = document.getElementById('single');
        rooType.value = single.innerText;
        rooms.style.display = 'none';
    })
    document.getElementById('Double').addEventListener('click', function () {
        const Double = document.getElementById('Double');
        rooType.value = Double.innerText;
        rooms.style.display = 'none';
    })
    document.getElementById('Triple').addEventListener('click', function () {
        const Triple = document.getElementById('Triple');
        rooType.value = Triple.innerText;
        rooms.style.display = 'none';
    })

});
// start tour card1 
document.getElementById('tour-icon1').addEventListener('click', function () {
    const tourIcon = document.getElementById('tour-icon1');
    tourIcon.style.color = 'gold';
    document.getElementById('tour-icon2').addEventListener('click', function () {
        const tourIcon2 = document.getElementById('tour-icon2');
        tourIcon2.style.color = 'gold';
    })

    document.getElementById('tour-icon3').addEventListener('click', function () {
        const tourIcon3 = document.getElementById('tour-icon3');
        tourIcon3.style.color = 'rgba(255, 217, 0, 0.82)';
    })
    document.getElementById('tour-icon4').addEventListener('click', function () {
        const tourIcon4 = document.getElementById('tour-icon4');
        tourIcon4.style.color = 'rgba(255, 217, 0, 0.582)';
    })

    // const tourIcon3 = document.getElementById('tour-icon3');
    // tourIcon3.style.color = 'gold';
    // const tourIcon4 = document.getElementById('tour-icon4');
    // tourIcon4.style.color = 'gold';
    // const tourIcon5 = document.getElementById('tour-icon5');
    // tourIcon5.style.color = 'gold';
})
// start tour card2 

document.getElementById('card2-1').addEventListener('click', function () {
    const tourIconc = document.getElementById('card2-1');
    tourIconc.style.color = 'gold';
    document.getElementById('card2-2').addEventListener('click', function () {
        const tourIcon2c = document.getElementById('card2-2');
        tourIcon2c.style.color = 'gold';
    })

    document.getElementById('card2-3').addEventListener('click', function () {
        const tourIcon3c = document.getElementById('card2-3');
        tourIcon3c.style.color = 'rgba(255, 217, 0, 0.82)';
    })
    document.getElementById('card2-4').addEventListener('click', function () {
        const tourIcon4c = document.getElementById('card2-4');
        tourIcon4c.style.color = 'rgba(255, 217, 0, 0.582)';
    })


});
// startcard 3
document.getElementById('tour-icon1-c3').addEventListener('click', function () {
    const tourIcon = document.getElementById('tour-icon1-c3');
    tourIcon.style.color = 'gold';
    document.getElementById('tour-icon2-c3').addEventListener('click', function () {
        const tourIcon2 = document.getElementById('tour-icon2-c3');
        tourIcon2.style.color = 'gold';
    })

    document.getElementById('tour-icon3-c3').addEventListener('click', function () {
        const tourIcon3 = document.getElementById('tour-icon3-c3');
        tourIcon3.style.color = 'rgba(255, 217, 0, 0.82)';
    })
    document.getElementById('tour-icon4-c3').addEventListener('click', function () {
        const tourIcon4 = document.getElementById('tour-icon4-c3');
        tourIcon4.style.color = 'rgba(255, 217, 0, 0.582)';
    })

});

const seeMore = () => {
    const moreInfo = document.getElementById('see-more');
    moreInfo.style.display = 'block'
};
const hotel = () => {

}
