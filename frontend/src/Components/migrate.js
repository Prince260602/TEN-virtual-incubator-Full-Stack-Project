const mongoose = require('mongoose');

// Connection URLs for the old and new MongoDB databases
const oldDbUrl = '';
const newDbUrl = '';

async function migrateData() {
  let oldConnection;
  let newConnection;

  try {
    // Connect to the old database
    oldConnection = await mongoose.createConnection(oldDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the old database');

    // Connect to the new database
    newConnection = await mongoose.createConnection(newDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the new database');

    // Get the list of collections in the old database
    const collections = await oldConnection.db.listCollections().toArray();

    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const oldCollection = oldConnection.collection(collectionName);
      const newCollection = newConnection.collection(collectionName);

      // Fetch all documents from the old collection
      const documents = await oldCollection.find().toArray();

      // Insert each document into the new collection
      if (documents.length > 0) {
        await newCollection.insertMany(documents);
        console.log(`Migrated collection: ${collectionName}`);
      }
    }

    console.log('Data migration completed successfully');
  } catch (error) {
    console.error('Error during data migration:', error);
  } finally {
    // Close the database connections
    if (oldConnection) await oldConnection.close();
    if (newConnection) await newConnection.close();
  }
}

// Run the migration
migrateData();
