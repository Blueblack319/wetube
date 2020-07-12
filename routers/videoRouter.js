import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  videoDetail,
  home,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from "../controllers/videosController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();
// Home
videoRouter.get(routes.home, home);

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
