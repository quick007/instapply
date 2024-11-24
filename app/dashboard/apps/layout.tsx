import ApplicationColumn from "./components/applicationColumn";
import ApplicationManager from "./components/applicationManager";
import SubnavTab from "./components/subnavTab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex gap-5 mx-2">
        <SubnavTab name="recommended">Recommended</SubnavTab>
        <SubnavTab name="saved">Saved</SubnavTab>
        <SubnavTab name="applied">Applied</SubnavTab>
      </div>
      <hr className="border-b-0.5 border-gray-200" />
      <ApplicationManager pos="Position" lan={["Languages"]} link="Link" isHeading={true}></ApplicationManager>
      <hr className="border-b-1 border-gray-200" />
      {children}
    </div>
  );
}
