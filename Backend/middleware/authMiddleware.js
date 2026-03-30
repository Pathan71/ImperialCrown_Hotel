import User from "../models/User.js";

// Middleware to check if user is authenticated

export const protect = async (req, res, next) => {
    const { userId } = req.auth()
    // console.log("userId", req.auth())

    if (!userId) {
        res.json({ success: false, message: "not authenticated" })
    }
    else {
        const user = await User.findById(userId)
        req.user = user;
        next()
    }
}

// export const protect = async (req, res, next) => {
//     try {
//         const authData = req.auth();
//         const userId = authData?.userId;

//         if (!userId) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Not authenticated"
//             });
//         }

//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         req.user = user;
//         next();

//     } catch (err) {
//         return res.status(403).json({
//             success: false,
//             message: "Invalid or expired token"
//         });
//     }
// }