export default function ApplicationBar({children}: {children: React.ReactNode}) {
    return (
        <main className="bg-green-100 py-2 px-4 border rounded">
            {children}
        </main>
    )
}