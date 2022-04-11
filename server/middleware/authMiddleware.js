<<<<<<< HEAD
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
=======
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
>>>>>>> feature/Duy2

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
<<<<<<< HEAD
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
=======
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');
>>>>>>> feature/Duy2

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
<<<<<<< HEAD
      throw new Error("Not authorized, token failed");
=======
      throw new Error('No authorized, token failed');
>>>>>>> feature/Duy2
    }
  }

  if (!token) {
    res.status(401);
<<<<<<< HEAD
    throw new Error("Not authorized, no token");
=======
    throw new Error('No authorized, no token');
>>>>>>> feature/Duy2
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
<<<<<<< HEAD
    throw new Error("Not authorized as an admin");
=======
    throw new Error('Not authorized a admin');
>>>>>>> feature/Duy2
  }
};

export { protect, admin };
