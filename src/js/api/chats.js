import db from '../db/firestore';

const extractSnapshotData = (snapshot) =>
  // debugger;
  //* fetching from collections then data are provided under snapshot.docs
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () =>
  db.collection('chats').get().then(extractSnapshotData);
