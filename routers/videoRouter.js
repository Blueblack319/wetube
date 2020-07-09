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
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
// Home
videoRouter.get(routes.home, home);

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
