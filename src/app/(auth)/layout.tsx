export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bgc-f7">
      <div className="wrapper ovh">
        <div className="body_content">{children}</div>
      </div>
    </main>
  );
}
