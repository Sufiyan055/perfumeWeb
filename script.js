let navBar = document.getElementById("navBar");
let toggleBar1 = document.querySelector(".toggleBar");
let gotoTop = document.querySelector(".gotoTop");

function toggleBar() {
  navBar.classList.toggle("navbarSmallDevice");
  toggleBar1.classList.toggle("toggleBarClick");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsContent = document.querySelectorAll(".hiddenContent");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsContent.forEach((el) => observer.observe(el));

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};

let popupBeforePage = document.querySelector(".popupBeforePage");
function hidescrollWith() {
  document.body.classList.add("hide-scrollbar");
  popupBeforePage.classList.remove("dsplayVisible");
  popupBeforePage.classList.add("scaleonpopupBeforePage");

  setTimeout(() => {
    document.body.classList.remove("hide-scrollbar");
    popupBeforePage.classList.add("dsplayVisible");
    popupBeforePage.classList.remove("scaleonpopupBeforePage");
  }, 3000);
}
hidescrollWith();

/* Prd View */

let productPreview = document.querySelector(".product-preview");
let previewBox = document.querySelectorAll(".preview");

/* Open popup */
document
  .querySelectorAll(".varietyOfProduct .productBox")
  .forEach((product) => {
    product.onclick = () => {
      productPreview.style.display = "flex";
      let name = product.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
          document.body.classList.add("hide-scrollbar");
        }
      });
    };
  });

/* Close Popup */
previewBox.forEach((close) => {
  close.querySelector(".fa-x").onclick = () => {
    close.classList.remove("active");
    productPreview.style.display = "none";
    document.body.classList.remove("hide-scrollbar");
  };
});
