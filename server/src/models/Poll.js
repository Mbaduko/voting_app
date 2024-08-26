import mongoose from 'mongoose';

const  voteSchema = mongoose.Schema({
    option:{
        type:String,
        required:true
    },
    vote:{
        type:Number,
        default:0
    }
});

const pollSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    options: [voteSchema],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;