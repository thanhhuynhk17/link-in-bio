const router = require("express").Router();
const Profile = require("../models/Profile");

router.get("/profiles", async (req, res) => {
    const profiles = await Profile.find();
    res.json(profiles);
});

router.post("/profiles", async (req, res) => {
    const newProfile = new Profile({
        text: req.body.text,
    });
    const savedProfile = await newProfile.save();
    res.json(savedProfile);
});

router.delete("/profiles/:id", async (req, res) => {
    await Profile.findByIdAndDelete(req.params.id);
    res.end();
});

module.exports = router;