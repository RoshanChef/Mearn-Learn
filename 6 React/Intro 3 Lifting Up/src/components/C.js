function C({ b_fnx }) {
    let obj = {
        title: 'React Lifting Up',
        domain: 1000
    }

    //directly call
    function clickHandler() {
        console.log('C function clickHandler .. ');
        b_fnx(obj);
    }

    return (
        <div onClick={clickHandler} className="c" style={{ background: 'black', color: 'white', padding: '1rem' }}>
            C Element ..
        </div>
    )
}

export default C
