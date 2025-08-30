import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Form, Link, useLoaderData } from "react-router-dom";
import Wrapper from "./wrapper/jobCard.js";
import JobInfo from "./JobInfo.jsx";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";


const JobCard = ({ job }) => {
    // const {data}=useLoaderData()
    const { position, company, location, jobStatus, jobType, createdAt, _id } =
        job;
    // const { user } = useDashboardContext();

    const date = new Date(createdAt).toLocaleDateString();

    const [confirmOpen,setConfirmOpen]=useState(false);
    const handleOverlay=()=>setConfirmOpen(true);

    return (
        <Wrapper>
            <header>
                <div className="main-icon">
                    {company.charAt(0).toUpperCase()}
                </div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <JobInfo icon={<FaLocationArrow />} text={location} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={`status ${jobStatus}`}>
                        <span>{jobStatus}</span>
                    </div>
                </div>
                <footer>
                    <div className="actions">
                        <Link
                            to={`/dashboard/edit-job/${_id}`}
                            className="btn edit-btn"
                        >
                            Edit
                        </Link>

                        {/* Delete opens confirmation modal */}
                        {/* <Form method="post" action={`/dashboard/delete/${_id}`}> */}
                        <button className="btn delete-btn" onClick={handleOverlay}>Delete</button>
                        {/* </Form> */}
                        {confirmOpen && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <h4>
                                        Are you sure you want to delete this
                                        job?
                                    </h4>
                                    <div className="modal-actions">
                                        <Form
                                            method="post"
                                            action={`/dashboard/delete/${_id}`}
                                        >
                                            <button
                                                type="submit"
                                                className="btn danger-btn btn-block"
                                            >
                                                Yes, Delete
                                            </button>
                                        </Form>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() =>
                                                setConfirmOpen(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};

export default JobCard;
