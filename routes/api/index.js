const router = require("express").Router();
const noteRoutes = require("./note");

// Book routes
router.use("/note", noteRoutes);

module.exports = router;
