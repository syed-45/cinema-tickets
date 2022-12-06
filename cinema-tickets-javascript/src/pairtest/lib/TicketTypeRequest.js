/**
 * Immutable Object.
 */
import prices from './prices.js'

export default class TicketTypeRequest {
  #totalTickets = 0

  constructor(arrayOfTicketTypesAndQuantities) { //[[type, quantity], [type, quantity]...]

    for (let [ticketType, quantity] of arrayOfTicketTypesAndQuantities) {

      this.#totalTickets += quantity

      if (this.#totalTickets > 20) {
        throw new TypeError(`Sorry you have exceeded the maximum of 20 tickets allowed to purchase at one time`)
      }

      if (!this.#Type.includes(ticketType)) {
        throw new TypeError(`type must be ${this.#Type.slice(0, -1).join(', ')}, or ${this.#Type.slice(-1)}`);
      }
  
      if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new TypeError('quantity must be an integer and greater than 0');
      }
      
      if (Object.keys(this).includes(ticketType)) {
        throw new TypeError('each ticket type must be only entered once');
      } else { 
        this[ticketType]=quantity 
      }      
    }
    
    if (Object.keys(this).includes('CHILD') || Object.keys(this).includes('INFANT')) {
      if (!Object.keys(this).includes('ADULT')) {
        throw new TypeError(`Need at least 1 adult to accompany the children/infants`);
      }
    }

    if (Object.keys(this).includes('INFANT')) { 
      if (this['ADULT']<this['INFANT']) {
        throw new TypeError(`There aren't enough adults for the amount of infants`);
      }
    }
  }

  getNoOfTicketsForAType(type) {
    if (!this.#Type.includes(type)) {
      throw new TypeError(`type must be ${this.#Type.slice(0, -1).join(', ')}, or ${this.#Type.slice(-1)}`);
    }
    return this[type];
  }

  getAllTicketTypes() {
    return Object.keys(this);
  }

  getTotalCost() {
    let totalCost = 0
    for (let type of Object.keys(this)) {
      totalCost += prices[type] * this[type]
    }
    return totalCost
  }

  #Type = ['ADULT', 'CHILD', 'INFANT'];
}