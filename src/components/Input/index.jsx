import { useState } from "react";
import { MdVisibility, MdVisibilityOff, MdSearch } from "react-icons/md";

export default function Input({
  label,
  login,
  type,
  error,
  size,
  shadow,
  noMargins,
  searchFunction,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }

  const icon = !showPassword ? (
    <MdVisibilityOff className="text-gray-400 w-7 h-7" />
  ) : (
    <MdVisibility className="text-gray-400 w-7 h-7" />
  );

  return (
    <div className={` ${size ? size : "w-full"}`}>
      <div
        className={`${
          noMargins ? null : "mb-2"
        } font-nuni font-semibold text-sm flex justify-between`}
      >
        <label className="font-nuni font-bold text-sm" htmlFor={label}>
          {label}
        </label>
        <span className={!login ? "hidden" : null}>
          <a href="#">Esqueceu a senha?</a>
        </span>
      </div>
      <div className="relative">
        {type !== "password" && type !== "search" && (
          <input
            {...props}
            id={label}
            className={` ${
              size ? size : "w-full"
            } bg-white py-2 px-3 border rounded-lg placeholder:font-nuni focus:outline-none focus:border-basePink border-gray-400 ${
              error ? "border-red-600" : null
            } ${shadow ? "drop-shadow-lg" : null}`}
            type={type ? type : "text"}
          />
        )}
        {type === "password" && (
          <>
            <input
              {...props}
              id={label}
              className={`${
                !size ? "w-full" : size
              } bg-white py-2 px-3 border rounded-lg placeholder:font-nuni focus:outline-none focus:border-basePink border-gray-400 ${
                error ? "border-red-600" : null
              } ${shadow ? "drop-shadow-lg" : null} `}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute top-2 right-2"
              onClick={handleTogglePassword}
            >
              {icon}
            </button>
          </>
        )}
        {type === "search" && (
          <>
            <input
              {...props}
              id={label}
              className={`${
                !size ? "w-full" : size
              }  bg-white py-2 px-3 border rounded-lg placeholder:font-nuni focus:outline-none focus:border-basePink border-gray-400 ${
                error ? "border-red-600" : null
              } ${shadow ? "drop-shadow-lg" : null} `}
              type={"search"}
            />
            <button
              type="button"
              className="absolute top-2 right-2"
              onClick={searchFunction}
            >
              <MdSearch className="text-2xl text-gray-500" />
            </button>
          </>
        )}
        <span
          className={`${
            !error ? "hidden" : null
          } text-red-600 text-xs absolute -bottom-4 left-3`}
        >
          {error}
        </span>
      </div>
    </div>
  );
}
