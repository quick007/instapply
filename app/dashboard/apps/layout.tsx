import ApplicationColumn from "./components/applicationColumn";
import SubnavTab from "./components/subnavTab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex gap-5 mb-1">
        <SubnavTab name="recommended">Recommended</SubnavTab>
        <SubnavTab name="applied">Applied</SubnavTab>
        <SubnavTab name="responded">Responded</SubnavTab>
      </div>
      <div className="flex justify-start border-none rounded-lg p-4 gap-10">
        <ApplicationColumn size = "fill">Company</ApplicationColumn>
        <ApplicationColumn size = "fill">Position</ApplicationColumn>
        <ApplicationColumn size = "lg">Location</ApplicationColumn>
        <ApplicationColumn size = "sm">Custom</ApplicationColumn>
        <ApplicationColumn size = "lg">Link</ApplicationColumn>
      </div>
      {children}
    </div>
  );
}
