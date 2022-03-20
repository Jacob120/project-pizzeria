import {select, templates,} from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    // thisHome.initWidgets();

  }



  render(element){
    const thisHome = this;
  
    /* generate HTML based on template */
    const generatedHTML = templates.homePage();
    /* create element using utils.createElementFromHTML */
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const homeContainer = document.querySelector(select.containerOf.home);
    /* add element to menu */
    homeContainer.appendChild(thisHome.element);      

    thisHome.dom = {
      wrapper: element,
      carousel: element.querySelector(select.widgets.carousel.wrapper)
    };
  }

  // initWidgets(){    
  //   const flkty = new Flickity( '.main-carousel', {
  //     cellAlign: 'left',
  //     contain: true,
  //     // autoPlay: true,
  //     wrapAround: true,
  //     setGallerySize: false,
  //     // watchCSS: true,
  //   });
  // }


}

export default Home;