const jwt = require("jsonwebtoken");
const BlogModel = require("../models/blogsModel");

const mid1 = async function (req, res, next) {
  try {
    //Authentication
    const token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(401)
        .send({ status: false, msg: "token must be present" });
    }

    
    //Authorization
    var decodedToken = jwt.verify(token, "backend-project");

    next();

    req.user = decodedToken.authorId;


  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { mid1 };
