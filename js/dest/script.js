// booking classic rooms

$(function() {

  // create classic rooms array

  var roomsClassic = [];
  var roomsBookedClassic = [];

  // create classsic rooms constructor

  function RoomClassic(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add classic rooms

  roomsClassic.push(new RoomClassic(
    'Classic Room 301',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 302',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 303',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 304',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 305',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 306',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 307',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'booked',
    'John Grisom'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 308',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'booked',
    'Ally Watterfall'));

  // total classic rooms

  var totalRooms = roomsClassic.length;

  // create a function that will add classic rooms on website

  function showRoomsClassic() {
    $('.section-rooms-classic .available').html('');
    $('.section-rooms-classic .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsClassic[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsClassic[i].title + '</h3>' +
            roomsClassic[i].image +
            '<h4 class="section-rooms__heading">' + roomsClassic[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsClassic[i].text + '</p>' +
            '<button class="section-rooms__button" type="button">Book now</button>' +
          '</li>');

        availableRoom.attr('id', i)
        $('.section-rooms-classic .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsClassic[i].title + '</h3>' +
            roomsClassic[i].image +
            '<h4 class="section-rooms__heading">' + roomsClassic[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsClassic[i].text + '</p>' +
            '<h3 class="section-rooms__heading">Booked by ' + roomsClassic[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('.section-rooms-classic .booked').append(bookedRoom);

        roomsBookedClassic.push(roomsClassic[i]);
      }
    }
  }

  showRoomsClassic();

  // click on the book button to show the modal window

  $('.section-rooms-classic .available .section-rooms__button').click(function() {
    var number = $(this).closest('.section-rooms__item').attr('id');

    $('.section-rooms-classic .section-rooms__modal-window').fadeIn();
    $('.section-rooms-classic .section-rooms__modal-number').text(number).fadeOut();

    return number;
  });

  // click on the modal button to book room

  $('.section-rooms-classic .section-rooms__modal-form').submit(function(e) {
    e.preventDefault();

    var number = $('.section-rooms-classic .section-rooms__modal-number').text();
    var name = $('.section-rooms-classic .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('.section-rooms-classic .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('.section-rooms-classic .section-rooms__modal-input').val('');
      $('.section-rooms-classic .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('.section-rooms-classic .section-rooms__modal-close').click(function() {
    $('.section-rooms-classic .section-rooms__modal-window').fadeOut('slow');
  });
});

// booking deluxe rooms

$(function() {

  // create deluxe rooms array

  var roomsDeluxe = [];
  var roomsBookedDeluxe = [];

  // create new deluxe rooms constructor

  function RoomDeluxe(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add deluxe rooms

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 701',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 702',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 703',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'booked',
    'Jackie Hunt'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 704',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'booked',
    'Nick Colton'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 705',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 706',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 707',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 708',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  // total deluxe rooms

  var totalRooms = roomsDeluxe.length;

  // create a function that will add deluxe rooms on website

  function showRoomsDeluxe() {
    $('.section-rooms-deluxe .available').html('');
    $('.section-rooms-deluxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsDeluxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<button class="section-rooms__button" type="button">Book now</button>' +
          '</li>');

        availableRoom.attr('id', i)
        $('.section-rooms-deluxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<h3 class="section-rooms__heading">Booked by ' + roomsDeluxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('.section-rooms-deluxe .booked').append(bookedRoom);

        roomsBookedDeluxe.push(roomsDeluxe[i]);
      }
    }
  }

  showRoomsDeluxe();

  // click on the book button to show the modal window

  $('.section-rooms-deluxe .available .section-rooms__button').click(function() {
    var number = $(this).closest('.section-rooms__item').attr('id');

    $('.section-rooms-deluxe .section-rooms__modal-window').fadeIn();
    $('.section-rooms-deluxe .section-rooms__modal-number').text(number).fadeOut();

    return number;
  });

  // click on the modal button to book room

  $('.section-rooms-deluxe .section-rooms__modal-form').submit(function(e) {
    e.preventDefault();

    var number = $('.section-rooms-deluxe .section-rooms__modal-number').text();
    var name = $('.section-rooms-deluxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('.section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('.section-rooms-deluxe .section-rooms__modal-input').val('');
      $('.section-rooms-deluxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('.section-rooms-deluxe .section-rooms__modal-close').click(function() {
    $('.section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');
  });
});

// booking luxe rooms

$(function() {

  // create luxe rooms array

  var roomsLuxe = [];
  var roomsBookedLuxe = [];

  // create luxe rooms constructor

  function RoomLuxe(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add luxe rooms

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 501',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 502',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 503',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 504',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 505',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'booked',
    'Mike Bolton'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 506',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'booked',
    'Katie Bowman'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 507',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 508',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  // total luxe rooms

  var totalRooms = roomsLuxe.length;

  // create a function that will add luxe rooms on website

  function showRoomsLuxe() {
    $('.section-rooms-luxe .available').html('');
    $('.section-rooms-luxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsLuxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<button class="section-rooms__button" type="button">Book now</button>' +
          '</li>');

        availableRoom.attr('id', i)
        $('.section-rooms-luxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<h3 class="section-rooms__heading">Booked by ' + roomsLuxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('.section-rooms-luxe .booked').append(bookedRoom);

        roomsBookedLuxe.push(roomsLuxe[i]);
      }
    }
  }

  showRoomsLuxe();

  // click on the book button to show the modal window

  $('.section-rooms-luxe .available .section-rooms__button').click(function() {
    var number = $(this).closest('.section-rooms__item').attr('id');

    $('.section-rooms-luxe .section-rooms__modal-window').fadeIn();
    $('.section-rooms-luxe .section-rooms__modal-number').text(number).fadeOut();

    return number;
  });

  // click on the modal button to book room

  $('.section-rooms-luxe .section-rooms__modal-form').submit(function(e) {
    e.preventDefault();

    var number = $('.section-rooms-luxe .section-rooms__modal-number').text();
    var name = $('.section-rooms-luxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('.section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('.section-rooms-luxe .section-rooms__modal-input').val('');
      $('.section-rooms-luxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('.section-rooms-luxe .section-rooms__modal-close').click(function() {
    $('.section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');
  });
});

// filter

$(function() {
  var filterAll = $('.section-rooms__filter-all');
  var filterAvailable = $('.section-rooms__filter-available');
  var filterBooked = $('.section-rooms__filter-booked');
  var titleAvailable = $('.section-rooms__title-available');
  var listAvailable = $('.section-rooms__list.available');
  var titleBooked = $('.section-rooms__title-booked');
  var listBooked = $('.section-rooms__list.booked');

  // click on the all button to show all rooms

  filterAll.click(function() {
    $(this).addClass('filter-active');
    filterAvailable.removeClass('filter-active');
    filterBooked.removeClass('filter-active');
    titleAvailable.fadeIn();
    listAvailable.fadeIn();
    titleBooked.fadeIn();
    listBooked.fadeIn();
  });

  // click on the available button to show available rooms

  filterAvailable.click(function() {
    $(this).addClass('filter-active');
    filterAll.removeClass('filter-active');
    filterBooked.removeClass('filter-active');
    titleAvailable.fadeIn();
    listAvailable.fadeIn();
    titleBooked.fadeOut();
    listBooked.fadeOut();
  });

// click on the booked button to show booked rooms

  filterBooked.click(function() {
    $(this).addClass('filter-active');
    filterAll.removeClass('filter-active');
    filterAvailable.removeClass('filter-active');
    titleAvailable.fadeOut();
    listAvailable.fadeOut();
    titleBooked.fadeIn();
    listBooked.fadeIn();
  });
});

// gallery

$(function() {
  var galleryButton = $('.section-gallery__button');
  var galleryWindow = $('.section-gallery__modal-window');
  var galleryClose = $('.section-gallery__modal-close');

  // click on the image to show the modal window

  galleryButton.click(function() {
    $(this).siblings(galleryWindow).fadeIn();
  });

  // click on the close button to close the modal window

  galleryClose.click(function() {
    galleryWindow.fadeOut();
  });
});

// map

function initMap() {

  // create coordinates

  var myLatLng = {
    lat: 51.5181829,
    lng: -0.1519262
  };

  // create the map

  var map = new google.maps.Map(document.querySelector('.section-contact__map'), {
    zoom: 16,
    center: myLatLng
  });

  // create the marker on the map

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

// menu for mobile and tablet

var modalButton = document.querySelector('.header-menu__button');
var modalWindow = document.querySelector('.header-menu__modal-window');
var modalClose = document.querySelector('.header-menu__modal-close');

// click on the menu button to show the modal window

modalButton.onclick = function() {
  modalWindow.style.display = 'block';
}

// click on the close button to close the modal window

modalClose.onclick = function() {
  modalWindow.style.display = 'none';
}

// share

var facebookShare = document.querySelector('.facebook-share');
var twitterShare = document.querySelector('.twitter-share');
var googleShare = document.querySelector('.google-share');

// click on the button to show new window for facebook share

facebookShare.onclick = function() {
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?url=' + document.URL);

  if (facebookWindow.focus) {
    facebookWindow.focus();
  }

  return false;
}

// click on the button to show new window for twitter share

twitterShare.onclick = function() {
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL);

  if (twitterWindow.focus) {
    twitterWindow.focus();
  }

  return false;
}

// click on the button to show new window for google+ share

googleShare.onclick = function() {
  var googleWindow = window.open('https://plus.google.com/share?url=' + document.URL);

  if (googleWindow.focus) {
    googleWindow.focus();
  }

  return false;
}

// slider

$(function() {
  $('.header-slider__list').slick({
    autoplay: true,
    prevArrow: $('.header-slider__item-prev'),
    nextArrow: $('.header-slider__item-next')
  });
});
