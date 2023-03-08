export default function GrayButton({ label, large, noMargins, ...props }) {
  return (
    <button
      className={` bg-baseLight border hover:brightness-90 text-lg  ${
        noMargins ? null : "mt-5"
      } font-nuni rounded-lg text-green-600 ${large ? "w-64" : "w-40"} h-9`}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {props.children}
        {label}
      </div>
    </button>
  );
}
