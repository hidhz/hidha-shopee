import Link from "next/link";

export default function NavItem({ children, href }) {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  );
}
