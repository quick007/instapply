import ApplicationColumn from "./applicationColumn";

export default function ApplicationManager({
  pos,
  lan,
  link,
}: {
  pos: string;
  lan: string[];
  link: string;
}) {
  return (
    <div className="flex justify-start  border-none rounded-lg p-4 gap-10">
      <ApplicationColumn>{pos}</ApplicationColumn>
      <ApplicationColumn>
        <div className="gap-2 flex items-center">
          {lan.map((v) => (
            <div className="rounded-full px-2 bg-primary-light" key={v}>{v}</div>
          ))}
        </div>
      </ApplicationColumn>
      <ApplicationColumn>{link}</ApplicationColumn>
      <ApplicationColumn>applied btn</ApplicationColumn>
    </div>
  );
}
