 // Show Back to Top button on scroll
 window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  };

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
      function googleTranslateElementInit() {
          new google.translate.TranslateElement(
              {pageLanguage: 'en'},
              'google_translate_element'
          );
      } 
