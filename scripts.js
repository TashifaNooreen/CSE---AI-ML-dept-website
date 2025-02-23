document.addEventListener("DOMContentLoaded", function () {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
  
    const text1 = "Advancing the future of AI and ";
    const text2 = "Machine Learning in Computer Science.";
  
    const typingSpeed = 50; // Speed in milliseconds per character
  
    let index1 = 0;
    let index2 = 0;
  
    function typeLine1() {
      if (index1 < text1.length) {
        line1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(typeLine1, typingSpeed);
      } else {
        // Start typing the second line after the first line completes
        setTimeout(typeLine2, 500); // Add a small delay before starting the second line
      }
    }
  
    function typeLine2() {
      if (index2 < text2.length) {
        line2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeLine2, typingSpeed);
      }
    }
  
    // Start the animation for the first line
    typeLine1();
  });
  // Scroll-triggered animations
  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");
    const aboutContent = document.querySelector(".about-content");
    const aboutImage = document.querySelector(".about-image img");
  
    // Observer to trigger animations when the section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutContent.style.animation = "fadeIn 1s ease-in-out forwards";
            aboutImage.style.animation = "fadeIn 1.5s ease-in-out forwards";
            const servicesSection = document.querySelector(".services-section");
            const servicesContent = document.querySelector(".services-content");
            const contactSection = document.querySelector(".contact-section");
            const contactContent = document.querySelector(".contact-content");
            const footerSection = document.querySelector(".footer");
            const visionMissionSection = document.querySelector(".vision-mission-section");
            const facultySection = document.querySelector(".faculty-section");
            const gallerySection = document.querySelector(".gallery-section");
            const psosSection = document.querySelector(".psos-section");
            const researchSection = document.querySelector(".research-section");
            const societiesSection = document.querySelector(".societies-section");
            const coursesSection = document.querySelector(".courses-section");
            const eventsSection = document.querySelector(".events-section");
            const freshersSection = document.querySelector(".freshers-section");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
  
    observer.observe(psosSection);
    observer.observe(visionMissionSection);
    observer.observe(footerSection);
    observer.observe(aboutSection);
    observer.observe(servicesSection);
    observer.observe(contactSection);
    observer.observe(facultySection);
    observer.observe(gallerySection);
    observer.observe(researchSection);
    observer.observe(societiesSection);
    observer.observe(coursesSection);
    observer.observe(eventsSection);
    observer.observe(freshersSection);
  });
  