const express = require('express');

const { SpotImage, Spot, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

router.delete("/:imageId", requireAuth, async (req, res, next) => {

    try {

        const userId = req.user.id;
        const imageId = req.params.imageId;

        const spotImage = await SpotImage.findByPk(imageId);

        if (!spotImage) return res.status(404).json({ message: "Spot Image couldn't be found" });

        const spot = await Spot.findByPk(spotImage.spotId);

        if (spot.ownerId !== userId) return res.status(403).json({ message: "Unauthorized" });

        await spotImage.destroy();

        res.status(200).json({ message: "Successfully deleted" })

    } catch(err) {
        next(err);
    }
});

module.exports = router;
