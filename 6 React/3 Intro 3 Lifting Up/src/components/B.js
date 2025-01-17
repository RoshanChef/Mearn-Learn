import C from "./C"

function B({ a_fnx }) {
    function b_fnx() {
        console.log('B function .. ');
        a_fnx();
    }
    
    return (
        <div style={{ background: 'orange', color: 'blue', padding: '1rem' }}>
            B Element
            <C b_fnx={b_fnx} ></C>
        </div>
    )
}

export default B
