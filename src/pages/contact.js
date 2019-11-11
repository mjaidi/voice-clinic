import React, { useState } from "react"
import { Formik } from "formik"
import axios from "axios"
import qs from "query-string"
import Dropzone from "react-dropzone"
import Thumb from "../components/common/thumb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import Button from "../components/common/button"
import { ContactForm, Feedback, DropzoneStyle } from "../page_styles/contact"
import { accentMainLight } from "../components/Layout/variables"

const Contact = props => {
  const [feedbackMsg, setFeedbackMsg] = useState("")

  return (
    <Layout location="/contact" title="Contactez Nous">
      <PageHeader title="Demandez nous un devis"></PageHeader>

      <Container color={accentMainLight} paddingTop="3rem">
        <SEO title="Demandez un Devis" />
        <Feedback className={feedbackMsg === "" ? "" : "show"}>
          <div className="feedback-content">
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={event => setFeedbackMsg("")}
            />
            {feedbackMsg}
          </div>
        </Feedback>
        <ContactForm>
          <Formik
            initialValues={{
              email: "",
              message: "",
              "form-name": "Contact Form",
              files: [],
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
                <input
                  type="hidden"
                  name="form-name"
                  value="Contact Form"
                  enctype="multipart/form-data"
                />
                <div className="form-group">
                  <label>Votre Email:</label>
                  <input
                    type="email"
                    name="email"
                    className={
                      errors.email && touched.email && errors.email
                        ? "error"
                        : ""
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
                <Dropzone
                  accept="image/*"
                  name="files"
                  onDrop={acceptedFiles => {
                    console.log(acceptedFiles)
                    // do nothing if no files
                    if (acceptedFiles.length === 0) {
                      return
                    }

                    // on drop we add to the existing files
                    setFieldValue("files", values.files.concat(acceptedFiles))
                  }}
                >
                  {({
                    isDragActive,
                    isDragReject,
                    getRootProps,
                    getInputProps,
                  }) => {
                    if (isDragActive) {
                      return "Ce fichier est autorié"
                    }

                    if (isDragReject) {
                      return "ce fichier n'est pas autorisé"
                    }

                    if (values.files.length === 0) {
                      return (
                        <div {...getRootProps()} style={DropzoneStyle}>
                          <input name="files" {...getInputProps()} />
                          <p>Gissez vos fichier ici! (max 1MB)</p>
                        </div>
                      )
                    }

                    return (
                      <div {...getRootProps()} style={DropzoneStyle}>
                        <input name="files" {...getInputProps()} />

                        {values.files.map((file, i) => (
                          <Thumb key={i} file={file} />
                        ))}
                      </div>
                    )
                  }}
                </Dropzone>
                <Button type="submit" disabled={isSubmitting}>
                  Envoyer
                </Button>
              </form>
            )}
          </Formik>
        </ContactForm>
      </Container>
    </Layout>
  )
}

export default Contact
