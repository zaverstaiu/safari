// function findVideos() {
//   let videos = document.querySelectorAll('.video');

//   for (let i = 0; i < videos.length; i++) {
//     setupVideo(videos[i]);
//   }
// }

// function setupVideo(video) {
//   let link = video.querySelector('.video__link');
//   let media = video.querySelector('.video__media');
//   let button = video.querySelector('.video__btn');
//   let id = parseMediaURL(media);

//   button.addEventListener('click', () => {
//     let iframe = createIframe(id);

//     link.remove();
//     button.remove();
//     video.appendChild(iframe);
//   });

//   link.removeAttribute('href');
//   video.classList.add('video--enabled');
// }

// function parseMediaURL(media) {
//   let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//   let url = media.src;
//   let match = url.match(regexp);

//   return match[1];
// }

// function createIframe(id) {
//   let iframe = document.createElement('iframe');

//   iframe.setAttribute('allowfullscreen', '');
//   iframe.setAttribute('allow', 'autoplay');
//   iframe.setAttribute('src', generateURL(id));
//   iframe.classList.add('video__media');

//   return iframe;
// }

// function generateURL(id) {
//   let query = '?rel=0&showinfo=0&autoplay=1';

//   return 'https://www.youtube.com/embed/' + id + query;
// }

// findVideos();

$(function () {

  $('.video__btn').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="gallery-slider__btn gallery-slider__btn-prev" type="button"><svg width="9" height="14" fill="none"><path d="M8 13 2 7.002 8 1" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
    nextArrow: '<button class="gallery-slider__btn gallery-slider__btn-next" type="button"><svg width="9" height="14" fill="none"><path d="M8 13 2 7.002 8 1" stroke-width="2" stroke-miterlimit="10"/></svg></button>',

    responsive: [
      {
        breakpoint: 998,
        settings: {
          arrows: false
        }
      }
    ]

  });


  $('.gallery-slider__inner').magnificPopup({
    disableOn: function () {
      if ($(window).width() < 998) {
        return false;
      }
      return true;
    },
    delegate: 'a',
    closeOnBgClick: true,
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
  });

});
