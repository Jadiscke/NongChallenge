import { firebaseDb } from "../utils/firebase";

const getNotesCollection = async () => {
  return await firebaseDb.collection("notes").get();
};

class FirebaseDb {
  async getNotes() {
    try {
      const notesCollection = await getNotesCollection();
      const notes = notesCollection.docs.map((doc) => {
        const data = {
          key: doc.id,
          data: doc.data(),
        };
        return data;
      });
      console.log("notes: ", notes);
      return notes;
    } catch (err) {
      return err;
    }
  }
}

export default new FirebaseDb();
