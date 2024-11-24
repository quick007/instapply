export default function ApplicationColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`text-primary-darkish mb-3 grow font-semibold py-1 px-4 flex flex-col gap-4`}
    >
      {children}
    </main>
  );
}
