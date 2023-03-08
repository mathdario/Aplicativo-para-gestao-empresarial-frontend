export default function TextField({
  label,
  size,
  noMargins,
  error,
  shadow,
  ...props
}) {
  return (
    <div className={` ${size ? size : "w-full"} w-full `}>
      <div
        className={`${
          noMargins ? null : "mb-2"
        } font-nuni font-semibold text-sm flex justify-between`}
      >
        <label className="font-nuni font-bold text-sm" htmlFor={label}>
          {label}
        </label>
      </div>
      <div className="relative">
        <textarea
          {...props}
          id={label}
          className={` ${
            size ? size : "w-full"
          } bg-white py-2 px-3 border rounded-lg placeholder:font-nuni focus:outline-none focus:border-basePink border-gray-400 ${
            error ? "border-red-600" : null
          } ${shadow ? "drop-shadow-lg" : null}`}
        />
        <span
          className={`${
            !error ? "hidden" : null
          } text-red-600 text-xs absolute -bottom-3 left-3`}
        >
          {error}
        </span>
      </div>
    </div>
  );
}
