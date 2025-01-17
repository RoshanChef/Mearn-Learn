import B from "./B"

function A({ fnx }) {
    function a_fnx(){
        console.log('A function ..');
        fnx(); 
    }

    return (
        <div style={{ background: 'wheat', fontSize: '2rem', color: 'black', padding: '1rem' }}>
            A Element
            <B a_fnx={a_fnx}></B>
        </div>
    )
}

export default A
