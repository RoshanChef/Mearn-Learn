import React from 'react'

const Childcomponent = React.memo(({ buttonName, handler }) => {
    console.log('child component rendered ... ')
    return (
        <div>
            <button onClick={handler}>
                {buttonName}
            </button>
        </div>
    )
});


export default Childcomponent
