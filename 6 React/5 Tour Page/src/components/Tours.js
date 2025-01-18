import './Tours.css'
import Card from './Card'

function Tours({ tours, remover }) {
    return (
        <div>
            <div className='text-center  m-auto font-semibold text-xl '>
                <h2 className='border-blue-500 border-dashed border-4 rounded inline-block px-14 py-4'>Plan With Tours</h2>
            </div>
            <div className='grid grid-rows-2 grid-cols-3 place-items-center'>
                {
                    tours.map((ele) => {
                        return <Card key={ele.id} {...ele} remover={remover} />
                    })
                }
            </div>
        </div >

    )
}

export default Tours; 