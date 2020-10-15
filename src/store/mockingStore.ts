import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

export const initialTestState: RootState = {
    products: {
        men: {
            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc": {
                "name": "Air Jordan 1 Mid",
                "price": "$115",
                "category": "Men's Shoes",
                "description": "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg"
                ]
            },
            "d52fd362-1080-46b3-a43c-d64f7a6825ab": {
                "name": "Nike Air Zoom-Type",
                "price": "$150",
                "category": "Men's Shoes",
                "description": "Celebrate Nike innovation and sports heritage in the Nike Air Zoom-Type. It brings a deconstructed, DIY aesthetic to the streets with its zigzag stitching, and colors inspired by Japan's street culture. The stacked foam at the heel and contrast-colored Zoom Air cushioning at the forefoot use the same technology used by the world's elite athletes for an unparalleled ride.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d7ef3a93-8863-4d9b-9ee1-ba312bc97c18/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4d00dbc1-fcd6-49c7-ad01-19133ea3aea8/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/10ff4e92-ca15-463c-af7c-f7a23403c8b1/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/07044f76-7eef-4e17-a4c5-52acc337c61a/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2e9f9985-c5bf-4a4c-8beb-78f6c559e036/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8cced103-e4c3-4606-924c-e19c9b86dcb3/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1ca2ec85-2078-4c96-9b3d-dc30863996c6/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5146b2c4-5b4d-445a-b24d-e8324e7a4b15/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/37427bbf-e69b-4346-b65d-a0fbcca48edf/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ec40dd49-0c54-4156-a895-ea41973767b4/air-zoom-type-mens-shoe-PZR40V.jpg"
                ]
            },
            "891d4a42-0d8f-4f31-b201-58b3383887c8": {
                "name": "Nike DBreak-Type",
                "price": "$90",
                "category": "Men's Shoes",
                "description": "Deconstruct the past and step into the present with the Nike DBreak-Type. The airy mesh upper and exaggerated stitching add a bold, fresh look onto early Bowerman prototypes pulled from the archives. Retro suede and heel clips designed for support keep you connected to history while the rubber Waffle outsole features flashy angling at the back for a modern look.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg"
                ]
            },
        },
        women: {
            "a86007e6-88d2-4915-a11d-14c9f6083c31": {
                "name": "Nike React Infinity Run Flyknit",
                "price": "$160",
                "category": "Women's Shoes",
                "description": "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Refreshed colors bring the bright energy to your feet while you crush your miles. Lace up and feel the potential, mile after mile.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ccf7f85e-6ee1-40cc-9a40-db3932aed4d8/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/20031c5e-ac39-40d0-b600-16fcac6509f1/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a2945fa2-24a7-4139-abad-1eb0762b75d3/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/009fa505-2c37-4f32-bdf5-5f3fa9d764dc/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/345fc4cc-30ad-4454-9248-a6a99befdccf/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dafcf3a8-b8c4-4496-9462-043f4abc96d9/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e06f98c9-8b62-447a-bf1f-0edc7e2c7242/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cefa7ba1-6909-4055-b498-eddb1afc8209/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg"
                ]
            },
            "58de8449-3d80-41a8-a8c6-b6e07112decd": {
                "name": "Nike Pegasus Trail 2",
                "price": "$130",
                "category": "Women's Shoes",
                "description": "Find your wings on the path less traveled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6663ee6-dc04-442c-9f7d-bdc85163a624/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6215b49b-354d-4a29-8ed9-887019879e73/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/63cc649d-9a6f-4288-9662-59eb3287a728/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9ce6854c-0b8e-48be-8243-2bc534de1a17/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bda3216e-56c5-4147-b4c9-8e792e1a2e61/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ac7885c9-977d-4071-977f-54bccad08195/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/711e86d3-44cd-42e6-8761-0ba33671226c/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fd60053b-96bb-4f30-b6fe-a284220000a5/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg"
                ]
            },
            "cbebc1ff-2b06-4b8e-98a9-7d146c7ba805": {
                "name": "Nike Juniper Trail",
                "price": "$70",
                "category": "Women's Shoes",
                "description": "The Nike Juniper Trail delivers a consistent ride for your off-road runs. It's built for rocky trails, helping you stay focused on the path ahead. Tough traction mixes with a lightweight design so you can keep moving when tackling challenging terrain.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e7ee55cb-3644-45a9-aa78-46d6315082ea/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/f22600e6-72f5-4db2-8f68-fa5e2f24baf0/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/22bb74d5-b2c6-4768-a116-cff5446b74ff/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ad6a18c9-ea1e-4fa0-bdf2-1fecce510053/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fcf44f63-3298-44f6-b281-88bd28d368d5/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/94515dc8-c9e3-4348-b061-ef089913438f/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6047db6f-6cd3-4219-8990-54d51a162d01/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c60fba76-59b6-4037-8cf3-ff8c97905c48/juniper-trail-womens-trail-shoe-wMLK7B.jpg"
                ]
            },
        },
        kids: {
            "076890ba-651c-435b-bb84-e0627b2ba76d": {
                "name": "Kyrie 6",
                "price": "$80",
                "category": "Kids’ Shoes",
                "description": "Kyrie's game is serious business, but you know he's having a blast. The Kyrie 6 for little kids has all the speedy, sporty style of the shoe he wears that's made to play every day.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d9bc1f59-4fc1-4563-8a64-cfacccfbd048/kyrie-6-little-kids-shoe-nkWtfT.jpg"
                ]
            },
            "6d79e034-969d-4bf8-a182-98b8ca566182": {
                "name": "Nike Force 1",
                "price": "$62",
                "category": "Kids’ Shoes",
                "description": "The legend lives on in the Nike Force 1, with an iconic look and plenty of cushioning for comfort with every step.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/be5ce5a3-cde7-42b3-aad9-e411711e66e7/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/377b92d2-ceeb-4e3c-ae91-97091cf83370/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d74203ad-bb66-48fb-9171-58d998b85b60/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/af8dddd0-7220-46f4-96fd-9811fd1552fc/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/57bb6fc8-ce3f-47f4-94e4-73611c3046f2/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5f5bde57-5e83-4135-96ae-bff5cf0b7020/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c1cd78c9-6328-4d5c-a55d-4e6c91a418c4/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/812f2aa5-95a8-4423-8195-91f8f23d39ab/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e4e4382a-6171-4b62-81fd-0efdf56c46b2/force-1-little-kids-shoe-BLTBRxK1.jpg"
                ]
            },
            "94855c9b-dc57-49a9-9895-699f71fabfd0": {
                "name": "Nike Kawa",
                "price": "$20.77",
                "category": "Kids’ Shoes",
                "description": "The Nike Kawa Little/Big&nbsp;Kids' Slide&nbsp;helps feet recover after play and competition with a strap that conforms to the foot, ultra-soft cushioning and a flexible outsole.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/7f5c2f80-3187-44e3-9077-4bec7bc4f694/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6352d0c1-343a-4c0c-ad2b-54c59dd308af/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/lbwaxtjhny4w49l2uuyc/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/59d77730-4d28-4397-b703-ed90d3e161f1/kawa-little-big-kids-slide-VXZxnZ.jpg"
                ]
            },
        },
        shoesById: {
            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc": {
                "name": "Air Jordan 1 Mid",
                "price": "$115",
                "category": "Men's Shoes",
                "description": "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg"
                ]
            },
            "d52fd362-1080-46b3-a43c-d64f7a6825ab": {
                "name": "Nike Air Zoom-Type",
                "price": "$150",
                "category": "Men's Shoes",
                "description": "Celebrate Nike innovation and sports heritage in the Nike Air Zoom-Type. It brings a deconstructed, DIY aesthetic to the streets with its zigzag stitching, and colors inspired by Japan's street culture. The stacked foam at the heel and contrast-colored Zoom Air cushioning at the forefoot use the same technology used by the world's elite athletes for an unparalleled ride.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d7ef3a93-8863-4d9b-9ee1-ba312bc97c18/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4d00dbc1-fcd6-49c7-ad01-19133ea3aea8/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/10ff4e92-ca15-463c-af7c-f7a23403c8b1/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/07044f76-7eef-4e17-a4c5-52acc337c61a/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2e9f9985-c5bf-4a4c-8beb-78f6c559e036/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8cced103-e4c3-4606-924c-e19c9b86dcb3/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1ca2ec85-2078-4c96-9b3d-dc30863996c6/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5146b2c4-5b4d-445a-b24d-e8324e7a4b15/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/37427bbf-e69b-4346-b65d-a0fbcca48edf/air-zoom-type-mens-shoe-PZR40V.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ec40dd49-0c54-4156-a895-ea41973767b4/air-zoom-type-mens-shoe-PZR40V.jpg"
                ]
            },
            "891d4a42-0d8f-4f31-b201-58b3383887c8": {
                "name": "Nike DBreak-Type",
                "price": "$90",
                "category": "Men's Shoes",
                "description": "Deconstruct the past and step into the present with the Nike DBreak-Type. The airy mesh upper and exaggerated stitching add a bold, fresh look onto early Bowerman prototypes pulled from the archives. Retro suede and heel clips designed for support keep you connected to history while the rubber Waffle outsole features flashy angling at the back for a modern look.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/2321ca0e-db85-4536-99e6-a1460dbbfe38/dbreak-type-mens-shoes-WLqGdp.jpg"
                ]
            },
            "a86007e6-88d2-4915-a11d-14c9f6083c31": {
                "name": "Nike React Infinity Run Flyknit",
                "price": "$160",
                "category": "Women's Shoes",
                "description": "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Refreshed colors bring the bright energy to your feet while you crush your miles. Lace up and feel the potential, mile after mile.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ccf7f85e-6ee1-40cc-9a40-db3932aed4d8/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/20031c5e-ac39-40d0-b600-16fcac6509f1/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a2945fa2-24a7-4139-abad-1eb0762b75d3/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/009fa505-2c37-4f32-bdf5-5f3fa9d764dc/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/345fc4cc-30ad-4454-9248-a6a99befdccf/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dafcf3a8-b8c4-4496-9462-043f4abc96d9/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e06f98c9-8b62-447a-bf1f-0edc7e2c7242/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cefa7ba1-6909-4055-b498-eddb1afc8209/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg"
                ]
            },
            "58de8449-3d80-41a8-a8c6-b6e07112decd": {
                "name": "Nike Pegasus Trail 2",
                "price": "$130",
                "category": "Women's Shoes",
                "description": "Find your wings on the path less traveled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6663ee6-dc04-442c-9f7d-bdc85163a624/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6215b49b-354d-4a29-8ed9-887019879e73/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/63cc649d-9a6f-4288-9662-59eb3287a728/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9ce6854c-0b8e-48be-8243-2bc534de1a17/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bda3216e-56c5-4147-b4c9-8e792e1a2e61/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ac7885c9-977d-4071-977f-54bccad08195/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/711e86d3-44cd-42e6-8761-0ba33671226c/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fd60053b-96bb-4f30-b6fe-a284220000a5/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg"
                ]
            },
            "cbebc1ff-2b06-4b8e-98a9-7d146c7ba805": {
                "name": "Nike Juniper Trail",
                "price": "$70",
                "category": "Women's Shoes",
                "description": "The Nike Juniper Trail delivers a consistent ride for your off-road runs. It's built for rocky trails, helping you stay focused on the path ahead. Tough traction mixes with a lightweight design so you can keep moving when tackling challenging terrain.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e7ee55cb-3644-45a9-aa78-46d6315082ea/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/f22600e6-72f5-4db2-8f68-fa5e2f24baf0/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/22bb74d5-b2c6-4768-a116-cff5446b74ff/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ad6a18c9-ea1e-4fa0-bdf2-1fecce510053/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fcf44f63-3298-44f6-b281-88bd28d368d5/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/94515dc8-c9e3-4348-b061-ef089913438f/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6047db6f-6cd3-4219-8990-54d51a162d01/juniper-trail-womens-trail-shoe-wMLK7B.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c60fba76-59b6-4037-8cf3-ff8c97905c48/juniper-trail-womens-trail-shoe-wMLK7B.jpg"
                ]
            },
            "076890ba-651c-435b-bb84-e0627b2ba76d": {
                "name": "Kyrie 6",
                "price": "$80",
                "category": "Kids’ Shoes",
                "description": "Kyrie's game is serious business, but you know he's having a blast. The Kyrie 6 for little kids has all the speedy, sporty style of the shoe he wears that's made to play every day.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d9bc1f59-4fc1-4563-8a64-cfacccfbd048/kyrie-6-little-kids-shoe-nkWtfT.jpg"
                ]
            },
            "6d79e034-969d-4bf8-a182-98b8ca566182": {
                "name": "Nike Force 1",
                "price": "$62",
                "category": "Kids’ Shoes",
                "description": "The legend lives on in the Nike Force 1, with an iconic look and plenty of cushioning for comfort with every step.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/be5ce5a3-cde7-42b3-aad9-e411711e66e7/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/377b92d2-ceeb-4e3c-ae91-97091cf83370/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d74203ad-bb66-48fb-9171-58d998b85b60/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/af8dddd0-7220-46f4-96fd-9811fd1552fc/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/57bb6fc8-ce3f-47f4-94e4-73611c3046f2/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5f5bde57-5e83-4135-96ae-bff5cf0b7020/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c1cd78c9-6328-4d5c-a55d-4e6c91a418c4/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/812f2aa5-95a8-4423-8195-91f8f23d39ab/force-1-little-kids-shoe-BLTBRxK1.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e4e4382a-6171-4b62-81fd-0efdf56c46b2/force-1-little-kids-shoe-BLTBRxK1.jpg"
                ]
            },
            "94855c9b-dc57-49a9-9895-699f71fabfd0": {
                "name": "Nike Kawa",
                "price": "$20.77",
                "category": "Kids’ Shoes",
                "description": "The Nike Kawa Little/Big&nbsp;Kids' Slide&nbsp;helps feet recover after play and competition with a strap that conforms to the foot, ultra-soft cushioning and a flexible outsole.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/7f5c2f80-3187-44e3-9077-4bec7bc4f694/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6352d0c1-343a-4c0c-ad2b-54c59dd308af/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/lbwaxtjhny4w49l2uuyc/kawa-little-big-kids-slide-VXZxnZ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/59d77730-4d28-4397-b703-ed90d3e161f1/kawa-little-big-kids-slide-VXZxnZ.jpg"
                ]
            },
        },
    },
    cart: [
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
            includedInSum: true,
        },
    ],
};

const createMockingStore = () => configureStore({
    reducer: rootReducer,
    preloadedState: initialTestState,
});

export default createMockingStore;