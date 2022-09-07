const { Router } = require("express");

const router = Router();

const people = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
  },
];

// GET /api/people -> READ
router.get("/", (req, res) => {
  res.json(people);
});

// GET /api/people/:id -> READ
router.get("/:id/", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).json({ error: "Person not found" });
  } else {
    res.json(person);
  }
});

// POST /api/people -> CREATE
router.post("/", (req, res) => {
  // res.json(req.body);
});

// PATCH /api/people/:id -> UPDATE
router.patch("/:id", (req, res) => {
  // res.json(req.body);
});

// DELETE /api/people/:id -> DELETE
router.delete("/:id", (req, res) => {
  // res.json(req.body);
});

module.exports = router;
