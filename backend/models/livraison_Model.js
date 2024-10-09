const mongoose = require("mongoose");

const livraisonSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    },
    delivery_link: {
      type: String,
      required: true
    },
    // screenshots: [{
    //   type: String  
    // }],
    screenshots: {
      type: [String], 
      required: true 
    },
    status: {
      type: String,
      enum: ['submitted', 'accepted', 'rejected'],
      default: 'submitted'  // Par défaut, c'est "submitted"
    },
    submitted_at: {
      type: Date,
      default: Date.now
    },
    reviewed_at: {
      type: Date
    }
  });
const Livraison = mongoose.model("Livraison", livraisonSchema);
module.exports = Livraison;
