interface NoteItemProps {
  note: {
    id: number;
    title: string;
    body: string;
    archived: boolean;
    createdAt: string;
  };
  deleteNote: (id: number) => void;
  toggleArchive: (id: number) => void;
}

export default function NoteItem({ note, deleteNote, toggleArchive }: NoteItemProps) {
  return (
    <div className="border border-gray-300 rounded-md p-3 flex flex-col justify-between">
      <div className="space-y-3">
        <h3 className="text-xl font-bold">{note.title}</h3>
        <p className="text-justify">{note.body}</p>
      </div>

      <div className="space-y-3">
        <small className="text-gray-500">{new Date(note.createdAt).toLocaleDateString()}</small>

        <div className="grid-cols-2 grid gap-2">
          <button className="bg-black text-white rounded-md p-2" onClick={() => toggleArchive(note.id)}>
            {note.archived ? "Unarchived" : "Archive"}
          </button>
          <button className="bg-black text-white rounded-md p-2" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
