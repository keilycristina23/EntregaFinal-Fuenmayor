export const productos = [
  {
    id: '1',
    name: 'Limpieza Facial Profunda',
    descripcion: 'Shaalalalala',
    precio: '100',
    categoria: 'tratamientosFaciales',
    foto: '/public/assets/limpiezafacialprofunda.png'
  },

  {
    id: '2',
    name: 'Shine Facial',
    descripcion: 'Ohhh ohhhhh ohhh',
    precio: '100',
    categoria:'tratamientosCorporales',
    foto: '/public/assets/shinefacial.png'
  },

  {
    id: '3',
    name: 'LimpiezaFacialProfunda',
    descripcion: '',
    precio: '100',
    categoria:'tratmientosCorporales',
    foto: '../../public/assets/LimpiezaPellingQuimico.png'
  },


]         

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      
    }, 2000);
  });
}

export const getProductosCategoria = (categoria) => {
  return new Promise((resolve) => {
      const productos = productos.filter(producto => producto.categoria === categoria);
      setTimeout(() => {
          resolve(productos);
      }, 2000);
  });
}

export const getProducto = (id) => {
  return new Promise((resolve) => {
      const prod = productos.find(p => p.id === parseInt(id))
      setTimeout(() => {
          resolve(prod)
      }, 1000)
  })
}