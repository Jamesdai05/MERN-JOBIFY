import express from 'express';
import {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    deleteAJob,
    partiallyEditAJobById,
} from '../controllers/jobsController.js';
import {idParamsValidator, validator} from "../middleWare/validationMiddleware.js";
import { idValidator, jobValidator, updateJobValidator } from '../validators/jobValidator.js';




const router = express.Router()



// @desc   fetch all jobs
// @route  GET /api/jobs
// @access User/private

router.get("/all-jobs",getAllJobs)


// @desc   fetch single job
// @route  GET /api/jobs/:id
// @access User/private

router.get("/:id",idParamsValidator(idValidator),getAJobById)


// @desc   add a new job
// @route  POST /api/jobs/add-job
// @access User/private

router.post("/add-job",validator(jobValidator),addANewJob)

// @desc   update a job
// @route  PUT /api/jobs/edit/:id
// @access User/private

router.put("/edit/:id",idParamsValidator(idValidator),validator(jobValidator),editAJobById)


// @desc   update a job(partially)
// @route  PATCH /api/jobs/edit/:id
// @access User/private

router.patch("/edit/:id",idParamsValidator(idValidator),validator(updateJobValidator),partiallyEditAJobById)


// @desc   remove a job
// @route  DELETE /api/jobs/delete/:id
// @access User/private

router.delete("/delete/:id",idParamsValidator(idValidator),deleteAJob)

export default router;





// below is just another way of router buidling

/* router.route("/all-jobs").get(getAllJobs);


router.route("/:id").get(getAJobById);

router.route("/edit/:id").put(editAJobById).patch(partiallyEditAJobById);

router.route("/delete/:id").delete(deleteAJob); */