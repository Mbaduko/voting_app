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
    },
    {
        _id:false
    }
);

const creatorSchema = new mongoose.Schema({

        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        username:{
            type:String
        }
    },
    {
        _id:false
    }
); 

const pollSchema = new mongoose.Schema({
        question:{
            type:String,
            required:true
        },
        options: [voteSchema],
        creator:creatorSchema
    }
);

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;