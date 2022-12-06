import TicketTypeRequest from './lib/TicketTypeRequest.js';
import TicketPaymentService from '../thirdparty/paymentgateway/TicketPaymentService.js';
import SeatReservationService from '../thirdparty/seatbooking/SeatReservationService.js';

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  constructor(accountId, ticketTypeRequests) {
    if (accountId <= 0) {
      throw new TypeError(`Your accountId is invalid`)
    }
    this.accountId = accountId
    this.ticketTypeRequests = ticketTypeRequests
  }

  purchaseTickets() {     
    let payment = new TicketPaymentService
    payment.makePayment(this.accountId, this.ticketTypeRequests.getTotalCost())    
    this.#reserveSeats()    
  }

  #reserveSeats() {
    let totalSeatsToAllocate = 0
    for (let type of Object.keys(this.ticketTypeRequests)) {
      if (type!=='INFANT') {
        totalSeatsToAllocate += this.ticketTypeRequests[type]
      }      
    }    
    let seatReservation = new SeatReservationService 
    seatReservation.reserveSeat(this.accountId, totalSeatsToAllocate)
  }

}


//example tickets request
let newTicketRequests = new TicketTypeRequest([['CHILD',12],['ADULT',2],['INFANT',2]])
let ticketService = new TicketService(509, newTicketRequests)
ticketService.purchaseTickets()

