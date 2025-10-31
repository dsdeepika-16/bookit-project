const express = require("express");
const router = express.Router();

// Mock data
const experiences = [
  {
    id: 1,
    title: "Goa Beach Paradise",
    location: "Goa, India",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Snowy Adventures in Manali",
    location: "Manali, Himachal Pradesh",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
  },
  {
    id: 3,
    title: "Royal Getaway in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
  },
];

router.get("/", (req, res) => {
  res.json(experiences);
});

router.get("/:id", (req, res) => {
  const experience = experiences.find(
    (exp) => exp.id === parseInt(req.params.id)
  );
  if (!experience) {
    return res.status(404).json({ message: "Experience not found" });
  }
  res.json(experience);
});

module.exports = router;
