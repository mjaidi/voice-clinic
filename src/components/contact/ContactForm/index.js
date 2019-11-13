import React, { useState, useRef } from "react"
import { Formik } from "formik"
import axios from "axios"
import qs from "query-string"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Button from "../../common/button"
import Thumb from "../../common/thumb"
import { ContactFormSection, Feedback } from "./styles"

const ContactForm = props => {
  const [feedbackMsg, setFeedbackMsg] = useState("")
  let inputEl = useRef(null)
  function handleLabelClick() {
    inputEl.current.click()
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

      <ContactFormSection>
        <Formik
          initialValues={{
            email: "",
            message: "",
            "form-name": "Contact Form",
            file: "",
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
            if (!values.message) {
              errors.message = "Obligatoire"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values)
            const axiosOptions = {
              url: props.location.pathname,
              method: "post",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: qs.stringify(values),
            }
            console.log(axiosOptions)

            axios(axiosOptions)
              .then(response => {
                setFeedbackMsg(
                  "Votre demande a été envoyé avec succès! Nous vous contacterons dans les plus brefs délais"
                )
                setSubmitting(false)
                resetForm({})
              })
              .catch(err => {
                setFeedbackMsg("Une erreur c'est produite!")
                setSubmitting(false)
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
            isSubmitting,
            setFieldValue,
          }) => (
            <form
              onSubmit={handleSubmit}
              name="Contact Form"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="form-group">
                <label>Votre Email:</label>
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
                <label>Descriptif de vos besoins:</label>
                <textarea
                  type="message"
                  name="message"
                  className={
                    errors.message && touched.message && errors.message
                      ? "error"
                      : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <div className="error-message">
                  {errors.message && touched.message && errors.message}
                </div>
              </div>
              <div className="form-group">
                <label>Ajouter un fichier:</label>
                <br />
                <label className="fileLabel" onClick={handleLabelClick}>
                  {values.file.name || "Nouveau Fichier"}
                </label>

                <input
                  ref={inputEl}
                  type="file"
                  name="file"
                  style={{ visibility: "hidden" }}
                  className={
                    errors.file && touched.file && errors.file ? "error" : ""
                  }
                  onChange={event => {
                    setFieldValue("file", event.currentTarget.files[0])
                  }}
                  onBlur={handleBlur}
                />
                <Thumb file={values.file} />
                <div className="error-message">
                  {errors.file && touched.file && errors.file}
                </div>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Envoyer
              </Button>
            </form>
          )}
        </Formik>
      </ContactFormSection>
    </div>
  )
}

export default ContactForm
