"use strict";
const Library = require("../models/library");

// finds all libraries in DB, then sends array as response
const getAllLibraries = (res) => {
    Library.findAll({})
        .then(function (data) {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// Create a library for a user
const createLibraryForUser = async (req, res) => {
    console.log("req is", req);
    console.log("req.user_id is", req.user_id);
    const user_id = req.user_id;
    const watching_status = req.watching_status;
    console.log("user_id is: ", user_id);
    console.log("watching_status is: ", watching_status);

    try {
        // Check if the user already has the same watching_status
        const [library, created] = await Library.findOrCreate({
            where: { 
                user_id: user_id,
                watching_status: watching_status
            },
            defaults: {
                user_id: user_id,
                watching_status: watching_status,
            },
        });

        res.json({
            result: 200,
            message: created
                ? "Library created successfully"
                : "Library already exists",
            library,
        });
    } catch (error) {
        console.error("Failed to create library:", error);
        res.status(500).send("Failed to create library.");
    }
};

// Creates the libraries for a user
// This should run when a user is created
const initializeLibrariesForUser = async (req, res) => {
    const user_id = req.params.user_id;
    const watching_statuses = [
        "watching",
        "completed",
        "on_hold",
        "dropped",
        "planned",
    ];

    console.log("user_id is: ", user_id);
    
};

module.exports = {
    getAllLibraries,
    createLibraryForUser,
};
