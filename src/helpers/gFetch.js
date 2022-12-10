const productos = [
  { id: '1', Name: 'LimpiezaFacialProfunda', Descripcion: '', stock: '100', Foto: '../../assets/limpiezafacialprofunda.png' },
  { id: '2', Name: 'LimpiezaFacialProfunda', Descripcion: '', stock: '100', Foto: '../../assets/limpiezafacialprofunda.png' },
  { id: '3', Name: 'LimpiezaFacialProfunda', Descripcion: '', stock: '100', Foto: '../../assets/limpiezafacialprofunda.png' },
  { id: '4', Name: 'LimpiezaFacialProfunda', Descripcion: '', stock: '100', Foto: '../../assets/limpiezafacialprofunda.png' },

]

export const gFetch = () => {
  return new Promise((resolve, reject) => {
  //acciones
  resolve (productos)
})
}
  
