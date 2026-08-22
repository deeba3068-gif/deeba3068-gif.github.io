const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});
/* =========================================
   ACHIEVEMENT POPUP
   ========================================= */

const achievementCards =
  document.querySelectorAll(".achievement-card");

const achievementModal =
  document.getElementById("achievementModal");

const achievementModalClose =
  document.getElementById("achievementModalClose");

const achievementModalOverlay =
  document.getElementById("achievementModalOverlay");

const achievementModalTitle =
  document.getElementById("achievementModalTitle");

const achievementModalNumber =
  document.getElementById("achievementModalNumber");

const achievementModalCategory =
  document.getElementById("achievementModalCategory");

const achievementModalDetails =
  document.getElementById("achievementModalDetails");


/* OPEN */

function openAchievement(card) {

  achievementModalTitle.textContent =
    card.dataset.title;

  achievementModalNumber.textContent =
    card.dataset.number;

  achievementModalCategory.textContent =
    card.dataset.category;

  achievementModalDetails.textContent =
    card.dataset.details;


  achievementModal.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* CLOSE */

function closeAchievement() {

  achievementModal.classList.remove("active");

  document.body.style.overflow = "";
}


/* CLICK */

achievementCards.forEach(card => {

  card.addEventListener(
    "click",
    function () {

      openAchievement(card);

    }
  );


  /* ENTER / SPACE FOR ACCESSIBILITY */

  card.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openAchievement(card);

      }

    }
  );

});


/* CLOSE BUTTON */

achievementModalClose.addEventListener(
  "click",
  closeAchievement
);


/* CLICK OUTSIDE */

achievementModalOverlay.addEventListener(
  "click",
  closeAchievement
);


/* ESCAPE */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      achievementModal.classList.contains("active")
    ) {

      closeAchievement();

    }

  }
);
