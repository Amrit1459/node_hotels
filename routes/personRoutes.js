const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");
router.post("/", async (req, res) => {
  try {
    const data = req.body; //assuming the request body contauins the person data
    // Create a new Person document document using the mongoose model
    const newPerson = new Person(data);
    // Save the person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(500).json(data);
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "Internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
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

router.put("/:Id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameter halanki aap direct bhi req.body se bhi mang sakte the but ye ek formal way hai to know the id by the parameters of the url
    const updatePersonData = req.body; //Updated data from the person
    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true, //return the updated document
        runValidators: true, //Run the mongoose validator matlab ki aapne jo bhi validation laga rakha tha na woo schema banate wakt wo sab ke sab run karenge
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({error:'Internal server Error'})
  }
});
router.delete('/:id',async(req,res)=>{
  try{
  const personId =req.params.id; //Extract the person's ID from the URL parameter
  //Assuming you have a person model 
  const response = await Person.findByIdAndRemove(personId);
  if (!response) {
    return res.status(404).json({ error: "Person not found" });
  }
  console.log('data deleted');
  res.status(200).status.json({message:'person Deleted Successfully'})
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server Error'})
  }
})

module.exports = router;
