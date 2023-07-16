const products = [
    {
        id: "1",
        title: "Numero zero",
        author: "Umberto Eco",
        price: 1200,
        language: "italiano",
        cover: "numero_zero.jpg",
        stock: 15,
        category: "e-book"
    },
    {
        id: "2",
        title: "L'ospite",
        author: "Giorgio Faletti",
        price: 895,
        language: "italiano",
        cover: "lospite.jpg",
        stock: 24,
        category: "e-book"
    },
    {
        id: "3",
        title: "La caccia al tesoro",
        author: "Andrea Camilleri",
        price: 1125,
        language: "italiano",
        cover: "la_caccia_al_tesoro.jpg",
        stock: 5,
        category: "usado"
    },
    {
        id: "4",
        title: "Il manipolatore",
        author: "Michael Robotham",
        price: 1100,
        language: "italiano",
        cover: "il_manipolatore.jpg",
        stock: 10,
        category: "usado"
    },
    {
        id: "5",
        title: "L'isola del giorno prima",
        author: "Umberto Eco",
        price: 840,
        language: "italiano",
        cover: "isola_del_giorno_prima.jpg",
        stock: 23,
        category: "nuevo"
    },
    {
        id: "6",
        title: "La muerte del comendador",
        author: "Haruki Murakami",
        price: 2013,
        language: "español",
        cover: "la_muerte_del_comendador.jpg",
        stock: 15,
        category: "nuevo"
    },
    {
        id: "7",
        title: "Los crímenes de Alicia",
        author: "Guillermo Martínez",
        price: 965,
        language: "español",
        cover: "crimenes_de_alicia.jpg",
        stock: 39,
        category: "e-book"
    },
    {
        id: "8",
        title: "La trilogía de Nueva York",
        author: "Paul Auster",
        price: 1500,
        language: "español",
        cover: "trilogia_de_nueva_york.jpg",
        stock: 3,
        category: "usado"
    },
    {
        id: "9",
        title: "Doña Flor y sus dos maridos",
        author: "Jorge Amado",
        price: 920,
        language: "español",
        cover: "dona_flor_y_sus_dos.jpg",
        stock: 4,
        category: "usado"
    },
    {
        id: "10",
        title: "Sin rastro",
        author: "Michael Robotham",
        price: 1400,
        language: "español",
        cover: "sin_rastro.jpg",
        stock: 21,
        category: "nuevo"
    },
    {
        id: "11",
        title: "Single and Single",
        author: "John Le Carre",
        price: 1325,
        language: "inglés",
        cover: "single_and_single.jpg",
        stock: 2,
        category: "usado"
    },
    {
        id: "12",
        title: "Dune",
        author: "Frank Herbert",
        price: 2400,
        language: "inglés",
        cover: "dune.jpeg",
        stock: 20,
        category: "e-book"
    },
    {
        id: "13",
        title: "It",
        author: "Stephen King",
        price: 2560,
        language: "inglés",
        cover: "it.jpg",
        stock: 11,
        category: "nuevo"
    },
    {
        id: "14",
        title: "Dreamcatcher",
        author: "Stephen King",
        price: 2500,
        language: "inglés",
        cover: "dreamcatcher.jpg",
        stock: 23,
        category: "e-book"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod)=>prod.id===productId))
        }, 500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=>prod.category===categoryId))
        }, 500)
    })
};
