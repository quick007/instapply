import ApplicationColumn from "./applicationColumn";


export default function ApplicationManager({applications}: {applications:[]}) {
    return (
        <div className="flex justify-start  border-none rounded-lg p-4 gap-10">
          <main className={`text-primary-darkish mb-3 grow font-bold py-1 px-4 flex flex gap-1`}>
        <ApplicationColumn cells={[]}>Position</ApplicationColumn>
        <ApplicationColumn cells={[]}>Languages & Skills</ApplicationColumn>
        <ApplicationColumn cells={[]}>Link</ApplicationColumn>
        <ApplicationColumn cells={[]}>Done?</ApplicationColumn>
        </main>
      </div>
    )
}
