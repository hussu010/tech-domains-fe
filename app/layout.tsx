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
        <div className="navbar bg-base-300">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">tech-domains</a>
          </div>
          <div className="navbar-end"></div>
        </div>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
