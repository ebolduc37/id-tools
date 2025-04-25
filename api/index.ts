const express = require("express");
const id_function = require("../release-2025-04-25_06/index.js");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/extract', async (req, res) => {

    const label = req.query.label;
    const productCode = req.query.productCode;
    const yearPrint = req.query.yearPrint;
    const logoStyle = req.query.logoStyle;
    const sizing = req.query.sizing;
    const typeface = req.query.typeface;
    const manufacturer = req.query.manufacturer;
    const labelNotation = req.query.labelNotation;
    const language = req.query.language;
    const laundryPosition = req.query.laundryPosition;
    const doNotTumbleDry = req.query.doNotTumbleDry;

    const garmentData = {
        label: label,
        productCode: productCode,
        yearPrint: yearPrint,
        logoStyle: logoStyle,
        sizing: sizing,
        typeface: typeface,
        manufacturer: manufacturer,
        labelNotation: labelNotation,
        language: language,
        laundryPosition: laundryPosition,
        doNotTumbleDry: doNotTumbleDry,
    };

    try {
        const response = id_function.extract(garmentData);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

// GET garment information as string
app.get('/identify', async (req, res) => {
    
    const label = req.query.label;
    const productCode = req.query.productCode;
    const yearPrint = req.query.yearPrint;
    const logoStyle = req.query.logoStyle;
    const sizing = req.query.sizing;
    const typeface = req.query.typeface;
    const manufacturer = req.query.manufacturer;
    const labelNotation = req.query.labelNotation;
    const language = req.query.language;
    const laundryPosition = req.query.laundryPosition;
    const doNotTumbleDry = req.query.doNotTumbleDry;

    const garmentData = {
        label: label,
        productCode: productCode,
        yearPrint: yearPrint,
        logoStyle: logoStyle,
        sizing: sizing,
        typeface: typeface,
        manufacturer: manufacturer,
        labelNotation: labelNotation,
        language: language,
        laundryPosition: laundryPosition,
        doNotTumbleDry: doNotTumbleDry,
    };

    try {
        const response = id_function.identify(garmentData);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
