import TicketTypeRequest from './lib/TicketTypeRequest.js';
import InvalidPurchaseException from './lib/InvalidPurchaseException.js';

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   
   request#1: 2 infant, 1 adult, 2 child tickets => system processes tickets
   request#2: 2 infant  => throw error, need at least 1 adult
   request#3: 2 child  => throw error, need at least 1 adult
   request#4: 4 adult 4 child => system processes tickets
   request#5: 3infant 1adult => throw error, not enough adults for infants
   
   - typeof ticket? -> no of tickets of this type? -> any other tickets? yes - start again, no - continue ->
   */
   
  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
  }
}
