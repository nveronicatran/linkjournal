import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What tech does Gatsby use?',
    content: () => (
      <>
        Enjoy the power of the latest web technologies – React.js , Webpack ,
        modern JavaScript and CSS and more — all set up and waiting for you to
        start building
      </>
    ),
  },
  {
    title: 'Short Version',
    content: () => (
      <>
        Born from a compulsive curiosity in hybrid environments, [LINK](Journal) is an experiment dedicated to exploring in-between spaces.
      </>
    ),
  },
  {
    title: 'Long Version',
    content: () => (
      <>
        It seeks to connect opposing ends of different spectrums of thought within visible and invisible environments, in order to form a fertile ground for discussion in order to communicate different ways of thinking, seeing and doing. It will address a variety of topics; • materiality of digital systems • exchanges of information mediated by the physical environment • transparency of processes within creative project development • embodied methodologies of digital environments More specifically, it is exploring these topics through the discipline of design; speaking directly to how design and creative practitioners are intertwined with digital and ecological interactions. LINK is experimental, purposefully meandering. It is a space to bridge ideas, generate new thoughts, engage in conversations and reflect on those intricate connections found in those spaces in-between. These spaces refer to the points of tension constantly forming to give appearance on topics that are core to conversations around cities, people, design, and preferable futures. Within this complex mesh of peripheral knowledge, a link forms and rapidly transforms knowledge in ways that one would not usually see. The primary objective of this journal aims to articulate, visualise and communicate the multiple layers of information that surrounds us, questioning where lines converge between data, information, knowledge within cultures, communities and our society. It connects the dots, making links inbetween the signs, words, lines and pages of this book. What is a book but a body of symmetries, ink on paper, bound together with string, connecting narratives, connecting materials, and connecting the in betweens? The journal hence serves as a conceptual and practice-based space on how we can reflect on our relationship, with dominant narratives related to technological ‘progress’.
      </>
    ),
  },
  {
    title: 'How does do I future-proof my website?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
    title: 'What exactly does Gatsby build?',
    content: () => (
      <>
        Gatsby.js is a static PWA (Progressive Web App) generator. You get code
        and data splitting out-of-the-box. Gatsby loads only the critical HTML,
        CSS, data, and JavaScript so your site loads as fast as possible. Once
        loaded, Gatsby prefetches resources for other pages so clicking around
        the site feels incredibly fast.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      
    </Container>
  </Section>
);

export default Faq;
