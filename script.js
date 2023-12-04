const { MongoClient } = require('mongodb');

// Reemplaza la siguiente cadena de conexión con la tuya desde MongoDB Atlas
const uri = 'mongodb+srv://ccamigonzalez232:<48537645>@cluster0.aihcmbh.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectarMongoDB() {
  try {
    // Conectar a la base de datos
    await client.connect();

    console.log('Conexión exitosa a MongoDB Atlas');

    // Aquí puedes realizar operaciones en tu base de datos

  } finally {
    // Asegúrate de cerrar la conexión cuando hayas terminado
    await client.close();
  }
}

// Llama a la función para conectar MongoDB
conectarMongoDB();
