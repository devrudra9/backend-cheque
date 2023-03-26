import galleryModel from "../models/gallery.js";
import categoryModel from "../models/category.js";

class galleryController {
    static uploadImage = async (req, res) => {
        const { category } = req.body;
        try {
            if(category) {
                const addImage = galleryModel({
                    name: req.file.filename,
                    category: category
                });

                const saved_image = await addImage.save();
                if(saved_image) {
                    return res.status(200).json({ message: "File uploaded successfully." });
                }
            }
            else {
                return res.status(400).json({ message: "All fields are required." });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewCategory = async (req, res) => {
        const { name } = req.body;
        try {
            if(name) {
                const newCategory = categoryModel ({
                    name
                });

                const saved_category = await newCategory.save();
                if(saved_category) {
                    return res.status(200).json({ message: "Category added successfully." });
                }
            }
            else {
                return res.status(400).json({ message: "All fields are required." });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static getAllCategories = async (req, res) => {
        try {
            const fetAllCategories = await categoryModel.find({});
            return res.status(200).json(fetAllCategories);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static getAllImages = async (req, res) => {
        try {
            const fetAllImages = await galleryModel.find({});
            return res.status(200).json(fetAllImages);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static getsingleImage = async (req, res) => {
        const { category } = req.query;
        try {
            if(category) {
                const getCategoryBasedImages = await galleryModel.find({
                    category
                });
                return res.status(200).json(getCategoryBasedImages);
            }
            else {
                return res.status(400).json({ message: "All fields are required." });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};

export default galleryController;