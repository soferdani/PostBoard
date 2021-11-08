import "./App.css";
import React, { useState } from "react";
import {Button  } from "react-bootstrap";
import Note from "./components/Note";
const data = require("./assets/posts.json");

const handleSubmit = (event) => {
	console.log(event);
};

function App() {
	const [notes, setNotes] = useState(data);
	const [newAuthorName, setNewAuthorName] = useState("");
	const [newNoteContent, setNewNoteContent] = useState("");

	console.log(notes.posts);

	return (
		<div className='App'>
			<h1>Welcome to post board</h1>
			<p>Here you can create and edit your posts</p>

      <Button variant="success">Success</Button>
      
			{notes.posts.map((posts) => (
				<Note key={posts.id} data={posts} />
			))}

			{/* <form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Author Name'
					value={newNoteTitle}
					onChange={handleTitleChange}
				/>
				<textarea
					placeholder='Content'
					value={newNoteContent}
					onChange={handleContentChange}
				/>
				<button type='submit'>Add</button>
			</form> */}
		</div>
	);
}

// 	event.target.title.value = ""; // resets the form
// 	event.target.content.value = ""; // resets the form
// }

export default App;
