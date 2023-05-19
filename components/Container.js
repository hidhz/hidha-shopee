export default function Container({ children, padding }) {
  return <div className={`w-[85%] mx-auto ${padding}`}>{children}</div>;
}
