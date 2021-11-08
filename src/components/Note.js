import {Card } from "react-bootstrap";

function Note(props) {


    return (
        <div className="note">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{props.data.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.data.date}</Card.Subtitle>
                <Card.Text>{props.data.content}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}



export default Note;
