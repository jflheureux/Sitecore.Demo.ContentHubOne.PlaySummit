import { Session } from '../interfaces/session';
import { contentHubImageSrcGeneratorFromString } from '../utilities/contentHubImageLoader';

type SessionRowProps = {
  session: Session;
};

const showDetail = (sessionId: string) => {
  document.getElementById(sessionId)?.classList.add('active');
};

const SessionRow = (props: SessionRowProps): JSX.Element => {
  const premiumClass = props.session.isPremium ? ' premium-session ' : '';
  const isKeynoteSession = props.session.type?.toLowerCase() === 'keynote';
  const keynoteClass = isKeynoteSession ? ' keynote-session ' : '';
  const noSpeakerClass = props?.session?.speakers?.length ? '' : ' no-speaker ';

  return (
    <div
      onClick={() => showDetail(props.session.id)}
      className={'schedule-sessions' + premiumClass + keynoteClass + noSpeakerClass}
    >
      <div
        className={'session-image' + premiumClass + keynoteClass}
        style={{
          backgroundImage: `url("${contentHubImageSrcGeneratorFromString(props.session.image)}")`,
        }}
      >
        {props.session.isPremium && <div className="session-type">Premium</div>}
        {isKeynoteSession && <div className="session-type">Keynote</div>}
      </div>
      <div className="session-content">
        <div className="session-name">{props.session.name}</div>
        {props?.session?.speakers?.length && (
          <div>
            Speaker{props.session.speakers.length > 1 ? 's' : ''}:&nbsp;
            {props.session.speakers.map((speaker) => (
              <span key={speaker}>{speaker}</span>
            ))}
          </div>
        )}
        <div>{props.session.room}</div>
      </div>
    </div>
  );
};

export default SessionRow;
