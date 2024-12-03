import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const { email, role } = req.body;
    const userId = req.user ? req.user.id : req.body.userId;
    const token = jwt.sign(
      {
        email,
        role,
        userId
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 2 }
    );

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};