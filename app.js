
  // Page load animation (headings appear)
  gsap.to(".topnav a", {
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "bounce.out"
  });

  // Hover animation
  document.querySelectorAll(".topnav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link.querySelector("::before"), {
        width: "100%", 
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(link.querySelector("::after"), {
        width: "100%",
        duration: 0.4,
        ease: "power2.out"
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link.querySelector("::before"), {
        width: "0%",
        duration: 0.4,
        ease: "power2.in"
      });
      gsap.to(link.querySelector("::after"), {
        width: "0%",
        duration: 0.4,
        ease: "power2.in"
      });
    });
  });
  const images = [
      ".//images/cover.jpg",
      ".//images/cover1.jpg",
      ".//images/cover3.jpg",
      ".//images/cover4.jpg"
    ];

    let index = 0;
    const carousel = document.querySelector(".bg-carousel");

    // initial image
    carousel.style.backgroundImage = `url(${images[index]})`;

    // har 5 second baad image change
    setInterval(() => {
      index = (index + 1) % images.length;
      carousel.style.backgroundImage = `url(${images[index]})`;
    }, 5000);