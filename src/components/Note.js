import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import "../App.css";
import MainCard from "./MainCard";

function Note({ data }) {
	const [showCard, setShowCard] = useState(false);

	const handelCardClick = () => {
		setShowCard(true);
	};

	return (
		<>
			<Container fluid={TextTrackCue}>
				<MainCard
					handelCardClick={handelCardClick}
					date={data.date}
					content={data.content}
					author={data.author}
				/>
			</Container>
			<Modal
				show={showCard}
				onHide={() => setShowCard(false)}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>A note from {data.author}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{data.content}</p>
				</Modal.Body>
				<Modal.Footer>
					<p>{data.date}</p>
					<Button variant='secondary' onClick={() => setShowCard(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Note;
