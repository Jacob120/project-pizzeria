import {select, templates} from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';



class Booking {
  constructor(element){
    const thisBooking = this;   
    
    thisBooking.render(element);
    thisBooking.initWidgets();
  }  

  render(element){
    const thisBooking = this;

    /* generate HTML based on template */
    const generatedHTML = templates.bookingWidget();
    /* create element using utils.createElementFromHTML */
    thisBooking.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const bookingContainer = document.querySelector(select.containerOf.booking);
    /* add element to menu */
    bookingContainer.appendChild(thisBooking.element).innerHTML;
    
    thisBooking.dom = {
      wrapper: element,      
      hoursAmount: element.querySelector(select.booking.hoursAmount),
      peopleAmount: element.querySelector(select.booking.peopleAmount),
      datePickerInput: element.querySelector(select.widgets.datePicker.wrapper),
      hourPickerInput: element.querySelector(select.widgets.hourPicker.wrapper),
    };        
  }

  initWidgets(){
    const thisBooking = this;    

    thisBooking.peopleAmountElem = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountElem = new AmountWidget(thisBooking.dom.hoursAmount); 
    thisBooking.datePickerElem = new DatePicker(thisBooking.dom.datePickerInput); 
    thisBooking.hourPickerElem = new HourPicker(thisBooking.dom.hourPickerInput);
  }
}

export default Booking;


