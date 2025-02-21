import { useState } from "react";
import Comments from "./components/Comments";
import CommentSec from "./components/CommentSec";

function App() {
	const [comments, setComments] = useState([{ id: 0, content: 'temp', date: 21, like: 0, dislike: 0, reply: [{ id: 0, content: 'Roshan kalmather', date: 22, like: 0, dislike: 0 }] }]);
	return (
		<div className="overflow-y-hidden">
			<div className="flex gap-2 font-bold p-4 text-xl">
				<p>{comments.length}</p>
				<p>Comments</p>
			</div>
			<CommentSec comments={comments} setComments={setComments} />
			<Comments comments={comments} setComments={setComments} />
		</div>
	);
}

export default App;
