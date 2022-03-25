import User from "../models/user";

export const signup = async (req ,res )=>{
    const { name, email, password } = req.body;
    try {
        //kiem tra user
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
    const {email,password} = req.body;
    const user = await User.findOne({email}).exec;
    if(!user){
        res.status(4001).json({
            message:"user ko ton tai"
        })
    }
    if (!user.authenticate(password)){
        res.status(401).json({
            message:"mat khau khong dung"
        })
    }
}
const token = jwb.sign({ email }, "12356", { expiresIn: 60 * 60})
res.json({
    token,
    user: {
        _id: user._id,
        name: user.name,
        email: user.email
    }
})