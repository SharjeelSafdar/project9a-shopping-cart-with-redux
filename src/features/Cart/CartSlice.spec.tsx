import { cleanup } from '@testing-library/react';
import cart, {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    batchRemove,
    toggleInclude,
} from './cartSlice';

describe('Tests for <Cart />', () => {
    afterEach(cleanup);

    it('addToCart action works correctly', () => {
        expect(
            cart(
                [],
                {
                    type: addToCart.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                }
            )
        ).toEqual(
            [{
                id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                name: "Air Jordan 1 Mid",
                category: "Men's Shoes",
                price: 115,
                image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                quantity: 1,
                includedInSum: false,
            }]
        );

        expect(
            cart(
                [{
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                }],
                {
                    type: addToCart.type,
                    payload: {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                }
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                ],
                {
                    type: addToCart.toString(),
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 2,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                }
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 2,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                ],
                {
                    type: addToCart.toString(),
                    payload: {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 2,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 4,
                    includedInSum: false,
                }
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 2,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                ],
                {
                    type: addToCart.toString(),
                    payload: {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 2,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 6,
                    includedInSum: false,
                }
            ]
        );
    })

    it('removeFromCart action works correctly', () => {
        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                ],
                {
                    type: removeFromCart.type,
                    payload: {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab"
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                ],
                {
                    type: removeFromCart.toString(),
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual([]);

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    }
                ],
                {
                    type: removeFromCart.type,
                    payload: {
                        id: "wrong id",
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                }
            ]
        );
    });

    it('incrementQuantity action works correcly', () => {
        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                ],
                {
                    type: incrementQuantity.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 2,
                    includedInSum: false,
                },
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 2,
                        includedInSum: false,
                    },
                ],
                {
                    type: incrementQuantity.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 3,
                    includedInSum: false,
                },
            ]
        );
    });

    it('decrementQuantity action works correctly', () => {
        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                ],
                {
                    type: decrementQuantity.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 2,
                    includedInSum: false,
                },
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 2,
                        includedInSum: false,
                    },
                ],
                {
                    type: decrementQuantity.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
            ]
        );
        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                ],
                {
                    type: decrementQuantity.type,
                    payload: {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc"
                    },
                }
            )
        ).toEqual(
            []
        );
    });

    it('batchRemove action works correctly', () => {
        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                ],
                {
                    type: batchRemove.type,
                    payload: {
                        ids: [
                            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        ]
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                },
                {
                    id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    name: "Nike DBreak-Type",
                    category: "Men's Shoes",
                    price: 90,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                    quantity: 1,
                    includedInSum: false,
                }
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                ],
                {
                    type: batchRemove.type,
                    payload: {
                        ids: [
                            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                            "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        ]
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    name: "Nike DBreak-Type",
                    category: "Men's Shoes",
                    price: 90,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                    quantity: 1,
                    includedInSum: false,
                }
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                ],
                {
                    type: batchRemove.type,
                    payload: {
                        ids: [
                            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                            "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                            "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        ]
                    }
                }
            )
        ).toEqual(
            []
        );

        expect(
            cart(
                [
                    {
                        id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                        name: "Air Jordan 1 Mid",
                        category: "Men's Shoes",
                        price: 115,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: false,
                    }
                ],
                {
                    type: batchRemove.type,
                    payload: {
                        ids: [
                            "wrong id",
                        ]
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
                    name: "Air Jordan 1 Mid",
                    category: "Men's Shoes",
                    price: 115,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                },
                {
                    id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    name: "Nike DBreak-Type",
                    category: "Men's Shoes",
                    price: 90,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                    quantity: 1,
                    includedInSum: false,
                }
            ]
        );
    });

    test('toggleInclude action works correctly', () => {
        expect(
            cart(
                [
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: false,
                    },
                ],
                {
                    type: toggleInclude.type,
                    payload: {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                },
                {
                    id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    name: "Nike DBreak-Type",
                    category: "Men's Shoes",
                    price: 90,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                    quantity: 1,
                    includedInSum: true,
                },
            ]
        );

        expect(
            cart(
                [
                    {
                        id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                        name: "Nike Air Zoom-Type",
                        category: "Men's Shoes",
                        price: 150,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                        quantity: 3,
                        includedInSum: false,
                    },
                    {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                        name: "Nike DBreak-Type",
                        category: "Men's Shoes",
                        price: 90,
                        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                        quantity: 1,
                        includedInSum: true,
                    },
                ],
                {
                    type: toggleInclude.type,
                    payload: {
                        id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
                    name: "Nike Air Zoom-Type",
                    category: "Men's Shoes",
                    price: 150,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    quantity: 3,
                    includedInSum: false,
                },
                {
                    id: "891d4a42-0d8f-4f31-b201-58b3383887c8",
                    name: "Nike DBreak-Type",
                    category: "Men's Shoes",
                    price: 90,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg",
                    quantity: 1,
                    includedInSum: false,
                },
            ]
        );
    });
})