import React, { useState } from "react"
import { Formik } from "formik"
import axios from "axios"
import qs from "query-string"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import Button from "../components/common/button"
import { ContactForm, Feedback } from "../page_styles/contact"
import { accentMainLight } from "../components/Layout/variables"

const Contact = props => {
  const [feedbackMsg, setFeedbackMsg] = useState("")
  return (
    <Layout location="/contact" title="Contactez Nous">
      <PageHeader title="Demandez nous un devis"></PageHeader>

      <Container color={accentMainLight} paddingTop="3rem">
        <SEO title="Demandez un Devis" />
        <Feedback>{feedbackMsg}</Feedback>
        <ContactForm>
          <Formik
            initialValues={{ email: "", message: "" }}
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
            onSubmit={(values, { setSubmitting }) => {
              const axiosOptions = {
                url: this.props.location.pathname,
                method: "post",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(values),
              }

              axios(axiosOptions)
                .then(response => {
                  setFeedbackMsg("Form submitted successfully!")
                  setSubmitting(false)

                  values = ""
                })
                .catch(err => {
                  setFeedbackMsg("Form could not be submitted.")
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
