
import dumpling1 from "./product-image/starterDumplings1.jpg"
import dumpling2 from "./product-image/starterDumplings2.jpg"
import vegetable from "./product-image/vegetable bowls.jpg"
import vegtableDonburi from "./product-image/Vegetable-donburi.jpg"
import Teriyaki from "./product-image/Teriyaki.jpg"
import tonkotsu from "./product-image/tonkotsu ramen.jpg"
import Phlidaephia from "./product-image/Philadelphia-roll.jpg" 
import Fransicsco from "./product-image/San Francisco Roll.avif"
import dragon from "./product-image/dragon roll.webp"
import NigriPlate from "./product-image/Nigiri Plate.jpeg"


const DrinkData = [
    {
        id:1,
        name:"Sapporo Beer",
        description:"Premium Japanese beer.",
        price:8.50
    },

    {
        id:2,
        name:"Kokuryu Sake ",
        description:"Daidinjo sake with a mild aroma and subtle floral notes.",
        price:9
    },

    {
        id:3,
        name:"Tozai Sake ",
        description:"Smooth, fruity, and cloudy sake, perfect for pairing.",
        price:30
    },

    {
        id:4,
        name:"Juyodai Sake",
        description:"An easy-drinking premium sake with a rich flavor",
        price:35.5
    },


]

const StarterData =[
    {
        id:1,
        image:dumpling1,
        name:"Dumplings",
        price:8,
        description:"Choose from a variety of fillings, including vegetables, chicken, and pork. With a dipping sauce and garnish on the side."
    },

    {
        id:2,
        image:dumpling2,
        name:"Chef Special",
        price:12,
        description:"Avocado, lime, salmon, mushrooms and garnish served with pickled ginger and spring onions."
    },


]


const BowlData= [
    {
        id:1,
        image:vegetable,
        name:"VegeTable Pho",
        price:7,
        description:"It is a steaming hot spicy, light, and fragrant noodle soup."
    },

    {
        id:2,
        image:tonkotsu,
        name:"Tonkatsu Ramen ",
        price:9,
        description:"Modern fusion dish combining rice noodles with a classic rice bowl. Vegetarian option available."
    },

    {
        id:3,
        image:vegtableDonburi,
        name:"Vermicelli Donburi",
        price:9,
        description:"Modern fusion dish combining rice noodles with a classic rice bowl. Vegetarian option available."
    },

    {
        id:4,
        image:Teriyaki,
        name:"Teriyaki Donburi",
        price:8,
        description:"Our bespoke ramen comes with handmade noodles, a wide array of toppings and homemade broth."
    },

    
]


const SushiData= [
    {
        id:1,
        image:Phlidaephia,
        name:"Philadelphia Roll",
        price:8,
        description:"A modern classic. Sushi roll with salmon, avocado, cream cheese, and surimi sticks."
    },

    {
        id:2,
        image:Fransicsco,
        name:"San Francisco Roll",
        price:7,
        description:"Inside out roll with surimi, tuna, cream cheese, sesame seeds and fried onions."
    },

    {
        id:3,
        image:dragon,
        name:"Dragon Roll",
        price:9,
        description:"Inside out roll with fried king prawns, avocado, Japanese omelet and cream cheese."
    },

    {
        id:4,
        image:NigriPlate,
        name:"Nigiri Plate",
        price:15,
        description:"A selection of our finest nigiri: choose from salmon, tuna, tilapia, surimi, prawns and vegetarian options."
    },

    
]


export{
    DrinkData,
    StarterData,
    BowlData,
    SushiData
} 