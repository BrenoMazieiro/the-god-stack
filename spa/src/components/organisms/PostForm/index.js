import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Heading, Button, Field, Block,
} from 'components'

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem;
`

const PostForm = ({
  handleSubmit, submitting, setEmail, setPassword, isValid, client, errorMessage,
}) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e, client)}>
      <Heading level={2}>Login</Heading>
      <Field
        name="email"
        label="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        autocomplete="username"
      />
      <Field
        name="password"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        autocomplete="username"
      />
      {errorMessage && <Block palette="danger">{errorMessage}</Block>}
      {submitting && <Button type="submit" disabled>Submitting...</Button>}
      {!submitting && <Button type="submit" disabled={!isValid}>Login</Button>}
    </Form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  client: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
}

export default PostForm
