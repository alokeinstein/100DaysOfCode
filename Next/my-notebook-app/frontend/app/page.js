// frontend/pages/index.js:  Create a List of Notes
"use client";
/* 
The "use client"; directive tells Next.js that this component should be rendered on the client side, allowing the use of React hooks.
Ensure that all components that utilize client-side features (like hooks) are marked with "use client".
*/

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNotes, deleteNote } from '../src/services/noteServices';

const Home = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <div>
      <h1>My Notebook</h1>
      <Link href="/create">Create New Note</Link>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <Link href={`/notes/${note._id}`}>
              <a>{note.title}</a>
            </Link>
            <button onClick={() => handleDelete(note._id)}>Delete</button>
            <Link href={`/edit/${note._id}`}>
              <a>Edit</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



/* 
Create Pages and Components:
List of Notes: Display all notes.
Create Note: Form to add a new note.
Edit Note: Form to update an existing note.
View Note: Display a single note's details.
*/