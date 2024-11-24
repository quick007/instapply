export default function AppCell({info}: {info:string}) {
    return (
        <div className="bg-green-100 py-5 px-4 border rounded text-xl">
            {info}
        </div>
    )
}