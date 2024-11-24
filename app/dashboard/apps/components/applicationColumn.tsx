export default function ApplicationColumn({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string
}) {
  return (
    <main
      className={` font-semibold py-1 px-4 flex ${className}`}
    >
      {children}
    </main>
  );
}
