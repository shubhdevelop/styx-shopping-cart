type CartItem = {
  id: number;
  title: string;
  price: number;
  discount: number;
  qty: number;
  image: string;
};
type ProductList = IndividualProduct[];
type IndividualProduct = {
  id: number;
  qty?: number; // Optional Because when we are adding product to cart we are not adding qty
  discount?: number; // Optional Because when we are adding product to cart we are not adding discount
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: number;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

type Review = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: Number;
  reviewerEmail: string;
};

export { Review, ProductList, IndividualProduct, CartItem };
