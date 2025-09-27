import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FlavorVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
