import React, { useState } from "react"
import { Formik } from "formik"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Button from "../../common/button"
import { ContactFormSection, Feedback } from "./styles"

const ContactForm = props => {
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

      <ContactFormSection>
        <Formik
          initialValues={{
            "form-name": "Contact Form",
            email: "",
            message: "",
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
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true)
            let formData = encode(values)
            const axiosOptions = {
              url: props.location.pathname,
              method: "post",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: formData,
            }

            axios(axiosOptions)
              .then(response => {
                setFeedbackMsg(
                  "Votre demande a été envoyé avec succès! Nous vous contacterons dans les plus brefs délais"
                )
                setIsLoading(false)
                resetForm({})
              })
              .catch(err => {
                setFeedbackMsg("Une erreur c'est produite!")
                setIsLoading(false)
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
            setFieldValue,
          }) => (
            <form
              onSubmit={handleSubmit}
              name="Contact Form"
              method="POST"
              data-netlify="true"
              id="form"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="form-group">
                <label htmlFor="email">Votre Email:</label>
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
                <label htmlFor="message">Descriptif de vos besoins:</label>
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
              <Button type="submit" disabled={isLoading}>
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
