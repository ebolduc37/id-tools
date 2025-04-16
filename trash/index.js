
import express from "express";
import { identify, extract } from "./release-2025-04-15_02/index.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET garment information
app.get('/extract', async (req, res) => {

    const label = req.query.label;
    const productCode = req.query.productCode;
    const yearPrint = req.query.yearPrint;
    const logoStyle = req.query.logoStyle;
    const sizingSystem = req.query.sizingSystem;
    const typeface = req.query.typeface;
    const manufacturer = req.query.manufacturer;
    const labelNotation = req.query.labelNotation;
    const language = req.query.language;
    const laundryPosition = req.query.laundryPosition;

    const garmentData = {
        label: label,
        productCode: productCode,
        yearPrint: yearPrint,
        logoStyle: logoStyle,
        sizingSystem: sizingSystem,
        typeface: typeface,
        manufacturer: manufacturer,
        labelNotation: labelNotation,
        language: language,
        laundryPosition: laundryPosition
    };

    try {
        const response = extract(garmentData);
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
    const sizingSystem = req.query.sizingSystem;
    const typeface = req.query.typeface;
    const manufacturer = req.query.manufacturer;
    const labelNotation = req.query.labelNotation;
    const language = req.query.language;
    const laundryPosition = req.query.laundryPosition;

    const garmentData = {
        label: label,
        productCode: productCode,
        yearPrint: yearPrint,
        logoStyle: logoStyle,
        sizingSystem: sizingSystem,
        typeface: typeface,
        manufacturer: manufacturer,
        labelNotation: labelNotation,
        language: language,
        laundryPosition: laundryPosition
    };

    try {
        const response = identify(garmentData);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
