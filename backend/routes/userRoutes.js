const express = require("express");
const { getUsers, getUser, updateUser, addUser } = require("../controllers/userController");

const router = express.Router();

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);

module.exports = router;
