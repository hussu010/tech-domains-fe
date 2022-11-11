import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div className="navbar bg-neutral">
          <div className="navbar-start"></div>
          <div className="navbar-center bg-neutral text-neutral-content">
            <a className="btn btn-ghost normal-case text-xl">tech-domains</a>
          </div>
          <div className="navbar-end"></div>
        </div>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
