const router = require("express").Router();
const noteRoutes = require("./note");
const tagRoutes = require("./tag");

// Note routes
router.use("/note", noteRoutes);
// Tag routes
router.use("/tag", tagRoutes);


module.exports = router;
