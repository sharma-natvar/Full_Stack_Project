const { userService } = require("../services");
const bcrypt = require("bcrypt");

// register the user
const registerUser = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    // bcrypt
    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    const body = { email: email, userName: userName, password: hashPassword };
    if (!body) {
      throw new Error("data not get");
    }
    const resBody = await userService.registerUser(body);
    if (!resBody) {
      throw new Error("user not created ");
    }
    res.status(201).json({
      message: "sucsess",
    });
  } catch (err) {
    res.status(400).json({
      message: "Error found",
      error: err.message,
    });
  }
};

// login User
const loginUser = async (req, res) => {
  try {
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;
    if (!reqEmail || !reqPassword) {
      throw new Error("data not get");
    }
    const resEmail = await userService.checkEmail(reqEmail);
    if (!resEmail) {
      throw new Error("user not found");
    }
    const { password, ...resBody } = resEmail._doc;

    if (reqEmail === resEmail.email) {
      const isPassword = await bcrypt.compareSync(req.body.password , resEmail.password);
      if(!isPassword){
        throw new Error('Plz Enter write password')
      }
    // res sand
      res.status(200).json({
        message: "login scusses",
        data: resBody,
      });
    } else {
      throw new Error("something went wrong");
    }
  } catch (err) {
    res.status(400).json({
      message: "Error Found",
      error: err.message,
    });
  }
};

module.exports = { registerUser, loginUser };
