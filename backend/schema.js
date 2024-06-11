import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    movie : {
        type: String,
        required: true
    },
    slots :{
        type: String,
        required: true
    },
    seats : {
        A1: {type: Number},
        A2: {type: Number},
        A3: {type: Number},
        A4: {type: Number},
        D1: {type: Number},
        D2: {type: Number}
    }
})

const Ticket = mongoose.model("BookMovie", TicketSchema);

export default Ticket;