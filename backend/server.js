const express = require("express");
const app = express();
const fs = require("fs");

const data = fs.readFileSync("database.json")
const database = JSON.parse(data);

app.use(express.json());

//returns JSON object storing all trips
app.get("/getTrips", async (req, res) => {
    try{
        res.status(200).json(database.trips)
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//returns JSON object storing info for one specific trip
app.get("/getTripInfo/:tripNum", async (req, res) => {
    try{
        const tripNum = req.params.tripNum;
        res.json(database.trips[tripNum])
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//returns JSON object storing all categories for a trip
app.get("/getTripCategories/:tripNum", async (req, res) => {
    try{
        const tripNum = req.params.tripNum;
        res.json(database.trips[tripNum].categories)
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
})

//adds a new trip to database file 
app.post("/addTrip", async (req, res) => {
    try{
        const newTrip = {
            tripName: req.body.tripName,
            currency: req.body.currency,
            categories: []
        };
        database.trips.push(newTrip);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Added Trip");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//adds a new category for a trip to database file
app.post("/addCategory/:tripNum", async (req, res) => {
    try{
        const newCat = {
            catName: req.body.catName,
            purchases: []
        };
        database.trips[req.params.tripNum].categories.push(newCat);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Added Category");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//adds a new purchase within a trip's category to database file
app.post("/addPurchase/:tripNum/:catNum", async (req, res) => {
    try{
        const newPurchase = {
            purName: req.body.purName,
            purDesc: req.body.purDesc,
            price: req.body.price
        };
        database.trips[req.params.tripNum].categories[req.params.catNum].purchases.push(newPurchase);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Added Purchase");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//deletes trip from database file
app.delete("/deleteTrip", async (req, res) => {
    try{
        const num = parseInt(req.query.tripNum);
        database.trips.splice(num, 1);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Deleted Trip");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//delete's trip's category from database file
app.delete("/deleteCategory", async (req, res) => {
    try{
        const tripNum = parseInt(req.query.tripNum);
        const catNum = parseInt(req.query.catNum);
        database.trips[tripNum].categories.splice(catNum, 1);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Deleted Category");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//deletes purchase from a trip's category from database file
app.delete("/deletePurchase", async (req, res) => {
    try{
        const tripNum = parseInt(req.query.tripNum);
        const catNum = parseInt(req.query.catNum);
        const purNum = parseInt(req.query.purNum);
        database.trips[tripNum].categories[catNum].purchases.splice(purNum, 1);
        fs.writeFileSync("database.json", JSON.stringify(database));
        res.status(200).send("Deleted Purchase");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

//runs server
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});