import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { Card, Modal,Button } from "react-bootstrap";

function Note({data}) {
    const [showCard, setShowCard] = useState(false);

    const handelCardClick = () => {
        setShowCard(true)
    }


    return (
        <div className="note">
            <Card onClick={handelCardClick} style={{ width: '18rem', cursor: "pointer" }}>
                <Card.Body>
                <Card.Title>{data.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle>
                <Card.Text>{data.content}</Card.Text>
                </Card.Body>
            </Card>
            <Modal
                show={showCard}
                onHide={() => setShowCard(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{data.author}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCard(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}



export default Note;
