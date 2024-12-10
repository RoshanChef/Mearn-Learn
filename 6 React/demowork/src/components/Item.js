import './Item.css'

function Item(company) {
    const company_name = company.name;
    return (
        <div>
            <p>{company_name}</p>
            {company.children}
        </div>
    );
}

export default Item;