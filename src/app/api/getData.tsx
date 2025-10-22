export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
export interface Product {
    id: number;
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
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
    slug?:string,
}

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
}
interface Meta {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
}

export default async function FechData(
  url: string
): Promise<{ data: ProductResponse | null; error: Error | null }> {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

    const data: ProductResponse = await res.json();
    return { data, error: null };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { data: null, error: err };
    } else {
      return { data: null, error: new Error("An unknown error occurred") };
    }
  }
}
