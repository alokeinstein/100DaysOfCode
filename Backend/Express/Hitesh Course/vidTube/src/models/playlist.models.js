import mongoose,{Schema} from 'mongoose'

const playListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videos: [//multiple videos in a playlist that's why we use array
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
})

export const  Playlist = mongoose.model("Playlist", playListSchema)