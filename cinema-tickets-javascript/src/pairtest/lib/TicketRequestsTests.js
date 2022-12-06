import TicketTypeRequest from './TicketTypeRequest.js'

//tests for buying more than 20 tickets
// let newTickets = new TicketTypeRequest([['ADULT', 10],['INFANT',5],['CHILD',5]])
//=> should be fine
// let newTickets = new TicketTypeRequest([['ADULT', 3],['INFANT',5],['INFANT',5],['CHILD',5],['CHILD',5]])
//=> shouldn't be fine
// let newTickets = new TicketTypeRequest([['ADULT', 30]])
//=> shouldn't be fine
// let newTickets = new TicketTypeRequest([['CHILD', 30]])
//=> shouldn't be fine
// let newTickets = new TicketTypeRequest([['INFANT', 30]])
//=> shouldn't be fine


//tests for buying child tickets without adult
// let newTickets = new TicketTypeRequest([['INFANT',5],['CHILD',5]])
// let newTickets = new TicketTypeRequest([['INFANT',15]])


//tests for not buying enough adult tickets for infants
// let newTickets = new TicketTypeRequest([['INFANT',15],['ADULT',4]]) //fine
// let newTickets = new TicketTypeRequest([['INFANT',4],['ADULT',4]])  //fine
// let newTickets = new TicketTypeRequest([['INFANT',10],['ADULT',9]])  //not fine



// let newTickets = new TicketTypeRequest([['INFANT',9],['ADULT',9]])  // => 180
// let newTickets = new TicketTypeRequest([['INFANT',5],['CHILD',5],['ADULT',5]])  // => 150
// let newTickets = new TicketTypeRequest([['CHILD',4],['INFANT',5],['ADULT',7]])  // => 180
let newTickets = new TicketTypeRequest([['CHILD',14],['ADULT',1]])  // => 160
console.log(newTickets.getTotalCost())