import { Session } from '../interfaces/session';

type SessionRowProps = {
  session: Session;
};

const showDetail = (sessionId: string) => {
  document.getElementById(sessionId)?.classList.add('active');
};

const SessionRow = (props: SessionRowProps): JSX.Element => {
  const session = props.session;
  const premiumClass = session.isPremium ? ' premium-session ' : '';
  const isKeynoteSession = session.type?.toLowerCase() === 'keynote';
  const keynoteClass = isKeynoteSession ? ' keynote-session ' : '';
  const noSpeakerClass = session?.speakers?.length ? '' : ' no-speaker ';
  const imageStyles = session.imageUrl ? { backgroundImage: `url("${session.imageUrl}")` } : {};

  return (
    <div
      onClick={() => showDetail(session.id)}
      className={'schedule-sessions' + premiumClass + keynoteClass + noSpeakerClass}
    >
      <div className={'session-image' + premiumClass + keynoteClass} style={imageStyles}>
        {session.isPremium && <div className="session-type">Premium</div>}
        {isKeynoteSession && <div className="session-type">Keynote</div>}
      </div>
      <div className="session-content">
        <div className="session-name">{session.name}</div>
        {!!session?.speakers?.length && session.speakers.length > 0 && (
          <div>
            Speaker{session.speakers.length > 1 ? 's' : ''}:&nbsp;
            {session.speakers.map((speaker) => (
              <span key={speaker}>{speaker}</span>
            ))}
          </div>
        )}
        <div>
          Day {session.day} &#8212; {session.timeslot}
        </div>
        <div>{session.room}</div>
      </div>
    </div>
  );
};

export default SessionRow;
