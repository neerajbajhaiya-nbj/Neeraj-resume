window.openContact = function () {

    const modal = document.getElementById("contactModal");

    if (modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

};


window.closeContact = function () {

    const modal = document.getElementById("contactModal");

    if (modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

};


window.openCertificates = function () {

    const modal = document.getElementById("certificateModal");

    if (modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

};


window.closeCertificates = function () {

    const modal = document.getElementById("certificateModal");

    if (modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

};


document.addEventListener("DOMContentLoaded", function () {


    /* CONTACT MODAL */

    const contactModal =
        document.getElementById("contactModal");


    /* CERTIFICATE MODAL */

    const certificateModal =
        document.getElementById("certificateModal");


    if (contactModal) {

        contactModal.addEventListener("click", function (event) {

            if (event.target === contactModal) {

                window.closeContact();

            }

        });

    }


    if (certificateModal) {

        certificateModal.addEventListener("click", function (event) {

            if (event.target === certificateModal) {

                window.closeCertificates();

            }

        });

    }


    /* ESCAPE KEY */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            window.closeContact();
            window.closeCertificates();

        }

    });



    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("mobile-open");

        });


        /* CLOSE MENU AFTER CLICK */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("mobile-open");

            });

        });

    }

    const sections =
        document.querySelectorAll("section[id]");

    const links =
        document.querySelectorAll("#navMenu a");


    window.addEventListener("scroll", function () {

        let current = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 180;


            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        links.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


});