import Section from "./Section";


function Comments({ comments }) {

    return (
        <div className="flex flex-col gap-4 p-4">
            {comments.map((ele) => (
                <div key={ele.id}>
                    <Section ele={ele} />
                </div>
            ))}
        </div>
    );
}

export default Comments;
