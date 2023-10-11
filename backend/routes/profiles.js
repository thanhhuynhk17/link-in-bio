const router = require("express").Router();
const Profile = require("../models/Profile");

// get profile(s)
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        let profiles = undefined;
        if (!id) {
            profiles = await Profile.find();
        }else{
            profiles = await Profile.findById(id);
        }
        res.json(profiles);
    }catch (error) {
        console.log('GET error: ', error);
        res.sendStatus(500);
    }
});

// add new profile
router.post("/", async (req, res) => {
    console.log(req.body);
    const newProfile = new Profile({
        ...req.body
    });
    const savedProfile = await newProfile.save();
    res.json(savedProfile);
});

// modify profile
router.put("/:id", async (req, res)=>{
    try {
        const {id} = req.params.id;
    } catch (error) {
        console.log('PUT error: ', error);
        res.sendStatus(500);
    }
})

// delete profile by id
router.delete("/:id", async (req, res) => {
    const result = await Profile.findByIdAndDelete(req.params.id);
    res.json({
        "msg": result
    });
});

module.exports = router;