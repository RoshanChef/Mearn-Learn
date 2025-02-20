import { useState } from "react";
import Comments from "./components/Comments";
import CommentSec from "./components/CommentSec";

function App() {
	const [comments, setComments] = useState([{ id: 0, content: 'temp', date: 21, like: 1, dislike: 1 }]);
	return (
		<div>
			<CommentSec comments={comments} setComments={setComments} />
			<Comments comments={comments} setComments={setComments} />
		</div>
	);
}

export default App;
