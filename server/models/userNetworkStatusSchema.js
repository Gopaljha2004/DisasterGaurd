// Define a schema for user network status
const userNetworkStatusSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
      unique: true
    },
    onlineStatus: {
      type: Boolean,
      default: false
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  });
  
const UserNetworkStatus = mongoose.model('UserNetworkStatus', userNetworkStatusSchema);
  