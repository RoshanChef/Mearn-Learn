import { useForm } from 'react-hook-form';
function App() {

	const { register, handleSubmit } = useForm();
	function sum(data) {
		console.log('Data is ', data);
	}

	return (
		<div>
			<form onSubmit={handleSubmit(sum)}>

			</form>


		</div>
	)
}

export default App;