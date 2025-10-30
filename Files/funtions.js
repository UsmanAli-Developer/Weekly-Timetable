      function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }

    const search = document.getElementById("search");
    search.addEventListener("keyup", () => {
      const value = search.value.toLowerCase();
      document.querySelectorAll(".period").forEach(period => {
        period.style.display = period.textContent.toLowerCase().includes(value) ? "flex" : "none";
      });
    });


    function filterDay(day) {
      document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");

      document.querySelectorAll(".day-card").forEach(card => {
        card.style.display = (day === "all" || card.dataset.day === day) ? "block" : "none";
      });
    }

 
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    document.querySelectorAll(".day-card").forEach(card => {
      if (card.dataset.day === today) card.classList.add("highlight");
    });
  
    // Speech system in build ai voice //


 let hoverTimer;


document.body.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.innerText && target.innerText.trim() !== "") {
    hoverTimer = setTimeout(() => {
 

      window.speechSynthesis.cancel();

 
      let text = target.innerText;


      let speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US"; 

      window.speechSynthesis.speak(speech);
    }, 5000); // 5 second hover
  }
});


document.body.addEventListener("mouseout", () => {
  clearTimeout(hoverTimer);
  window.speechSynthesis.cancel();
});


// text animations i used a library //

 let typed = new Typed("#changing-text", {
    strings: ["Management", "Planner", "Organizer", "System"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10000,
      loop: true,
    showCursor: true,
    cursorChar: "|"
  });

    const input = document.getElementById("search");

  
  const texts = [
    "Search Math...",
    "Search English...",
    "Search Science...",
    "Search Physics...",
    "Search Computer..."
  ];

  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
    currentText = texts[textIndex];


  if (!isDeleting) {
    search.setAttribute("placeholder", currentText.substring(0, charIndex + 1));
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); 
      return;
    }
  } else {
    search.setAttribute("placeholder", currentText.substring(0, charIndex - 1));
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }

  typeEffect();

  // Gsap animations


 gsap.registerPlugin(ScrollTrigger);

  gsap.from(".day-card", {
    scrollTrigger: ".day-card",
    opacity: 0,
    duration: 2,
    stagger: 0.5
  });

    gsap.from(".Head h1", {
    y: -50,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".Head h1",
      start: "top 80%", 
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".Head p", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".Head p",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".search-box", {
    scale: 0.2,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".search-box",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

