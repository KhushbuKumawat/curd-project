//define the mongoose model(Schema)
module.exports = (mongoose) => {
  //mongoose.model used to create a collection of a particular database of MongoDB
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        name: String,
        JobPosition: String,
        dateOfJoining: String,
        address: String,
        frontendLanguage: String,
        backendLanguage: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Tutorial;
};
