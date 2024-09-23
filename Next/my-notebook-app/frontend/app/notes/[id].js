"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getNote } from '../../src/services/noteServices';

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchNote = async () => {
        const fetchedNote = await getNote(id);
        setNote(fetchedNote);
      };
      fetchNote();
    }
  }, [id]);

  if (!note) return <div>Loading...</div>;

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default ViewNote;
