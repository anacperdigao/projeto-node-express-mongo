import mongoose from "mongoose";


// O caminho original que eu copiei la do MongoDB foi esse
// mongodb+srv://anaperdigao:<password>@cursoalura.ndznakm.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://anaperdigao:luzpropria@cursoalura.ndznakm.mongodb.net/Alura-node")

let db = mongoose.connection

export default db