import User from "../models/user";

export const signup = async (req ,res )=>{
    try {
        const {name,email,password}= req.body;

        const existUser = await User.findOne({email}).exec();
        if (existUser){
            req.json({
                message :"email da ton tai ,vui long dang ki email khac"
            })
        }
        const user = await new ({name,email ,password}).save();
        res.json({
            user:{
                _id :user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        res.json(400).json({
            message:"khong tao duoc tai khoan"
        })
    }
}

export const signin = async (req, res) => {
    
}