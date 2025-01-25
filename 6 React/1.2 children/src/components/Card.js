
function Card({ children }) {
    return (
        <div
            style={{
                borderRadius: `5px`,
                border: '1px solid #ccc',
                padding: '20px',
                margin: '10px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
            }
            }
        >
            {children}
        </div>
    )
}

export default Card
