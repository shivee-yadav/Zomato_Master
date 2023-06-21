import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{detail: {type:String}, for:{type:String}}],
    phoneNumber: [{type: Number}]
},
{
    timestamps: true
});

UserSchema.statics.findEmailAndPhone = async (email, phoneNumber) => {
    //check whether the email exists
    const checkUserByEmail = await UserModel.findOne({email});
    
    
    //check whether the phone exists
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already Exists");
    }

    return false;
};

UserSchema.pre("save",function(next){
    const user = this;

    //password is not modified
    if(!user.isModified("password")) return next();

    //generating bcrypt salt
    bcrypt.genSalt(8,(error,salt) => {
        if(error) return next(error);

        //hashing the password
        bcrypt.hash(user.password , salt , (error,hash)=>{
            if(error) return next(error);

            ///assigning hashed password
            user.password = hash;
            return next;
        });
    });

});

export const UserModel = mongoose.model("Users", UserSchema);


//methods->create and instance then use
//static ->without creating the instance