
export const ItemDetail = ({producto}) => {
  console.log(producto)




  return (
    <div>
       <h3>{producto.name}</h3>
      <img src={producto.foto}></img>
       


    </div>

  )
}

