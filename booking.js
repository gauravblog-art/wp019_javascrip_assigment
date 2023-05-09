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
