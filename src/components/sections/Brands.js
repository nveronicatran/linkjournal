import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>Issue 01:States of Matter</h1>
            <p>LINK Journal’s first issue is dedicated to the
theme ‘States of Matter’, with a focus on the
changing forms in between information and
knowledge. 

The ancient Greeks translated the natural
science of physics as “knowledge of nature”,
it studies matter, its motion, and behaviour in
relation to space and time. 

The ‘state’ of an element refers to the
structure and form of its materiality within
a specific moment in time. It is a temporal
mode of existence, with the power to
radically transform, when introduced to a new
environment. Hence, the state of the particles
that make up one matter is not the same as
another.

What is commonly defined as ‘matter’ is the
physical part of the universe; a substance or
a body, which defines various environments,
consequently creating the diversity of
materiality present on planet Earth.

The
changing nature of information gives the way
for multiple morphologies to form tensions and
reveal connections.
As matter transforms between states, the
processes of translation define something
‘in-between’. Both temporal and spatial, this
conversion of structure is redefining the
appearance and meaning of this matter within
its environment. It is in this hybrid space that a
radical change in behaviour and properties of
the matter will happen, redefining its meaning
and role within its environment. Closeness,
motion and arrangement of particles will
change as its state changes.

Space for interpretations of the notion
In the same way that physics studies
matter, this first issue analyses the nature
of information and its physical embodiment.
‘States of Matter’ explores the changing
materialities of digital systems and the impact
of the interdependence between physical and
digital spaces.

It questions the possibilities for what is
matter, with the aim to provoke our current
understandings, progress these concepts
between now and the future. Is matter a form of
energy? Can we hold it? Can we interact with
it? How can we further unpack the definitions
of matter?

--

We are currently seeking contributors to respond and interpret the themes above. Get in touch if you are interested! 

</p>
            
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
