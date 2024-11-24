import ApplicationColumn from "./applicationColumn";


export default function ApplicationManager({applications}: {applications:[]}) {
    return (
        <div className="flex justify-start  border-none rounded-lg p-4 gap-10">
        <ApplicationColumn cells={[]}>Position</ApplicationColumn>
        <ApplicationColumn cells={[]}>Langauges</ApplicationColumn>
        <ApplicationColumn cells={[]}>Link</ApplicationColumn>
      </div>
    )
}