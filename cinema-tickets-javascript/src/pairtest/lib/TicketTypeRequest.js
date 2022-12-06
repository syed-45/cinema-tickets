/**
 * Immutable Object.
 */

export default class TicketTypeRequest {

  constructor(arrayOfTicketTypesAndQuantities) { //[[type, quantity], [type, quantity]...]

    for (let [ticketType, quantity] of arrayOfTicketTypesAndQuantities) {

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



let newTickets = new TicketTypeRequest([['ADULT', 3],['INFANT',5],['INFANT',5],['CHILD',5]])
console.log(newTickets.getNoOfTicketsForAType('ADULT'))