import React from 'react';

import Hero from '../components/Hero/Hero';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import OurUsers from '../components/OurUsers/OurUsers';

import heroBgAvif from '../assets/img/hero/Banner_photo.avif';
import heroBgWebp from '../assets/img/hero/Banner_photo.jpg';
import heroBgJpeg from '../assets/img/hero/Banner_photo.jpg';
import infoBlockImg from '../assets/icons/InfoBlock.svg';
import BG from './../components/UI/BG/BG';

const IndexPage = () => {
  return (
    <>
      <h1 className="hidden">Test task</h1>

      <BG color="light-gray">
        <Hero
          images={{ avif: heroBgAvif, webp: heroBgWebp, jpeg: heroBgJpeg }}
          title="Test assignment for front-end developers"
          text="Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers."
          btnText="Sign up"
        />

        <section className="info-blocks" style={{ marginBottom: '190px' }}>
          <div className="container">
            <InfoBlock
              linkImg={infoBlockImg}
              title="Let's get acquainted"
              descr="I'm a good front-end developer"
              text="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
              btnText="Sign up"
            />
          </div>
        </section>

        <section className="our-users">
          <div className="container">
            <OurUsers
              title="Our cheerful users"
              descr="The best specialists are shown below"
            />
          </div>
        </section>
      </BG>
    </>
  );
};

export default IndexPage;
