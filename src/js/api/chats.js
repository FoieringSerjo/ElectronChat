import db from '../db/firestore';

export const fetchChats = () =>
  db
    .collection('chats')
    .get()
    .then((snapshot) =>
      // debugger;
      //* fetching from collections then data are provided under snapshot.docs
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
