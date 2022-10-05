const products = [
    {
        id: '1',
        name: 'The last of us',
        price: 3400,
        category: 'ps4',
        img: 'https://static.wikia.nocookie.net/thelastofus/images/e/ec/LastOfUsRemastered.jpg',
        stock: 10,
        description: 'The last of us para Playstation 4'
    },
    {
        id: '2',
        name: 'Fifa 23',
        price: 25000,
        category: 'xbox-series',
        img: 'https://m.media-amazon.com/images/I/81uM1VoIgPL._SL1500_.jpg',
        stock: 10,
        description: 'Fifa 23 para Xbox Series X/S'
    },
    {
        id: '3',
        name: 'Demon Souls',
        price: 12899,
        category: 'ps5',
        img: 'https://m.media-amazon.com/images/I/81QoNRp5+WL._SL1353_.jpg',
        stock: 10,
        description: 'Demon Souls Remastered para PS5'
    },
    {
        id: '4',
        name: 'Gears 5',
        price: 18000,
        category: 'xboxone',
        img: 'https://m.media-amazon.com/images/I/71FIJJv1wkL._SL1200_.jpg',
        stock: 10,
        description: 'Gears 5 para xbox One'
    },
    {
        id: '5',
        name: 'Splatoon 3',
        price: 16300,
        category: 'switch',
        img: 'https://m.media-amazon.com/images/I/81Y3Mz9MeUL._SL1500_.jpg',
        stock: 10,
        description: 'Splatoon 3 para Nintendo Switch'
    },
    {
        id: '6',
        name: 'God of War 3',
        price: 6000,
        category: 'clasicos',
        img: 'https://expressgame.com.ar/wp-content/uploads/2022/08/god-of-war-3-ps3.jpg',
        stock: 10,
        description: 'God of War 3 para PS3, Clasicos'
    },
]

export const getProducts = (categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(categoryId? products.filter(prod => prod.category === categoryId) : products)
        },1000)
    })
}
export const getProduct = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        },1000)
    })
}