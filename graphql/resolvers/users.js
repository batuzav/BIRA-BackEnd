const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: (args) => {
    const {
      email,
      password,
      firstName,
      lastName,
      timezone,
      phone,
      country,
      supervisor,
      profileImg,
    } = args.userInput;
    return User.findOne({ email })
      .then((user) => {
        if (user) throw new Error("Usuario ya existe");
        return bcrypt.hash(password, 12);
      })
      .then((hashedPassword) => {
        const user = new User({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          timezone,
          phone,
          country,
          supervisor,
          profileImg,
        });
        return user.save();
      })
      .then((result) => {
        return { ...result._doc, _id: result._doc._id.toString() };
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
};
