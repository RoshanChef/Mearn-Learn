import { useSelector } from "react-redux";

function Products() {
    const post = useSelector((state) => state.product);

    const ele = post.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <h3>{item.name}</h3>
            <h5>{item.price}</h5>
        </div>
    ))

    return <>
        {ele}
    </>
}

export default Products;