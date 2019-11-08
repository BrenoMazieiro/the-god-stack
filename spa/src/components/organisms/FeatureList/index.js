import React from 'react'
import styled from 'styled-components'

import {
  Feature, Link, Heading, Paragraph,
} from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Basic stack</StyledHeading>
    <Description>
      It includes everything necessary to build a tipical web app with focus on productivity and developer experience.
      <br />
    </Description>
    <Grid>
      <StyledFeature
        icon="nodejs"
        link="https://nodejs.org/"
        title="Nodejs"
      >
        A JavaScript runtime built on Chrome&apos;s V8 JavaScript engine
      </StyledFeature>
      <StyledFeature
        icon="docker"
        link="https://www.docker.com/"
        title="Docker"
      >
        Only independent container platform that enables organizations to seamlessly build, share and run any application, anywhere—from hybrid cloud to the edge.
      </StyledFeature>
      <StyledFeature
        icon="apollo"
        link="https://www.apollographql.com/"
        title="Apollo"
      >
        A single versatile query system to replace a patchwork of legacy APIs, with all the devtools and cloud services you need to run GraphQL at scale.
      </StyledFeature>
      <StyledFeature
        icon="graphql"
        link="https://graphql.org/"
        title="GraphQl"
      >
        A query language for APIs and a runtime for fulfilling those queries with your existing data.
      </StyledFeature>
      <StyledFeature
        icon="react"
        link="https://facebook.github.io/react"
        title="React"
      >
        The Facebook&apos;s JavaScript library for building user interfaces using components.
      </StyledFeature>
      <StyledFeature
        icon="arc"
        link="https://github.com/diegohaz/arc"
        title="Arc Atomic Design"
      >
        The popular React Atomic Design starter.
      </StyledFeature>
      <StyledFeature
        icon="webpack"
        link="https://webpack.github.io/"
        title="Webpack"
      >
        The awesome module bundler with
        {' '}
        <Link href="https://webpack.github.io/docs/hot-module-replacement.html">Hot Module Replacement</Link>
        {' '}
enabled.
      </StyledFeature>
      <StyledFeature
        icon="jest"
        link="https://facebook.github.io/jest"
        title="Jest"
      >
        The great testing framework used by Facebook to test all their Javascript code.
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
