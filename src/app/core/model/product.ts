export interface Product {
    id: string;
    index: number;
    // corresponds with images in the asserts/image folder
    image: string;
    isEdible: boolean;
    price: number;
    // integer in range [1..5]
    rating: number;
    title: string;
    // an array of random strings
    tags: string[];
    // long random text
    description: string;
}