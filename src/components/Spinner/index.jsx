import {BounceLoader}  from "react-spinners";

export default function Spinner({ loading }) {
  return (
    <BounceLoader
      color="#DA0175"
      loading={loading}
      cssOverride={{}}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
