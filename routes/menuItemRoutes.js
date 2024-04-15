const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItem");

// POST Item to add a Menu Item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(response);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("data fetched");
    res.status(200).json(res);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const workType = req.params.taste;
    if (workType == "Sweet" || workType == "Spicy" || workType == "Sour") {
      const response = await MenuItem.find({ work: workType });
      console.log("response fetched");
      res.status(404).json(response);
    } else {
      console.log("Invalid workType");
      res.status(500).json({ error: "Internal workType" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internet server error " });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; //Extract the id from the URL parameter halanki aap direct bhi req.body se bhi mang sakte the but ye ek formal way hai to know the id by the parameters of the url
    const updateMenuData = req.body; //Updated data from the person
    const response = await Person.findByIdAndUpdate(menuId, updateMenuData, {
      new: true, //return the updated document
      runValidators: true, //Run the mongoose validator matlab ki aapne jo bhi validation laga rakha tha na woo schema banate wakt wo sab ke sab run karenge
    });

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internet server error " });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; //Extract the person's ID from the URL parameter
    //Assuming you have a person model
    const response = await MenuItem.findByIdAndRemove(menuId);
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    console.log("data deleted");
    res.status(200).status.json({ message: "menu Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

module.exports = router;
