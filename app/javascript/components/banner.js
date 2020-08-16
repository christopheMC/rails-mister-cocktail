import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Tester!", "Vibrer!", "Vivre!"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
