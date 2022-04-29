

 const ProductCard = (props) => {

    console.log(props)
  return (
        <div className="productCard mb-4">
            <div className="imageWrapper">
                <img src={props.item.image} />

                <div className="titleWrapper d-flex fw-bold fs-3 justify-content-between my-3">
                    <div className="name">{props.item.name}</div>
                    <div className="cost">
                        <span>$</span>
                        <span>{props.item.price}</span>
                    </div>
                </div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
  )
}



export default ProductCard