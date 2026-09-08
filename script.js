
document.addEventListener("DOMContentLoaded", function () {
/*
     * =====================================================
     * PRODUCT IMAGES
     * =====================================================
     *
     * Upload your pictures to the ROOT of the repository.
     *
     * Rename them exactly like this:
     *
     * cleaning-1.jpg
     * cleaning-2.jpg
     * cleaning-3.jpg
     * cleaning-4.jpg
     * cleaning-5.jpg
     * cleaning-6.jpg
     * cleaning-7.jpg
     *
     * car-wash-and-wax.jpg
     * car-tyre-silicone.jpg
     * car-air-freshener.jpg
     *
     * You can use .png instead, but then change the
     * filenames below to .png.
     */

          const products = {

        cleaning: [

            {
                name: "Pine Gel",
                image: "cleaning-1.png"
            },

            {
                name: "Bleach",
                image: "cleaning-2.png"
            },

            {
                name: "Fabric Softener",
                image: "cleaning-3.png"
            },

          {

          name: "Ammonia",
                image: "cleaning-3.png"
            },

            {
                name: "Dishwasher",
                image: "cleaning-4.png"
            },

            {
                name: "Spring Freshener",
                image: "cleaning-5.png"
            },

            {
                name: "Jeyes Fluid",
                image: "cleaning-6.png"
            },

          

        ],

            car: [

            {
                name: "Wash-and-Wax",
                image: "car-wash-and-wax.png"
            },

            {
                name: "Tyre Silicone",
                image: "car-tyre-silicone.png"
            },

            {
                name: "Air-Freshener",
                image: "car-air-freshener.png"
            }

        ]

    };

      let currentCategory = "cleaning";
    let currentIndex = 0;


    const slider =
        document.getElementById("productSlider");

    const sliderImage =
        document.getElementById("sliderImage");

    const sliderTitle =
        document.getElementById("sliderTitle");

    const sliderCategory =
        document.getElementById("sliderCategory");

    const sliderOrder =
        document.getElementById("sliderOrder");

    const sliderDots =
        document.getElementById("sliderDots");

             /*
     * =====================================================
     * OPEN SLIDER
     * =====================================================
     */

    window.openProductSlider = function (category) {

        currentCategory = category;
        currentIndex = 0;

        showProduct();

        slider.classList.add("active");

        slider.setAttribute(
            "aria-hidden",
            "false"
        );

      };


    /*
     * =====================================================
     * CLOSE SLIDER
     * =====================================================
     */

    window.closeProductSlider = function () {

        slider.classList.remove("active");

        slider.setAttribute(
            "aria-hidden",
            "true"
        );

      document.body.classList.remove(
            "slider-open"
        );

    };


    /*
     * =====================================================
     * SHOW PRODUCT
     * =====================================================
     */

               function showProduct() {

        const list =
            products[currentCategory];

        const product =
            list[currentIndex];


        sliderImage.src =
            product.image;

        sliderImage.alt =
            product.name;


        sliderTitle.textContent =
            product.name;

  sliderCategory.textContent =
            currentCategory === "cleaning"
                ? "CLEANING PRODUCTS"
                : "CAR CLEANING PRODUCTS";


        const message =
            currentCategory === "cleaning"

                ? `Hello Shabane's Gardening, I would like to order ${product.name}.`

                : `Hello Shabane's Gardening, I would like to order ${product.name}.`;


        sliderOrder.href =
            "https://wa.me/27738460090?text=" +
            encodeURIComponent(message);


        updateDots();

               }

             /*
     * =====================================================
     * NEXT PRODUCT
     * =====================================================
     */

    window.nextProduct = function () {

        const list =
            products[currentCategory];

        currentIndex++;

        if (
            currentIndex >= list.length
        ) {

            currentIndex = 0;

        }

      showProduct();

    };

            /*
     * =====================================================
     * PREVIOUS PRODUCT
     * =====================================================
     */

    window.previousProduct = function () {

        const list =
            products[currentCategory];

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                list.length - 1;

        }

        showProduct();

    };

  /*
     * =====================================================
     * DOTS
     * =====================================================
     */

    function updateDots() {

        sliderDots.innerHTML = "";

        const list =
            products[currentCategory];


        list.forEach(
            function (_, index) {

                const dot =
                    document.createElement("button");

                dot.className =
                    "slider-dot";

 if (
                    index === currentIndex
                ) {

                    dot.classList.add(
                        "active"
                    );

                }


                dot.setAttribute(
                    "aria-label",
                    "View product " +
                    (index + 1)
                );

          dot.addEventListener(
                    "click",
                    function () {

                        currentIndex =
                            index;

                        showProduct();

                    }
                );


                sliderDots.appendChild(
                    dot
                );

            }
        );

    }

           /*
     * =====================================================
     * CLOSE WHEN CLICKING BACKGROUND
     * =====================================================
     */

    slider.addEventListener(
        "click",
        function (event) {

            if (
                event.target === slider
            ) {

                closeProductSlider();

            }

        }
    );

             /*
     * =====================================================
     * KEYBOARD CONTROLS
     * =====================================================
     */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !slider.classList.contains(
                    "active"
                )
            ) {

                return;

            }

      if (
                event.key === "Escape"
            ) {

                closeProductSlider();

            }


            if (
                event.key === "ArrowRight"
            ) {

                nextProduct();

            }

      if (
                event.key === "ArrowLeft"
            ) {

                previousProduct();

            }

        }
    );


    /*
     * =====================================================
     * HEADER SCROLL EFFECT
     * =====================================================
     */

              const header =
        document.querySelector(
            ".site-header"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 20
            ) {

                header.classList.add(
                    "scrolled"
                );

          } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

});
