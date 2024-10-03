import NoteItem from "./NoteItem";

interface NoteListProps {
  notes: {
    id: number;
    title: string;
    body: string;
    archived: boolean;
    createdAt: string;
  }[];
  deleteNote: (id: number) => void;
  toggleArchive: (id: number) => void;
}

export default function NoteList({ notes, deleteNote, toggleArchive }: NoteListProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-5 my-5">
      {notes.length > 0 ? notes.map((note) => <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />) : <p className="text-center col-span-3">No notes</p>}
    </div>
  );
}
