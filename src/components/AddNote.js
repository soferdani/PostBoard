import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function AddNote({ handelAddNote }) {
	const [show, setShow] = useState(false);
	const [author, setAuthor] = useState("");
	const [note, setNote] = useState("");

	const handleClose = () => {
		setAuthor("");
		setNote("");
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};

	const handleSave = () => {
		handelAddNote(note, author);
		setAuthor("");
		setNote("");
		setShow(false);
	};

	return (
		<div className='add-note'>
			<Button variant='primary' onClick={handleShow}>
				New Post
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Post a new note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='ControlInput1'>
							<Form.Label>Author Name</Form.Label>
							<Form.Control
								type='text'
								value={author}
								onChange={(event) => setAuthor(event.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='ControlInput2'>
							<Form.Label>What would you like to say</Form.Label>
							<Form.Control
								as='textarea'
								rows='3'
								value={note}
								onChange={(event) => setNote(event.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleSave}>
						Save New Post
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AddNote;
