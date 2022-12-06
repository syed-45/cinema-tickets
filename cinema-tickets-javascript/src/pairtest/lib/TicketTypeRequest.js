/**
 * Immutable Object.
 */

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
  
      if (!Number.isInteger(quantity)) {
        throw new TypeError('quantity must be an integer');
      }
      
      this[ticketType]=quantity
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

  #Type = ['ADULT', 'CHILD', 'INFANT'];
}



//tests for buying more than 20 tickets
// let newTickets = new TicketTypeRequest([['ADULT', 3],['INFANT',5],['INFANT',5],['CHILD',5]])
//=> should be fine
// let newTickets = new TicketTypeRequest([['ADULT', 3],['INFANT',5],['INFANT',5],['CHILD',5],['CHILD',5]])
//=> should'nt be fine
// let newTickets = new TicketTypeRequest([['ADULT', 30]])
// //=> should'nt be fine
// let newTickets = new TicketTypeRequest([['CHILD', 30]])
// //=> should'nt be fine
// let newTickets = new TicketTypeRequest([['INFANT', 30]])
// //=> should'nt be fine

console.log(newTickets.getAllTicketTypes())