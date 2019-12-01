const router = require("express").Router();
const noteController = require("../../controllers/noteController");

// Matches with "/api/tag"
router.route("/")
  .get(noteController.findAll)
//   .post(noteController.create);

// Matches with "/api/tag/:id"
router.route("/:id")
  .put(noteController.addTag)

// Matches with "/api/tag/:id/:tag"
router.route("/:id/:tag")
  .put(noteController.removeTag);

module.exports = router;
