import type { TimelineEvent } from '@/data/about';

type TimelineProps = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center">The Adventure Timeline</h2>
      <ol className="relative max-w-3xl mx-auto border-l-4 border-black dark:border-white ml-4 sm:ml-auto sm:border-l-0 sm:before:absolute sm:before:left-1/2 sm:before:top-0 sm:before:h-full sm:before:w-1 sm:before:-translate-x-1/2 sm:before:bg-black sm:before:content-[''] sm:dark:before:bg-white">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li key={`${event.organization}-${event.year}`} className="relative pb-10 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-12">
              <span className="absolute -left-[14px] top-6 w-6 h-6 bg-black dark:bg-white border-4 border-white dark:border-black sm:left-1/2 sm:-translate-x-1/2" />
              <article className={`ml-8 border-4 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] sm:ml-0 ${isLeft ? 'sm:col-start-1 sm:text-right' : 'sm:col-start-2'}`}>
                <div className={`flex gap-4 items-center ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.logo} alt={event.logoAlt} className={`${event.logoSize ?? 'w-16 h-16'} shrink-0 object-contain bg-white border-2 border-black`} />
                  <div>
                    <p className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-black uppercase tracking-wide">{event.year}</p>
                    <h3 className="mt-2 font-black uppercase text-lg">{event.organization}</h3>
                    <p className="font-bold text-sm text-gray-700 dark:text-gray-300">{event.role}</p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
