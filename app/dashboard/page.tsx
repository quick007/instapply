export default function Page() {
  return (
    <main className="flex grow h-screen">
      <div className="w-60 bg-red-500">sidebar</div>
      <div className="grow">
        main content
        <div id="drop-zone">
          <p>Drag & drop your syllabus here</p>
          <input type="file" id="file-input" multiple></input>
        </div>
      </div>
    </main>
  );
}
