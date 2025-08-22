import express from 'express';
import {
    getAllJobs,
    getAJobById,
    addANewJob,
    editAJobById,
    deleteAJob
} from '../controllers/jobsController.js';

const router = express.Router()



// @desc   baseUrl
// @route  GET /api/jobs
// router.get("/",(req,res)=>{
//     res.send("Hello world!")
// })


// @desc   fetch all jobs
// @route  GET /api/jobs
// @access User/private

router.get("/all-jobs",getAllJobs)


// @desc   fetch single job
// @route  GET /api/jobs/:id
// @access User/private

router.get("/:id",getAJobById)


// @desc   add a new job
// @route  POST /api/jobs/add-job
// @access User/private

router.post("/add-job",addANewJob)

// @desc   update a job
// @route  PUT /api/jobs/edit/:id
// @access User/private

router.put("/edit/:id",editAJobById)


// @desc   update a job(partially)
// @route  PATCH /api/jobs/edit/:id
// @access User/private

// router.patch("/edit/:id",partiallyEditAJobById)


// @desc   remove a job
// @route  DELETE /api/jobs/delete/:id
// @access User/private

router.delete("/delete/:id",deleteAJob)


export default router;