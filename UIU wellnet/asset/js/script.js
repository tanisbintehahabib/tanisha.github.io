 document.addEventListener("DOMContentLoaded", function () {

    const menuMap = [
        {
            menu: document.querySelector(".medical-center-menu"),
            details: document.querySelector(".medical-center-details-section")
        },
        {
            menu: document.querySelector(".mental-wellness-menu"),
            details: document.querySelector(".mental-wellness-details-section")
        },
        {
            menu: document.querySelector(".history-menu"),
            details: document.querySelector(".history-details-section")
        },
        {
            menu: document.querySelector(".emergency-health-menu"),
            details: document.querySelector(".emergancy-health-details-section") 
        },
        {
            menu: document.querySelector(".nearby-hospital-menu"),
            details: document.querySelector(".nearby-hospital-details-section")
        },
        {
            menu: document.querySelector(".nearby-pharmacy-menu"),
            details: document.querySelector(".nearby-pharmacy-details-section")
        }
    ];

    // initially sob details hide, sudhu first ta show
    menuMap.forEach((item, index) => {
        if (index === 0) {
            item.details.style.display = "block";
        } else {
            item.details.style.display = "none";
        }
    });

    menuMap.forEach(item => {
        item.menu.addEventListener("click", () => {

            // remove active id from all menu
            document.querySelectorAll(".menu-section ul li").forEach(li => {
                li.removeAttribute("id");
            });

            // add active id to clicked menu
            item.menu.setAttribute("id", "active-menu");

            // hide all details
            menuMap.forEach(i => {
                i.details.style.display = "none";
            });

            // show selected details (smooth)
            item.details.style.display = "block";
            item.details.style.opacity = 0;

            setTimeout(() => {
                item.details.style.transition = "opacity 0.3s ease";
                item.details.style.opacity = 1;
            }, 50);

        });
    });

});