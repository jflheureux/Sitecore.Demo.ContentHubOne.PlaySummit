import Image from 'next/image';
import Link from 'next/link';

const ScheduleHeader = (): JSX.Element => {
  return (
    <div className="schedule-header">
      <div className="schedule-logo">
        <Link href="/start">
          <a>
            <Image
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/c78f4095acc746a98146aaa38f57a04f?v=cf5688ab"
              width={200}
              height={40}
              className="left float"
              alt="Logo"
              title="Tap to go home"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ScheduleHeader;
