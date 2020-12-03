import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    { key: 0, data: { name: "", description: "", date: "" } },
  ]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used with a NotesProvider");
  const { notes, setNotes } = context;
  return { notes, setNotes };
}

export { useNotes };

export default NotesProvider;
