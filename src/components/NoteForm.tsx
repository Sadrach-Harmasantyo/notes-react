interface NoteFormProps {
  newNote: { title: string; body: string };
  setNewNote: React.Dispatch<React.SetStateAction<{ title: string; body: string }>>;
  addNote: () => void;
  charRemaining: number;
  setCharRemaining: React.Dispatch<React.SetStateAction<number>>;
}

export default function NoteForm({ newNote, setNewNote, addNote, charRemaining, setCharRemaining }: NoteFormProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (title.length <= 50) {
      setNewNote({ ...newNote, title });
      setCharRemaining(50 - title.length);
    }
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewNote({ ...newNote, body: e.target.value });
  };

  return (
    <div className="w-full my-3 space-y-3">
      <h1 className="text-lg font-semibold">Make Your Note</h1>
      <input className="w-full border border-gray-300 rounded-md p-2" type="text" placeholder="Note Title" value={newNote.title} onChange={handleTitleChange} />
      <p>{charRemaining} character remaining</p>

      <textarea className="w-full border border-gray-300 rounded-md p-2" placeholder="Note Body" value={newNote.body} onChange={handleBodyChange}></textarea>

      <button className="w-full bg-black text-white rounded-md p-2" onClick={addNote}>
        Tambah Catatan
      </button>
    </div>
  );
}
