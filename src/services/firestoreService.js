import { firebaseDb, firestore } from "../utils/firebase";

const returnNotesCollection = async () => {
  return await firebaseDb.collection("notes");
};

class FirebaseDb {
  async getNotes() {
    try {
      const notesCollection = await returnNotesCollection();
      const getNotes = await notesCollection.orderBy("date").get();
      const notes = getNotes.docs.map((doc) => {
        const data = {
          key: doc.id,
          data: doc.data(),
        };
        return data;
      });

      return notes;
    } catch (err) {
      return err;
    }
  }

  async createNote({ name, description }) {
    const notesCollection = await returnNotesCollection();
    try {
      await notesCollection.add({
        name: name,
        description: description,
        date: firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new FirebaseDb();
