
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

  // Add a subtle shadow to the header when scrolling
    const header = document.querySelector(".site-header");

    if (header) {

        function updateHeader() {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }

        window.addEventListener("scroll", updateHeader);

        updateHeader();
    }

    // Prevent accidental broken image areas
    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {
            this.style.display = "none";
        });

    });

});
