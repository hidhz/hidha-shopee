export default function InputText({ placeholder, id, ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      id={id}
      className="input input-sm input-bordered input-info w-full max-w-xs"
    />
  );
}
