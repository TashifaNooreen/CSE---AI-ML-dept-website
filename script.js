// JavaScript Sequential Typing Animation
document.addEventListener("DOMContentLoaded", function () {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  const text1 = "Advancing the future of  ";
  const text2 = "AI and Machine Learning ";
  const text3 = "in Computer Science.";

  const typingSpeed = 50; // Speed in milliseconds per character

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

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
    } else {
      // Start typing the third line after the second line completes
      setTimeout(typeLine3, 500); // Add a small delay before starting the third line
    }
  }

  function typeLine3() {
    if (index3 < text3.length) {
      line3.textContent += text3.charAt(index3);
      index3++;
      setTimeout(typeLine3, typingSpeed);
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

// Popup and Download Logic
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("download-btn");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  // Show popup on download button click
  downloadBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  // Close popup on button click
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
});


// Create Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Create Trail Elements
let trailElements = [];


document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  // Update Cursor Position
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;

  // Create Space Dust Trail
  const trail = document.createElement('div');
  trail.classList.add('trail');

  // Randomize Size and Position
  const size = Math.random() * 3 + 2; // Random size between 2px and 5px
  trail.style.width = `${size}px`;
  trail.style.height = `${size}px`;
  trail.style.left = `${clientX + (Math.random() - 0.5) * 10}px`; // Slight random offset
  trail.style.top = `${clientY + (Math.random() - 0.5) * 10}px`; // Slight random offset

  document.body.appendChild(trail);

  // Add to Trail Array
  trailElements.push(trail);

  // Remove Old Trails
  if (trailElements.length > 50) {
    const oldTrail = trailElements.shift();
    oldTrail.remove();
  }
});



