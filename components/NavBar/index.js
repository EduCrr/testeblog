import Link from "next/link";
import { navigationLinks } from "../../utils/data";
import { useRouter } from "next/router";
export const NavBar = () => {
  const router = useRouter();

  const verifyPath = (path) => {
    if (path === "/" && router.pathname !== "/") {
      return "black";
    }
    //path da dentro do router?
    if (router.pathname.indexOf(path) === 0) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <ul>
      {navigationLinks.map((item, k) => (
        <li key={k}>
          <Link href={item.path}>
            <a style={{ color: verifyPath(item.path) }}>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
