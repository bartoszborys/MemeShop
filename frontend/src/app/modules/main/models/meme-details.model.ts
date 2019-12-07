export interface MemeDetails {
  id: number;
  url: string;
  price: number;
  name: string;
  quantity: number;
  bought: number;
  author: {id: number; first_name: string; last_name: string;};
  creation_date: string;
  visit_count: number;
}