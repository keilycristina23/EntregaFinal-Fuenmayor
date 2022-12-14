export const productos = [
  {
    id: '1',
    name: 'LIMPIEZA FACIAL PROFUNDA',
    precio: '100',
    categoria: 'tratamientosFaciales',
    foto: '/public/assets/limpiezafacialprofunda.png'
  },

  {
    id: '2',
    name: 'SHINE FACIAL',
    precio: '100',
    categoria:'tratamientosFaciales',
    foto: '/public/assets/shinefacial.png'
  },

  {
    id: '3',
    name: 'LIMPIEZA PROFUNDA CON DERMAPLANING',
    precio: '100',
    categoria:'tratamientosFaciales',
    foto: '../../public/assets/limpiezaDermaplaning.png'
  },


  {
    id: '4',
    name: 'LIMPIEZA SOFT',
    precio: '100',
    categoria:'tratamientosFaciales',
    foto: '../../public/assets/limpiezaSoft.png'
  },


  {
    id: '5',
    name: 'LIMPIEZA SOFT PARA EMBARAZADAS',
    precio: '100',
    categoria:'tratamientosFaciales',
    foto: '../../public/assets/embarazada.png'
  },

  {
    id: '6',
    name: 'LIMPIEZA PROFUNDA CON PEELLING QUIMICO',
    precio: '100',
    categoria:'tratamientosFaciales',
    foto: '../../public/assets/LimpiezaPellingQuimico.png'
  },


  { 
    id: '7',
    name: 'LIMPIEZA PROFUNDA DE ESPALDA',
    precio: '100',
    categoria: 'tratamientosCorporales',
    foto: '/public/assets/corporal.png'
  },

  {
    id: '8',
    name: 'LIMPIEZA PROFUNDA DE ESPALDA CON PEELING QUIMICO',
    precio: '100',
    categoria:'tratamientosCorporales',
    foto: '/public/assets/limpiezaespaldapeeling.png'
  },

  {
    id: '9',
    name: 'LIMPIEZA PROFUNDA DE ESPALDA Y GLÚTEOS CON PEELING QUIMICO',
    precio: '100',
    categoria:'tratamientosCorporales',
    foto: '../../public/assets/limpiezaespaldaglúteospeelingqui.png'
  },


  {
    id: '10',
    name: 'LIMPIEZA PROFUNDA DE ESPALDA CON DERMAPLANING+ ACIDOS',
    precio: '100',
    categoria:'tratamientosCorporales',
    foto: '../../public/assets/dermaplaning.acidos.png',
  },
  
  
  {
    id: '11',
    name: 'RENOVACIÓN CORPORAL',
    precio: '100',
    categoria:'tratamientosCorporales',
    foto: '../../public/assets/renovacióncorporal.png',
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
      const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
      setTimeout(() => {
          resolve(productosFiltrados);
      }, 2000);
  });
}

export const getProducto = (Id) => {
  return new Promise((resolve) => {
      const prod = productos.find(p => p.id === parseInt(Id))
      setTimeout(() => {
          resolve(prod)
      }, 1000)
  })
}