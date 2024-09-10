// // Dans votre fichier de modèle User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // Assurez-vous que tous les champs nécessaires sont présents ici
// });

// // Ajoutez cette méthode pour vérifier la structure du modèle
// userSchema.statics.checkModelStructure = function() {
//   console.log('Structure du modèle User:', this.schema.obj);
// };

// const User = mongoose.model('User', userSchema);

// // Appelez cette méthode dans votre fichier principal après la connexion à la base de données
// User.checkModelStructure();

// module.exports = User;