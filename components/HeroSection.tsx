/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const HeroSection = (): JSX.Element => {
  return (
    <section
      className="section__hero banner"
      style={{
        backgroundImage:
          "url('/api/imgproxy?url=https://playsummit.sitecoresandbox.cloud/api/public/content/b1a88e26f6a54a9ea64a5f759c5eea84?v=5aea50fb');",
      }}
    >
      <div className="section__hero__container container">
        <div className="section__hero__container__content">
          <div className="section__hero__container__content__text">
            <div className="logo">
              <div
                style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  boxSizing: 'border-box',
                  margin: '0px',
                }}
              >
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    style={{
                      maxWidth: '100%',
                      display: 'block',
                      margin: '0px',
                      border: 'none',
                      padding: '0px',
                    }}
                  />
                </div>
                <img
                  alt="Logo"
                  title="Tap to go home"
                  src="/_next/image?url=%2Fapi%2Fimgproxy%3Furl%3Dhttps%3A%2F%2Fplaysummit.sitecoresandbox.cloud%2Fapi%2Fpublic%2Fcontent%2Fc78f4095acc746a98146aaa38f57a04f%3Fv%3Dcf5688ab&amp;w=828&amp;q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  srcSet="
                    /_next/image?url=%2Fapi%2Fimgproxy%3Furl%3Dhttps%3A%2F%2Fplaysummit.sitecoresandbox.cloud%2Fapi%2Fpublic%2Fcontent%2Fc78f4095acc746a98146aaa38f57a04f%3Fv%3Dcf5688ab&amp;w=640&amp;q=75 1x,
                    /_next/image?url=%2Fapi%2Fimgproxy%3Furl%3Dhttps%3A%2F%2Fplaysummit.sitecoresandbox.cloud%2Fapi%2Fpublic%2Fcontent%2Fc78f4095acc746a98146aaa38f57a04f%3Fv%3Dcf5688ab&amp;w=828&amp;q=75 2x
                  "
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </div>
            <p className="slogan">READY | STEADY | PLAY!</p>
            <h1 className="expo">Sports and Recreation Expo</h1>
            <h3 className="title">Raise Your Game</h3>
            <div className="subtitle">
              <p>
                Explore the fifth annual <strong>PLAY!</strong> Summit.
              </p>
            </div>
          </div>
          <div className="btn__area">
            <Link href="/sessions">
              <a className="btn--main btn--main--round btn--main--primary btn--main--big">
                Explore the event
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
