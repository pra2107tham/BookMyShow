import { Router } from "express";
const router = Router();
import Ticket from "./schema.js";

router.post("/book", async (req, res) => {
    const { movie, slots, seats } = req.body;

    try{
        const ticket = new Ticket({
            movie,
            slots,
            seats
        });

        const savedTicket = await ticket.save();
        if(savedTicket){
            res.status(200).json({data: savedTicket, message: "Ticket Booked Successfully"});
        }else{
            res.status(500).json({message: "Internal Server Error"});
        }
    }catch(err){
        res.status(500).json({data:null, message: "Internal Server Error"});
    }
})

router.get("/booking", async (req, res) => {
    try{
        const ticket = await Ticket.find().sort({_id:-1}).limit(1);

        if(ticket.length === 0){
            res.status(404).json({data: null, message: "No Booking Yet"});  
        }else{
            res.status(200).json({data: ticket[0], message: "Booking Found"});
        }
    }catch(err){
        res.status(500).json({data:null, message: "Internal Server Error"});
    }
})



export default router;