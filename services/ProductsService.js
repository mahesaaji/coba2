const PRODUCTS = [
    {
        id: 1,
        name: "Burger",
        price: 39,
        image: require("../assets/product_images/phone.jpeg"),
        description:
          "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
        id: 2,
        name: "Pizza",
        price: 79,
        image: require("../assets/product_images/graphics.jpeg"),
        description:
            "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
    id: 3,
    name: "Noodles",
    price: 29,
    image: require("../assets/product_images/laptop.jpg"),
    description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD"
    }
]

//product list page
export function getProducts(){
    return PRODUCTS;
}

//get specific product from id
export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}