import SingUpProvider from "./context/SingUpContext";
import OpenRoutes from "./routes/OpenRoutes";

export default function App() {
  return (
    <SingUpProvider>
      <OpenRoutes />
    </SingUpProvider>
  );
}
