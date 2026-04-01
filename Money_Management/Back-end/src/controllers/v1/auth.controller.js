const { userService } = require("../../services");
const catchAsync = require("../../utils/catchAsync");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = catchAsync(async (req, res) => {
  const { fullName, email, password } = req.body;

  const userExists = await userService.getDetails({ email, deletedAt: null });
  console.log(`========userExists======`, userExists);

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const user = await userService.create({
    fullName,
    email,
    password,
  });

  console.log(`========user======`, user);

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
});


const login = catchAsync(async(req , res)=>{
     const { email, password } = req.body;

     console.log(`========email, password ======`, email, password );

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await userService.getDetails({ email , deletedAt : null });
    console.log(`========user======`, user);

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`========isMatch======`, isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
})




module.exports = {
    register,
    login
}