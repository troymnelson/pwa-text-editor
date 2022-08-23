import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const transaction = db.transaction(["jate"], "readwrite");
  const objectStore = transaction.objectStore(content);

  customerData.forEach(note => {
    const request = objectStore.add(note);
    request.onsuccess = (event) => {
      event.target.result === customer.ssn;
    }
  })
  console.error('putDb not implemented')
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  displayData();
  console.error('getDb not implemented')
}

initdb();
