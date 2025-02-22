import React, { useEffect, useState } from 'react';
import data from './data';
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { FaSortNumericUp } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import './app.css';

const App = () => {
	const [value, setVal] = useState(data);
	const [up, setUp] = useState({ num: false, alpha: false });

	function idHandler() {
		let sortedData;
		if (up.num)
			sortedData = [...value].sort((prev, cur) => cur.id - prev.id);
		else
			sortedData = [...value].sort((prev, cur) => prev.id - cur.id);

		setUp((prev) => ({ ...prev, num: !prev.num }));
		setVal(sortedData);
	}

	function alphaHandler() {
		let sortedData;
		if (up.alpha)
			sortedData = [...value].sort((prev, cur) => (prev.name).localeCompare(cur.name));
		else
			sortedData = [...value].sort((prev, cur) => (cur.name).localeCompare(prev.name));
		setVal(sortedData);
		setUp((prev) => ({ ...prev, alpha: !prev.alpha }));
	}

	return (
		<div className="table-container">
			<table>
				<thead className='rounded-full'>
					<tr>
						<th>
							<div className='flex items-center gap-2'>
								Id
								{
									up.num &&
									<FaSortNumericDownAlt onClick={idHandler} />
								}
								{
									!up.num &&
									<FaSortNumericUp onClick={idHandler} />
								}
							</div>
						</th>
						<th>
							<div className='flex items-center gap-2'>Name
								{
									up.alpha &&
									<FaSortAlphaUp onClick={alphaHandler} />
								}
								{
									!up.alpha &&
									<FaSortAlphaDownAlt onClick={alphaHandler} />
								}
							</div>
						</th>
						<th>
							Phone
						</th>
						<th>
							Email
						</th>
					</tr>
				</thead >
				<tbody>
					{value.map((val) => (
						<tr key={val.id}>
							<td>{val.id}</td>
							<td>{val.name}</td>
							<td>{val.email}</td>
							<td>{val.phone}</td>
						</tr>
					))}
				</tbody>
			</table >
		</div >
	);
};

export default App;