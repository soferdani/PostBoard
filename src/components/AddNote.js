import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import MainCard from "./MainCard";

function AddNote({ handelAddNote }) {
	const [show, setShow] = useState(false);
	const [author, setAuthor] = useState("");
	const [note, setNote] = useState("");
	const [validated, setValidated] = useState(false);

	const handleClose = () => {
		setAuthor("");
		setNote("");
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		console.log(form.checkValidity());
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			handelAddNote(note, author);
			setAuthor("");
			setNote("");
			setShow(false);
		}
		setValidated(true);
	};

	return (
		<div className='add-note'>
			<MainCard handelCardClick={handleShow} />

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Post a new note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group className='mb-3' controlId='validationCustom01'>
							<Form.Label>Author Name</Form.Label>
							<Form.Control
								required
								type='text'
								value={author}
								onChange={(event) => setAuthor(event.target.value)}
							/>
							<Form.Control.Feedback type='invalid'>
								You must provide author name
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mb-3' controlId='validationCustom02'>
							<Form.Label>What would you like to say</Form.Label>
							<Form.Control
								required
								as='textarea'
								rows='3'
								value={note}
								onChange={(event) => setNote(event.target.value)}
							/>
							<Form.Control.Feedback type='invalid'>
								You must provide content
							</Form.Control.Feedback>
						</Form.Group>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' type='submit'>
							Save New Post
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddNote;
