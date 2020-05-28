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