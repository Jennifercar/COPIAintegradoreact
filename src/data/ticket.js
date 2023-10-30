export const productsData = [
    {
      id: 1,
      name: "Sabina",
      date: "12 Marzo ",
      category: "Conciertos",   
      cardImg: "/img/imgProductos/Sabina_CTP_HOME-MOVISTAR-ARENA.jpg",
      precio:5000,
      quantity:1,
    },
    {
      id: 2,
      name: "Camilo",
      date: "16 de marzo",
      category: "Conciertos",  
      cardImg: "/img/imgProductos/Camilo.jpg",
      precio: 7500,
      quantity:1,
    },
    {
      id: 3,
      name: "David Guetta",
      date: "9 de febrero",
      category: "Conciertos",  
      cardImg: "/img/imgProductos/davidguetta.jpg",
      precio: 4500,
      quantity:1,
    },
    {
      id: 4,
      name: "Alejandro Sanz",
      date: "21 de enero",
      category: "Conciertos",  
      cardImg: "/img/imgProductos/Sanz.jpg",
      precio: 8000,
      quantity:1,
    },
    {
      id: 5,
      name: "Reik",
      date: "6 de marzo",
      category: "Conciertos",  
      cardImg: '/img/imgProductos/Reik.jpg',
      precio: 7500,
      quantity:1,
    },
    {
      id: 6,
      name: "Connie Ballarini",
      date: "14 de febrero",
      category: "Teatro",
      cardImg: "/img/imgProductos/connie.jpg",
      precio: 3000,
      quantity:1,
    },
    {
      id: 7,
      name: "La Granja",
      date: "4 Marzo",
      category: "Teatro",
      cardImg: "/img/imgProductos/lagranja.jpg",
      precio: 1000,
      quantity:1,
    },
    {
      id: 8,
      name: "Alejandro Fernandez",
      date: "6 de marzo",
      category: "Conciertos",
      cardImg: "/img/imgProductos/385X250-2.jpg",
      precio: 6000,
      quantity:1,
    },
    {
      id: 9,
      name: "Lali",
      date: "4 de marzo",
      category: "Conciertos",
      cardImg: "/img/imgProductos/Lali3DIC600.jpg",
      precio: 4500,
      quantity:1,
    },
  
    {
      id: 10,
      name: "Los Fabulosos Cadillacs",
      date: "26 Mayo",
      category: "Conciertos",
      cardImg: "/img/imgProductos/LFC.385x250-1.jpg",
      precio: 4000,
      quantity:1,
    },
    {
      id: 11,
      name: "Mi madre mi novia y yo",
      date: "22 de enero",
      category: "Teatro",
      cardImg: "/img/imgProductos/mi-madre-mi-novia-y-yo.jpg",
      precio: 2000,
      quantity:1,
    },
    {
      id: 12,
      name: "Convivencia obligada",
      date: "26 de Marzo",
      category: "Teatro",
      cardImg: "/img/imgProductos/convivencia-obligada.jpg",
      precio: 3000,
      quantity:1,
    },
    {
      id: 13,
      name: "El divorcio",
      date: "9 de febrero",
      category: "Teatro",
      cardImg: "/img/imgProductos/el-divorcio.jpg",
      precio: 3000,
      quantity:1,
    },
    {
      id: 14,
      name: "Parque Lezama",
      date: "19 de febrero",
      category: "Teatro",
      cardImg: "/img/imgProductos/parque-lezama.jpg",
      precio: 2000,
      quantity:1,
    },
  
    {
      id: 15,
      name: "Male Guinzburg",
      date: "15 de marzo",
      category: "Teatro",
      cardImg: "/img/imgProductos/male-guinzburg---unipersonal.jpg",
      precio: 3000,
      quantity:1,
    },
  ];


  export const TotalProductos= productsData.length;

  export const EntradasAgrupadas = productsData.reduce ((acc,item)=> {
   
if ( ! acc[item.category]){
  acc[item.category] = [];

}
acc[item.category] = [...acc[item.category], item];
return acc;

}, {});
  