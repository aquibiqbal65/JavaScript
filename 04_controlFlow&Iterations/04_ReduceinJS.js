const ShoppinCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "js course",
        price: 3999
    }    
]

const priceToPay = ShoppinCart.reduce((acc,item) => acc+item.price,0)
console.log(`Total of the added items: ₹${priceToPay}`);