import { Poppins } from "next/font/google";
import { LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}
const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex flex-row items-center gap-3",
          font.className
        )}
      >
        <LockKeyhole className="w-8 h-8" />
        Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
