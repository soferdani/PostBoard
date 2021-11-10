import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Note from "./components/Note";
import "bootstrap/dist/css/bootstrap.css";
import AddNote from "./components/AddNote";
import { Container, Row } from "react-bootstrap";
// const data = require("./assets/posts.json");

function App() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		let allNotesInLocalStore = JSON.parse(localStorage.getItem("notes"));
		if (allNotesInLocalStore) {
			setNotes(allNotesInLocalStore);
		}
	}, []);

	const addNote = (note, author) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			content: note,
			author: author,
			date: date.toLocaleString(),
		};
		const newNotes = [...notes, newNote];
		localStorage.setItem("notes", JSON.stringify(newNotes));
		setNotes(newNotes);
	};

	return (
		<div className='App'>
			<h1>Welcome to post board</h1>
			<p>Here you can create your posts</p>

			<Container fluid={true}>
				<Row lg={{ cols: 4 }} sm={{ cols: 2 }} xs={{ cols: 1 }}>
					<AddNote handelAddNote={addNote} />
					{notes.map((posts) => (
						<Note key={posts.id} data={posts} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default App;
