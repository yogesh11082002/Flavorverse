import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.8347 3.47363L6.95972 15.6836H3.99972V20.5256H9.13172L15.0067 8.31563H17.9997V3.47363H12.8347Z" fill="white"/></svg>
      </div>
      <div className="flex flex-col -space-y-2">
        <span className="text-xl font-bold font-headline tracking-tighter text-foreground">
          GOOD
        </span>
        <span className="text-xl font-bold font-headline tracking-tighter text-foreground">
          FOOD
        </span>
      </div>
    </Link>
  );
}
