import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/MedicalForm.css";
import stateJSON from "../data/StateList.json";

const MedicalForm = () => {
  const [users, setUsers] = useState([]);
  const [{ states }, setStateList] = useState(stateJSON);
  const [state, setState] = useState();
  return (
    <React.Fragment>
      <div className="title-container">
        <div className="title">Formik Form</div>
      </div>

      <div className="container">
        <Formik
          initialValues={{
            name: "",
            age: "",
            sex: "",
            mobile: "",
            id_type: "",
            govt_id: "",
            guardian: "",
            guardian_name: "",
            email: "",
            em_contact: "",
            address: "",
            state: "",
            city: "",
            pincode: "",
            occupation: "",
            religion: "",
            marital_status: "",
            blood_group: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Name must be 30 characters or less")
              .required("Name is Required"),
            age: Yup.string()
              .max(10, "Enter valid Age")
              .required("Age is Required"),
            sex: Yup.string().required("Select Gender"),
          })}
          onChange
          onSubmit={(values) => {
            setUsers([...users, { id: users.length + 1, ...values }]);
          }}
        >
          <Form className="bg-shadow">
            {console.log(states)}
            {/* ========== Personal Details ========== */}
            <div className="heading">Personal Details</div>
            <div className="grid-template-1">
              {/* Name */}
              <div className="name margin-bottom">
                <label htmlFor="name" className="form-label">
                  Name<span className="red">*</span>
                </label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  className="width-100 form-control"
                />
                <ErrorMessage name="name" className="form-text" />
              </div>

              {/* Date of Birth or Age */}
              <div className="age  margin-bottom">
                <label htmlFor="age" className="long form-label">
                  Date of Birth or Age<span className="red">*</span>
                </label>
                <Field
                  name="age"
                  id="age"
                  type="text"
                  placeholder="DD/MM/YYYY or Age in Years"
                  className="form-control"
                />
                <ErrorMessage name="age" className="form-text" />
              </div>

              {/* Sex */}
              <div className="sex  margin-bottom">
                <label htmlFor="sex" className="form-label">
                  Sex<span className="red">*</span>
                </label>
                <Field
                  name="sex"
                  id="sex"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="null">Enter Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="sex" className="form-text" />
              </div>
            </div>
            <div className="grid-template-2">
              {/* Mobile */}
              <div className="mobile  margin-bottom">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <Field
                  name="mobile"
                  id="mobile"
                  type="number"
                  placeholder="Enter Mobile"
                  className="form-control"
                />
                <ErrorMessage name="mobile" className="form-text" />
              </div>
              {/* Govt Issued Id */}
              <div className="id-type  margin-bottom">
                <label htmlFor="id_type" className="form-label">
                  Govt Issued ID
                </label>
                <Field
                  name="id_type"
                  id="id_type"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">ID Type</option>
                  <option value="AAdhar Card">Aadhar Card</option>
                  <option value="Voter Card">Voter ID Card</option>
                  <option value="Ration Card">Ration Card</option>
                </Field>
              </div>
              <div className="govt-id  margin-bottom">
                <Field
                  name="govt_id"
                  type="text"
                  placeholder="Enter Govt ID"
                  className="form-control"
                />
                <ErrorMessage name="govt_id" className="form-text" />
              </div>
            </div>

            {/* ========== Contact Details ========== */}
            <div className="heading">Contact Details</div>
            <div className="grid-template-2">
              {/* Guardian Details */}
              <div className="guardian  margin-bottom">
                <label htmlFor="guardian" className="form-label">
                  Guardian Details
                </label>
                <Field
                  name="guardian"
                  id="guardian"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Select Guardian</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="legal_guardian">Legal Guardian</option>
                </Field>
                <Field
                  name="guardian_name"
                  id="guardian_name"
                  type="text"
                  placeholder="Enter Guardian Name"
                  className="form-control"
                />
                <ErrorMessage name="guardian_name" className="form-text" />
              </div>

              {/* Email */}
              <div className="email  margin-bottom">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
                <ErrorMessage name="email" className="form-text" />
              </div>

              {/* Emergency Contact Number */}
              <div className="em-contact  margin-bottom">
                <label htmlFor="em_contact" className="long form-label">
                  Emergency Contact No
                </label>
                <Field
                  name="em_contact"
                  type="number"
                  placeholder="Enter Emergency No"
                  className="form-control"
                />
                <ErrorMessage name="em_contact" className="form-text" />
              </div>
            </div>

            {/* ========== Address Details ========== */}
            <div className="heading">Adress Details</div>
            <div className="grid-template-2">
              {/* Address */}
              <div className="address  margin-bottom">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field
                  name="address"
                  id="address"
                  type="text"
                  placeholder="Enter Address"
                  className="form-control"
                />
                <ErrorMessage name="address" className="form-text" />
              </div>

              {/* State */}
              <div className="state  margin-bottom">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <Field
                  name="state"
                  id="state"
                  as="select"
                  className="form-select option-placeholder"
                  onChange={(e) => {
                    setState(e.target.value);
                    this.handleChange(e);

                  }}
                >
                  <option value="">Enter State</option>
                  {states.map((item) => {
                    return <option value={item.state}>{item.state}</option>;
                  })}
                </Field>
              </div>

              {/* City */}
              <div className="city  margin-bottom">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <Field
                  name="city"
                  id="city"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Enter city/town/village</option>
                  {states.map((item) => {
                    return item.state === state
                      ? item.districts.map((district) => {
                          return <option value={district}>{district}</option>;
                        })
                      : null;
                  })}
                </Field>
              </div>

              {/* Country */}
              <div className="country  margin-bottom">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <Field
                  name="country"
                  id="country"
                  as="select"
                  className="form-select"
                  disabled
                >
                  <option value="india">India</option>
                </Field>
              </div>

              {/* Postal Code */}
              <div className="pincode  margin-bottom">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <Field
                  name="pincode"
                  id="pincode"
                  type="number"
                  placeholder="Enter Pincode"
                  className="form-control"
                />
              </div>
            </div>

            {/* ========== Other Details ========== */}
            <div className="heading">Other Details</div>

            <div className="grid-template-3">
              {/* Occupation */}
              <div className="occupation  margin-bottom">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <Field
                  name="occupation"
                  id="occupation"
                  type="text"
                  placeholder="Enter Occupation"
                  className="form-control"
                />
                <ErrorMessage name="occupation" className="form-text" />
              </div>

              {/* Religion */}
              <div className="religion  margin-bottom">
                <label htmlFor="religion" className="form-label">
                  Religion
                </label>
                <Field
                  name="religion"
                  id="religion"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Enter Religion</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="islam">Islam</option>
                  <option value="cristianism">Cristianism</option>
                </Field>
              </div>

              {/* Marital Status */}
              <div className="marital-status  margin-bottom">
                <label htmlFor="marital_status" className="form-label">
                  Marital Status
                </label>
                <Field
                  name="marital_status"
                  id="marital_status"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Enter Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Separated">Separated</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </Field>
              </div>

              {/* Blood Group */}
              <div className="blood-group  margin-bottom">
                <label htmlFor="blood_group" className="form-label">
                  Blood Group
                </label>
                <Field
                  name="blood_group"
                  id="blood_group"
                  as="select"
                  className="form-select option-placeholder"
                >
                  <option value="">Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </Field>
              </div>

              {/* Nationality */}
              <div className="nationality  margin-bottom">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <Field
                  name="nationality"
                  id="nationality"
                  as="select"
                  className="form-select"
                  disabled
                >
                  <option value="indian">Indian</option>
                </Field>
              </div>
            </div>
            <div className="btn-group">
              <button className="btn-cancel" type="reset">
                <span>Cancel</span>
                <span id="btn-bottom">(ESC)</span>
              </button>
              <button type="submit" className="btn-submit">
                <span>SUBMIT</span>
                <span id="btn-bottom">
                  (S <i className="bi bi-command"></i>)
                </span>
              </button>
            </div>
          </Form>
        </Formik>
        {/* ========== User List ========== */}
        <table className="user-list">
          <div className="user-table">User List</div>
          <tbody>
            <tr className="table-heading">
              <th>Name</th>
              <th>DoB/Age</th>
              <th>Sex</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Marital Status</th>
              <th>Blood Group</th>
              <th>Govt Id Type</th>
              <th>Govt Id</th>
            </tr>
            {users.length
              ? users.map((item) => {
                  return (
                    <tr className="table-data">
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.sex}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                      <td>{item.marital_status}</td>
                      <td>{item.blood_group}</td>
                      <td>{item.id_type}</td>
                      <td>{item.govt_id}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default MedicalForm;
