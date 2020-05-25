$(".slickSlider").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});

let modal = document.getElementById("modal");
menuOpen = () => {
  modal.style.height = "100vh";
  modal.style.padding = "20px";
};
menuClose = () => {
  modal.style.height = "0";
  modal.style.padding = "0";
};
