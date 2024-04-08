// Function to validate the form fields
function validateForm() {
    var checkInDate = document.getElementById("checkIn").value;
    var checkOutDate = document.getElementById("checkOut").value;
    var adultCount = document.getElementById("adult").value;
    var childrenCount = document.getElementById("children").value;
    var roomsCount = document.getElementById("rooms").value;

    // Check if any of the fields are empty
    if (checkInDate === "" || checkOutDate === "" || adultCount === "" || childrenCount === "" || roomsCount === "") {
        alert("Please fill in all fields");
        return false;
    }
    // Check if the check-in date is after the check-out date
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert("Check-out date must be after check-in date");
        return false;
    }
    // If all validations pass, return true
    return true;
}

// Function to handle form submission
function submitForm() {
    if (validateForm()) {
        // If form is valid, submit the form data
        // Example: You can send the form data to the server using AJAX
        alert("Form submitted successfully!");
    }
}

// Event listener for form submission
document.getElementById("checkNowBtn").addEventListener("click", submitForm);

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
