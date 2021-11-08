




function Note(props) {

    return (
        <div className="note">
            <h3>{props.data.content}</h3>
            <h3>{props.data.author}</h3>
            <h3>{props.data.date}</h3>
        </div>
    );
}



export default Note;
