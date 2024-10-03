import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const initialData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 2,
    title: "PWA",
    body: "Progressive web application atau PWAs adalah aplikasi web yang dinamis, ditampilkan oleh perangkat mobile dimana perubahan yang terjadi pada aplikasi web semakin mudah dan efisien.",
    archived: false,
    createdAt: "2022-04-15T04:27:34.572Z",
  },
  {
    id: 3,
    title: "React",
    body: "React adalah library JavaScript yang digunakan untuk membangun user interface (UI) dan user experience (UX) berbasis web.",
    archived: true,
    createdAt: "2022-04-16T04:27:34.572Z",
  },
];

function App() {
  const [notes, setNotes] = useState(initialData);
  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [charRemaining, setCharRemaining] = useState(50);

  const addNote = () => {
    if (newNote.title && newNote.body) {
      const newNoteData = {
        ...newNote,
        id: +new Date(),
        archived: false,
        createdAt: new Date().toISOString(),
      };
      setNotes([...notes, newNoteData]);
      setNewNote({ title: "", body: "" });
      setCharRemaining(50);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id: number) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.body.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="w-full text-center max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold underline my-5">Notes App</h1>
      <div className="w-full">
        <input className="w-full border border-gray-300 rounded-md p-2" type="text" placeholder="Search Notes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <NoteForm newNote={newNote} setNewNote={setNewNote} addNote={addNote} charRemaining={charRemaining} setCharRemaining={setCharRemaining} />

        <h1 className="text-lg font-semibold">Your Notes</h1>
        <NoteList notes={filteredNotes.filter((note) => !note.archived)} deleteNote={deleteNote} toggleArchive={toggleArchive} />

        <h1 className="text-lg font-semibold">Archived</h1>
        <NoteList notes={filteredNotes.filter((note) => note.archived)} deleteNote={deleteNote} toggleArchive={toggleArchive} />
      </div>
    </main>
  );
}

export default App;
