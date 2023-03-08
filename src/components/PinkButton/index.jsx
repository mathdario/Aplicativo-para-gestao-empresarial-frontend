export default function PinkButton({ label, large, noMargins, ...props }) {
  return (
    <button
      className={` bg-basePink hover:brightness-90 text-lg ${
        noMargins ? null : "mt-5"
      } font-nuni rounded-lg text-white ${large ? "w-64" : "w-40"} h-9`}
      {...props}
    >
      {label}
    </button>
  );
}
