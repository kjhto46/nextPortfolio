
import Link from "next/link";
import classes from "./Header.module.scss";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  

  return (
    <header className={`${classes.header}`}>
      <h1>
        <Link href={"/"}>Kwonjunhee</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/skill"}>Skill</Link>
          </li>
          <li>
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        <ThemeSwitcher />
      </nav>
    </header>
  );
}
