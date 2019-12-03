export interface NewMeme {
  name: string;
  extension: string;
  blob: string | ArrayBuffer;
  price: number;
  quantity: number;
}