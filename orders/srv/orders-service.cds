using { sap.capire.bookshop as my } from '../db/schema';

service OrdersService {
  entity Orders as projection on my.Orders;
}
