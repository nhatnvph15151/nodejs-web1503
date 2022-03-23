import mongoose,{Schema} from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const userSchema = new Schema({
    name:{
       type : String,
       required :true,
       maxlength : 30 
    },
    email:{
        type: String,
        required: true,
        unique : true 
    },
    salt:{
        type :String
    },
    password:{
        type : String,
        required :true
    }
},{timestamps :true});

userSchema.method = {
    authenticate (password) {
        return this.encryptPassword(password) == this.password;
    },
    
}
userSchema.pre("save",async function save(next){
    try {
        this.salt = uuidv4();
        this.password = this.encryptPassword(this.password);
        return next();
    } catch (error) {
        return next(error)
    }
});

export default mongoose.model('User', userSchema);
