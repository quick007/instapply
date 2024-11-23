import SubnavTab from "./components/subnavTab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex gap-5 mb-5">
        <SubnavTab name="recommended">Recommended</SubnavTab>
        <SubnavTab name="applied">Applied</SubnavTab>
        <SubnavTab name="responded">Responded</SubnavTab>
      </div>
      {children}
    </div>
  );
}
