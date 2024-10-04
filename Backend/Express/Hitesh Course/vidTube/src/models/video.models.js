import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary URL
      required: true,
    },
    thumbnail: {
      type: String,//cloudinary URL
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    description:{
        type:String,
        required: true
    },
    owner:{//this is not an array because only one owner is there
        type:Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {timestamps: true}
);

//injecting plugin in the schema for pagination
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);

/* 
AGGREGATION PIPELINE:
An aggregation pipeline in MongoDB works like this factory process. It allows you to:
--->Group documents (like comments or videos) based on certain fields (e.g., group videos by the owner).
--->Filter documents (e.g., find comments with certain content).
--->Sort documents (e.g., order videos by views).
--->Calculate metrics (e.g., total number of comments on a video).
 Each step in the pipeline is called a stage, and you can chain multiple stages together to perform complex operations on the data stored in MongoDB.


Question: Why Use mongooseAggregatePaginate?
--->mongooseAggregatePaginate is a plugin that allows you to paginate results when you’re using aggregation pipelines.
--->Without this plugin, aggregation operations would give you all results at once, which is not efficient for large datasets.

The plugin splits the results into pages and gives you options like:
--->How many results to show per page.
--->Which page to display.
--->Total number of pages, so you know how much data is left.
*/