const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/alphaCentaury", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Menambah 1 data
// const contact1 = new Contact({
//   nama: "Salsabila Nur Azizah",
//   nohp: "082223585008",
//   email: "salsabilanzh0@gmail.com",
// });

// Simpan ke collections
// contact1.save().then((contact) => console.log(contact));
