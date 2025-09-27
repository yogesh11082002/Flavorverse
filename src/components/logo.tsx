import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-md">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.835 3.474L6.96 15.684H4V20.526H9.132L15.007 8.316H18V3.474H12.835Z" fill="white"/>
        </svg>
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
