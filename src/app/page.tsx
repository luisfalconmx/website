import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ThemeSwitcher />
      <Link href="/blog">
        <Button>Click me</Button>
      </Link>
    </>
  );
}
