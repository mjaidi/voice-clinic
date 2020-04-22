import React, { useState } from "react"
import { Formik } from "formik"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/button"
import { LoginFormSection, Feedback } from "./styles"

const LoginForm = props => {
  const [feedbackMsg, setFeedbackMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const encode = data => {
    const formData = new FormData()
    Object.keys(data).forEach(k => {
      formData.append(k, data[k])
    })
    return formData
  }

  return (
    <div>
      <Feedback className={feedbackMsg === "" ? "" : "show"}>
        <div className="feedback-content">
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={event => setFeedbackMsg("")}
          />
          {feedbackMsg}
        </div>
      </Feedback>

      <LoginFormSection>
        <h2 class="form-title">Se connécter</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "Obligatoire"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Adresse email invalide"
            }
            if (!values.password) {
              errors.password = "Obligatoire"
            } else if (values.password.length < 6) {
              errors.password = "Mot de passe trop court - min 6 caractères"
            }

            return errors
          }}
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true)

            firebase
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then(cred => {
                console.log("loggedIn")
                setIsLoading(false)
                resetForm()
                navigate("/")
              })
              .catch(err => {
                setFeedbackMsg(err.message)
                setIsLoading(false)
                console.log(err)
              })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className={
                    errors.email && touched.email && errors.email ? "error" : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="error-message">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe:</label>
                <input
                  type="password"
                  name="password"
                  className={
                    errors.password && touched.password && errors.password
                      ? "error"
                      : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className="error-message">
                  {errors.password && touched.password && errors.password}
                </div>
              </div>
              <Button type="submit" disabled={isLoading}>
                Se connécter
              </Button>
            </form>
          )}
        </Formik>
      </LoginFormSection>
    </div>
  )
}

export default LoginForm
