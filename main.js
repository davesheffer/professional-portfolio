

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each section dynamically
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => {
      // Animate the entire section
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate headings and pills within the section
      const title = section.querySelector("h2");
      const pill = section.querySelector(".pill");
      if (title || pill) {
        gsap.from([title, pill], {
          opacity: 0,
          y: -20,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animate cards or grids within the section
      const cards = section.querySelectorAll(".skill-card, .project-card");
      if (cards.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.3, // Delays between each card
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  });
