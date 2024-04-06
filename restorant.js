$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ["<i class = 'fa fa-chevron-left'></i>","<i class = 'fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            margin: 10,
        },
        1000: {
            items: 3
        }
    }
})


  document.getElementById("submitButton").addEventListener("click", function() {
  var email = document.getElementById("emailInput").value;
  console.log("Email submitted:", email);
  document.getElementById("emailInput").value = "";
});
