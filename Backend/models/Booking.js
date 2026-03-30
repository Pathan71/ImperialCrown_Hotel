import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'room', required: true },
    hote: { type: mongoose.Schema.Types.ObjectId, ref: 'hotel', requied: true },
    checkInDate: { type: Date, requied: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, requied: true },
    guests: { type: Number, requied: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    paymentMethod: { type: String, requied: true, default: 'Pay At Hotel' },
    isPaid: { type: Boolean, default: false }

}, { timestamps: true })

const Booking = mongoose.model('booking', bookingSchema)

export default Booking; 