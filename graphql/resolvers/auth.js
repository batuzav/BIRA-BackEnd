const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Usuario no existe");
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) throw new Error("PASSWORD INCORRECTO");
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      `${process.env.tokencrypt}`,
      { expiresIn: "1h" }
    );
    return { userId: user._id, token, tokenExpiration: 1, user };
  },
  checkLoginFunction: async (args, req) => {
    let isAuth = true;
    if (!req.isAuth) {
      isAuth = false;
    }

    return { isAuth };
  },
};
