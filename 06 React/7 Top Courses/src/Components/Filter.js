import React from 'react'

function Filter(props) {

	let filterData = props.filterData; 
	let category = props.category;
	let setCategory = props.setCategory; 
	
	function filterHandler(title){
		setCategory(title);
	}
	console.log();
	return (
		<div className='w-11/12 flex flex-wrap max-w-max  space-x-4 gap-y-4 mx-auto py-4 justify-center'>
			{filterData.map((val) => {
				return <button key={val.id} onClick={()=>filterHandler(val.title)} className='bg-[#0B1121] hover:bg-opacity-80 text-white transition-all border-[#0B1121] border-2 hover:border-white duration-200  p-2 rounded'> {val.title}</button>
			})}
		</div>
	)
}

export default Filter
