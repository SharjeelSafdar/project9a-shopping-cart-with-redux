/// <reference types="react-scripts" />
type ShoeData = {
    name: string;
    price: string;
    category: string;
    description: string;
    images: string[];
}

type ShoesList = Record<string, ShoeData>

type Shoes = {
    men: ShoesList;
    women: ShoesList;
    kids: ShoesList;
    shoesById: ShoesList;
}

type CartItem = {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
    includedInSum: boolean;
}