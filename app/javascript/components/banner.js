import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Goûter!", "Vibrer!", "Vivre!"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
