const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

// Call this to sign up new user
router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }

      user = new User({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

// Call this to login user
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist",
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !",
        });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

/**
 * @method - POST
 * @description - Get LoggedIn User
 * @param - /user/me
 */

// Call this to return user profile information
router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

// Call this to remove user from database
router.delete("/remove-user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const response = await User.deleteOne({ _id: req.user.id });
    res.json(response);
  } catch (e) {
    res.send({ message: "There was an error with deleting your account." });
  }
});

// Call this to change username or password
router.put("/update-user", auth, async (req, res) => {
  try {
    const response = await User.updateOne(
      { _id: req.user.id },
      {
        $set: {
          username: req.body.new_username,
          password: req.body.new_password,
        },
      }
    );
    res.json(response);
  } catch (e) {
    res.send({ message: "There was an error with updating your information." });
  }
});

// Call this to add a recipe to profile
router.post("/add-recipe", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.savedRecipes.indexOf(req.body.recid) === -1) {
      // Body of request should contain recipe id in "recid" field
      user.savedRecipes.push(req.body.recid);
      user.save();
      res.json(user.savedRecipes);
    }
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
