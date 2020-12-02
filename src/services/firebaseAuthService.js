import { firebaseAuth } from "../utils/firebase";

class FirebaseAuth {
  async signInWithEmailAndPassword(email, password) {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      return { errorCode: err.code, errorMessage: err.message };
    }
  }

  onAuthStateChangedSetUser(callback) {
    /**
     * Receive setUser
     */
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        callback({ email, uid });
      } else {
        callback({});
      }
    });
  }
  async signOut() {
    try {
      firebaseAuth.signOut();
    } catch (err) {
      return { erroCode: err.code, errorMessage: err.message };
    }
  }
}

export default new FirebaseAuth();
