import { Container } from '../../Components/Container/Container';

const About = () => {
  return (
    <>
      <Container>
        <div className="text-center grid place-items-center px-18 pb-16">
          <div className="mb-5">
            <p className="text-7xl text-blue-light uppercase">About</p>
          </div>
          <div className="relative flex mb-16 w-20">
            <div className="flex-grow border-t-4 border-blue-light"></div>
          </div>
          <div className="inline-flex items-center justify-center w-full"></div>
          <div className="px-10">
            <p className="text-blue-light text-base">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="flex mb-10">
              <div>
                <img
                  src="https://static.wixstatic.com/media/5bfb6f_5577b01919214f47ad5236247965ec04.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_5577b01919214f47ad5236247965ec04.jpg"
                  alt="James Johnson"
                  className="h-28"
                />
              </div>
              <div className="grid content-center px-5 bg-blue w-full">
                <h2>James Johnson</h2>
                <h2 className="text-opacity-50">Founder and Principal</h2>
              </div>
            </div>
            <div>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
          <div>
            <div className="flex mb-10">
              <div>
                <img
                  src="https://static.wixstatic.com/media/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.jpg"
                  alt="Samantha Jones"
                  className="h-28"
                />
              </div>
              <div className="grid content-center px-5 bg-blue w-full">
                <h2>Samantha Jones</h2>
                <h2 className="text-opacity-50">Project Manager</h2>
              </div>
            </div>
            <div>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
          <div>
            <div className="flex mb-10">
              <div>
                <img
                  src="https://static.wixstatic.com/media/5bfb6f_ef3571b1f42542179f2525e57de97e3c.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_ef3571b1f42542179f2525e57de97e3c.jpg"
                  alt="Kim Bailey"
                  className="h-28"
                />
              </div>
              <div className="grid content-center px-5 bg-blue w-full">
                <h2>Kim Bailey</h2>
                <h2 className="text-opacity-50">VP Marketing</h2>
              </div>
            </div>
            <div>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
          <div>
            <div className="flex mb-10">
              <div>
                <img
                  src="https://static.wixstatic.com/media/5bfb6f_1cafad56984b4997bd73792b008c6fc3.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_1cafad56984b4997bd73792b008c6fc3.jpg"
                  alt="Trevor Sinclair"
                  className="h-28"
                />
              </div>
              <div className="grid content-center px-5 bg-blue w-full">
                <h2>Trevor Sinclair</h2>
                <h2 className="text-opacity-50">VP Acocounts</h2>
              </div>
            </div>
            <div>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
