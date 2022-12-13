export const productos = [
  {
    id: '1',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio:'100',
    stock: '100',
    hastash:'',
    foto: '../'
  },

  {
    id: '2',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../'
  },

  {
    id: '3',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/LimpiezaPellingQuimico.png'
  },

  {
    id: '4',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/shinefacial.png'
  },

  {
    id: '5',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: 'sdkljdskjlkjfd',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/limpiezaDermaplaning.png'
  },

  {
    id: '6',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/limpiezaSoft.png'
  },

  {
    id: '7',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/Antiage.png'
  },

  {
    id: '8',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/embarazada.png'
  },

  {
    id: '9',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/shinefacial.png'
  },

  {
    id: '10',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/shinefacial.png'
  },

  {
    id: '11',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/shinefacial.png'
  },

  {
    id: '12',
    Name: 'LimpiezaFacialProfunda',
    Descripcion: '',
    Precio: '100',
    Stock: '',
    hastash: '',
    foto: '../../public/assets/shinefacial.png'
  },

]         

export const gFetch = (id) => {
  return new Promise((resolve) => {
    //acciones
    setTimeout(() => {
      resolve(id ? productos.find (prod => prod.id === id): productos);
    },3000)

})
}