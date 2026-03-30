import Hotel from "../models/Hotel.js";
// import { v2 as cloudinary } from 'cloudinary'
import Room from "../models/Room.js";

// API to create a new room for a hotel
export const createRoom = async (req, res) => {
    try {

        const { userId } = req.auth()
        console.log("Auth Data:", userId);
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const { roomType, pricePerNight, amenities } = req.body;
        // console.log(req.body)    

        const hotel = await Hotel.findOne({ owner: req.auth().userId })
        if (!hotel) return res.json({ success: false, message: "No Hotel found" })

        // upload images to cloudinary
        // const uploadImage = req.files.map(async (file) => {
        //     const response = await cloudinary.uploader.upload(file.path)
        //     return response.secure_url
        // })
        // const images = await Promise.all(uploadImage)

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No images uploaded"
            });
        }

        let parsedAmenities = [];
        try {
            parsedAmenities = amenities ? JSON.parse(amenities) : [];
        } catch {
            return res.status(400).json({
                success: false,
                message: "Invalid amenities format"
            });
        }

        const images = req.files.map(file => `/uploads/${file.filename}`);

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            // amenities: JSON.parse(amenities),
            amenities: parsedAmenities, 
            images
        })
        res.json({ success: true, message: "Room created successfully" })
    }
    catch (err) {
        console.log("ERROR:", err);
        res.status(500).json({ success: false, message: err.message });
    }
}


// API to get all rooms
export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({isAvailable: true}).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select: 'image',
            }
        }).sort({ createdAt: -1 })
        res.json({ success: true, rooms })
    }
    catch (err) {
        res.json({ success: false, message: err.message })
    }
}


// API to get all rooms for a specific hotel
export const getOwnerRooms = async (req, res) => {
    try {
        const { userId } = req.auth()
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const hotelData = await Hotel.findOne({ owner: userId })
        const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate('hotel')
        res.json({ success: true, rooms })
    }
    catch (err) {
        res.json({ success: false, message: err.message })
    }
}


// API to toggle availability of room
export const toggleRoomAvailabilty = async (req, res) => {
    try {
        const { roomId } = req.body;
        const roomData = await Room.findById(roomId)
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save()
        res.json({ success: true, message: "Room availability Updated" })
    }
    catch (err) {
        res.json({ success: false, message: err.message })
    }
}