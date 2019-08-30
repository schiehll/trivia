import React from "react"
import PropTypes from "prop-types"
import Header from "components/header"
import Card from "components/card"
import Content from "components/content"
import Footer from "components/footer"
import Button from "components/button"
import Emoji from "components/emoji"
import PageWrapper from "components/page-wrapper"
import { PATHS } from "routes"

const propTypes = {
  error: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
}

const ErrorMessgae = ({ navigate, error }) => {
  const goHome = () => {
    navigate(PATHS.HOME)
  }

  return (
    <PageWrapper>
      <Card>
        <Header>
          <h1>Oops, there's an error</h1>
          <h2>We are sorry about that</h2>
        </Header>
        <Content>{error}</Content>
        <Footer>
          <Button data-testid="go-home-btn" onClick={goHome}>
            <Emoji description="back-emoji">👈</Emoji> Try again
          </Button>
        </Footer>
      </Card>
    </PageWrapper>
  )
}

ErrorMessgae.propTypes = propTypes

export default ErrorMessgae
