import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const email =
      req.user?.email || // Email desde req.user
      req.body?.email || // Email desde req.body
      req.user?.profile?.emails?.[0]?.value; // Email desde Google (passport)

    const role = req.user?.role || req.body?.role;

    const userId =
      req.user?.id || // ID desde req.user
      req.body?.userId || // ID desde req.body
      (req.user?.email ? req.user.email : req.user?.profile?.emails?.[0]?.value); // Fallback en caso de Google

    const token = jwt.sign(
      {
        email,
        role,
        userId,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 2 } // Expira en 2 horas
    );

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};