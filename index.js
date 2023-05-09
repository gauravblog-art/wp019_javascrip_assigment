  // Define the seating arrangement for each movie
  const movieSeats = {
    avengers: {
      totalSeats: 100,
      bookedSeats: [1, 5, 7, 20, 21, 22, 50, 51, 52, 80],
    },
    inception: {
      totalSeats: 80,
      bookedSeats: [3, 8, 10, 25, 30, 35, 40, 50],
    },
    joker: {
      totalSeats: 120,
      bookedSeats: [5, 10, 15, 20, 25, 30, 35, 40, 60, 70, 80, 90],
    },
    movie1: {
      totalSeats: 100,
      bookedSeats: [1, 5, 7, 20, 21, 22, 50, 51, 52, 80],
    },
    movie2: {
      totalSeats: 80,
      bookedSeats: [3, 8, 10, 25, 30, 35, 40, 50],
    },
    movie3: {
      totalSeats: 120,
      bookedSeats: [5, 10, 15, 20, 25, 30, 35, 40, 60, 70, 80, 90],
    },
    movie4: {
      totalSeats: 80,
      bookedSeats: [3, 8, 10, 25, 30, 35, 40, 50],
    },
    movie5: {
      totalSeats: 120,
      bookedSeats: [5, 10, 15, 20, 25, 30, 35, 40, 60, 70, 80, 90],
    },
  };
  
  // Generate the seating grid based on the selected movie
  function generateSeats() {
    const selectedMovie = document.getElementById("movie-list").value;
    const totalSeats = movieSeats[selectedMovie].totalSeats;
    const bookedSeats = movieSeats[selectedMovie].bookedSeats;
  
    const seatGrid = document.getElementById("seat-grid");
    seatGrid.innerHTML = "";
  
    for (let i = 1; i <= totalSeats; i++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      if (bookedSeats.includes(i)) {
        seat.classList.add("booked");
        seat.setAttribute("title", "Booked");
      } else {
        seat.addEventListener("click", function () {
          seat.classList.toggle("selected");
        });
      }
      seatGrid.appendChild(seat);
    }
  }
function validateForm() {
    var regID = document.getElementById("regID").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
  
    if (!regID.match(/[0-9]{2}[A-Z]{2}[0-9]{4}/)) {
      alert("Invalid Registration ID");
      return false;
    }
  
    if (/\d/.test(username)) {
      alert("Username should not have any digits");
      return false;
    }
  
    if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/)) {
      alert("Invalid Password");
      return false;
    }
  
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Invalid Email Address");
      return false;
    }
  
    if (!mobile.match(/[1-9]{1}[0-9]{9}/)) {
      alert("Invalid Mobile Number");
      return false;
    }
  
    if (!dob.match(/[0-9]{8}/)) {
      alert("Invalid Date of Birth");
      return false;
    }
  
    return true;
  }
  
// Get the form element
const form = document.querySelector('#booking-form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the selected seats
  const selectedSeats = document.querySelectorAll('.selected');

  // Check if at least one seat is selected
  if (selectedSeats.length === 0) {
    // Display an error message
    const error = document.querySelector('#error-message');
    error.style.display = 'block';
    return;
  }

  // Calculate the total price
  const price = selectedSeats.length * ticketPrice;

  // Display the total number of seats booked and the total price
  const totalSeats = document.querySelector('#total-seats');
  const totalPrice = document.querySelector('#total-price');
  totalSeats.innerHTML = selectedSeats.length;
  totalPrice.innerHTML = price;

  // Reset the form
  form.reset();
  seats.forEach((seat) => {
    seat.classList.remove('selected');
  });
});

// Add an event listener for seat clicks
seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    // Toggle the selected class
    seat.classList.toggle('selected');

    // Get the selected seats
    const selectedSeats = document.querySelectorAll('.selected');

    // Calculate the total price
    const price = selectedSeats.length * ticketPrice;

    // Display the total number of seats booked and the total price
    const totalSeats = document.querySelector('#total-seats');
    const totalPrice = document.querySelector('#total-price');
    totalSeats.innerHTML = selectedSeats.length;
    totalPrice.innerHTML = price;
  });
});


const userForm = document.getElementById('user-form');

// add a submit event listener to the form
userForm.addEventListener('submit', (event) => {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();
  
  // get the user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // redirect to another HTML page
  window.location.href = `file:///C:/Users/acer/Documents/Traning_worldline/javascript_assigment/showing.html?name=${name}&email=${email}&phone=${phone}`;
});
