import axios from "axios";
import Wrapper from "../components/wrapper/dashboardForm.js";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";


const Profile = () => {
  const {user}=useOutletContext();
  const {name,email,location}=user;
  const navigation=useNavigation();

  console.log(user)
  const isSubmmitting=navigation.state === "submitting"

  return (
      <Wrapper>
          <Form method="post" className="form">
              <h4 className="form-title">Profile</h4>
              <div className="form-center">
                  <div className="form-control">
                      <label htmlFor="image" className="form-label">
                          Upload an image(Max 0.5MB);
                      </label>
                      <input
                          type="file"
                          className="form-input"
                          name="image"
                          id="avatar"
                          accept="image/*"
                      />
                  </div>
                  <div className="form-control">
                      <label htmlFor="name" className="form-label">
                          Name
                      </label>
                      <input
                          type="text"
                          className="form-input"
                          name="name"
                          id="name"
                          placeholder="enter the name"
                          defaultValue={name}
                          required
                      />
                  </div>
                  <div className="form-control">
                      <label htmlFor="location" className="form-label">
                          Location
                      </label>
                      <input
                          type="text"
                          className="form-input"
                          name="location"
                          id="location"
                          placeholder="enter the location"
                          defaultValue={location}
                          required
                      />
                  </div>
                  <div className="form-control">
                      <label htmlFor="email" className="form-label">
                          Email
                      </label>
                      <input
                          type="email"
                          className="form-input"
                          name="email"
                          id="email"
                          placeholder="enter the email"
                          defaultValue={email}
                          required
                      />
                  </div>
                  <div className="submit">
                      <button type="submit" className="btn btn-block form-btn">
                          {isSubmmitting ? "Submmitting..." : "Submit"}
                      </button>
                  </div>
              </div>
          </Form>
      </Wrapper>
  );
}
export default Profile