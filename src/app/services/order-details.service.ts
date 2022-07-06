import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  productDetails = [
    {
        id:1,
        productName:"In the Twist Top in Blue",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:400,
        productQuantity: 1,
        productTotal: 400,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/in-the-twist-top-in-blue-416877_540x.jpg?v=1654376728" 
    },
    {
        id:2,
        productName:"A-Game Mom Fit Jeans",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:100,
        productQuantity: 1,
        productTotal: 100,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/a-game-mom-fit-jeans-271086_540x.jpg?v=1654376600"
    },
    {
        id:3,
        productName:"Meet Me At My Place Top In Black",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:600,
        productQuantity: 1,
        productTotal: 600,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/meet-me-at-my-place-top-in-black-767264_540x.jpg?v=1654376734"
    },
    {
        id:4,
        productName:"KAYLEEN Learning the Ropes Lace-Up Espadrille Sandals",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:200,
        productQuantity: 1,
        productTotal: 200,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/kayleen-learning-the-ropes-lace-up-espadrille-sandals-741709_540x.jpg?v=1656020632"
    },
    {
        id:5,
        productName:"Sunday Market Dress",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:250,
        productQuantity: 1,
        productTotal: 250,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/sunday-market-dress-416118_540x.jpg?v=1654376782"
    },
    {
        id:6,
        productName:"Judy Blue Lauren Hi-Waisted White Skinny Jeans",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:80,
        productQuantity: 1,
        productTotal: 80,      
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/judy-blue-lauren-hi-waisted-white-skinny-jeans-575841_540x.jpg?v=1654376727"
    },
    {
        id:7,
        productName:"Meet Me At My Place Top In Black",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:600,
        productQuantity: 1,
        productTotal: 600,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/meet-me-at-my-place-top-in-black-767264_540x.jpg?v=1654376734"
    },
    {
        id:8,
        productName:"Ivy Layered Chain Necklace",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:500,
        productQuantity: 1,
        productTotal: 500,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/ivy-layered-chain-necklace-732686_540x.jpg?v=1654376722"
    },
    {
        id:9,
        productName:"Meet Me At My Place Top In White",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:200,
        productQuantity: 1,
        productTotal: 200,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/meet-me-at-my-place-top-in-white-571336_540x.jpg?v=1654376731"
    },
    {
        id:10,
        productName:"Views from the Villa Dress",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:150,
        productQuantity: 1,
        productTotal: 150,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/views-from-the-villa-dress-322321_540x.jpg?v=1654376838"
    },
    {
        id:11,
        productName:"Ask Away Top",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:50,
        productQuantity: 1,
        productTotal: 50,      
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/ask-away-top-123458_540x.jpg?v=1654376598"
    },
    {
        id:12,
        productName:"Under Cover Swim Cover-up In Coral",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:40,
        productQuantity: 1,
        productTotal: 40,      
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/under-cover-swim-cover-up-in-coral-143509_540x.jpg?v=1654376791"
    },
    {
        id:13,
        productName:"KAYLEEN Learning the Ropes Lace-Up Espadrille Sandals",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:200,
        productQuantity: 1,
        productTotal: 200,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/walks-on-the-riviera-romper-448668_540x.jpg?v=1656539592"
    },
    {
        id:14,
        productName:"A-Game Mom Fit Jeans",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:100,
        productQuantity: 1,
        productTotal: 100,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/judy-blue-florence-high-waist-destroyed-boyfriend-jeans-190648_540x.jpg?v=1656539782"
    },
    {
        id:15,
        productName:"Meet Me At My Place Top In Black",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:600,
        productQuantity: 1,
        productTotal: 600,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/gia-faux-wrap-jumpsuit-493214_540x.jpg?v=1656539714"
    },
    {
        id:16,
        productName:"In the Twist Top in Blue",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:400,
        productQuantity: 1,
        productTotal: 400,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/capture-the-moment-top-in-pink-478858_540x.jpg?v=1656539654"
    },
    {
        id:17,
        productName:"Sunday Market Dress",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:250,
        productQuantity: 1,
        productTotal: 250,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/sf-coverable-dress-372543_540x.jpg?v=1656539839"
    },
    {
        id:18,
        productName:"Judy Blue Lauren Hi-Waisted White Skinny Jeans",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:80,
        productQuantity: 1,
        productTotal: 80,       
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/backyard-picnic-top-660284_540x.jpg?v=1656539656"
    },
    {
        id:19,
        productName:"Meet Me At My Place Top In Black",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:600,
        productQuantity: 1,
        productTotal: 600,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/first-class-pants-in-olive-786288_540x.jpg?v=1656539712"
    },
    {
        id:20,
        productName:"Ivy Layered Chain Necklace",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:500,
        productQuantity: 1,
        productTotal: 500,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/crossing-over-tie-dye-maxi-731210_540x.jpg?v=1656539719"
    },
    {
        id:21,
        productName:"Meet Me At My Place Top In White",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:200,
        productQuantity: 1,
        productTotal: 200,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/judy-blue-hi-rise-button-fly-skinny-101898_540x.jpg?v=1654376728"
    },
    {
        id:22,
        productName:"Views from the Villa Dress",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:150,
        productQuantity: 1,
        productTotal: 150,
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/judy-blue-embroidered-pocket-cutoffs-215284_540x.jpg?v=1654376727"
    },
    {
        id:23,
        productName:"Ask Away Top",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:50,
        productQuantity: 1,
        productTotal: 50,       
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/top-floor-tank-575577_540x.jpg?v=1654376783"
    },
    {
        id:24,
        productName:"Under Cover Swim Cover-up In Coral",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:40,
        productQuantity: 1,
        productTotal: 40,       
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/orange-sherbet-tie-dye-top-378337_540x.jpg?v=1654376734"
    },
    {
        id:25,
        productName:"Under Cover Swim Cover-up In Coral",
        productDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
        productPrice:40,
        productQuantity: 1,
        productTotal: 40,        
        productImg:"https://cdn.shopify.com/s/files/1/0603/7051/8222/products/pink-promise-bodysuit-174999_540x.jpg?v=1654376779"
    }
    ]    
}
