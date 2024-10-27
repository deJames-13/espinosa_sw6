AOS.init({
  duration: 1500,
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  // effect: "coverflow",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/****************** start gallery section *************************/
let video_titles = [
  "Learn to write numbers 1-10",
  "",
  "Wind Instruments for Kids - Musical Instruments",
  "Numbers - Learn to count 1 to 10",
  "",
  "",
]

let gallery_items = document.querySelectorAll(".gallery .item");
let modal = document.getElementById("galleryModal")
let modal_img = document.querySelector(".modal img");
let modal_video = document.querySelector(".modal video");
let modal_title = document.querySelector(".modal .modal-title");

gallery_items.forEach((element, index) => {
  element.addEventListener("click", () => {
    // add image number to modal title
    modal_title.innerHTML = video_titles[index] ?? "";

    // add image to modal
    // modal_img.src = `img/portfolio-${index + 1}.jpg`;
    // add video to modal
    modal_video.src = `videos/video_${index + 1}.mp4`;
  });
});

modal.addEventListener("hidden.bs.modal", () => {
  modal_video.pause();
});


let gallery_tabs = document.querySelectorAll(".gallery .btn-group .btn");

gallery_tabs.forEach((element) => {
  element.addEventListener("click", () => {
    // category name
    let category = element.innerHTML.toLowerCase();

    gallery_items.forEach((ele) => {
      if (ele.classList.contains(category)) {
        ele.classList.add("show");
        ele.classList.remove("hide");
      } else {
        ele.classList.add("hide");
        ele.classList.remove("show");
      }
    });
  });
});

/****************** end gallery section *************************/
