import React, { useState } from "react"
import { graphql } from "gatsby"
import { Formik } from "formik"
import axios from "axios"
import qs from "query-string"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimesCircle,
  faPhone,
  faLocationArrow,
  faAt,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import Button from "../components/common/button"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import { ContactForm, Feedback, ContactInfo } from "../page_styles/contact"
import { accentSecondaryLight } from "../components/Layout/variables"

const Contact = props => {
  const { data } = props
  const contact = data.contact.nodes[0].frontmatter
  const [feedbackMsg, setFeedbackMsg] = useState("")

  return (
    <Layout location="/contact" title="Contactez Nous">
      <PageHeader title="Demandez nous un devis"></PageHeader>

      <Container color={accentSecondaryLight} paddingTop="3rem" textured>
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
        <Grid>
          <GridItem lgColumns={6} lgNbColumns={2}>
            <ContactInfo>
              <div className="content">
                <FontAwesomeIcon icon={faPhone} />
                {contact.phone}
              </div>
              <div className="content">
                <FontAwesomeIcon icon={faAt} />
                {contact.email}
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faLocationArrow} />
                {contact.address}
              </div>
            </ContactInfo>
          </GridItem>
          <GridItem lgColumns={6} lgNbColumns={4}>
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
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
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
                    <Button type="submit" disabled={isSubmitting}>
                      Envoyer
                    </Button>
                  </form>
                )}
              </Formik>
            </ContactForm>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    contact: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/contact.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          phone
          email
          address
        }
      }
    }
  }
`
