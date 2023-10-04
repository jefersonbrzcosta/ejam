import { BodyFrame } from "./components/BodyFrame";
import { LogoHeader } from "./components/LogoHeader";
import { MainFrame } from "./components/MainFrame";
import { PageHeader } from "./components/PageHeader";
import { ProcessSteps } from "./components/ProcessSteps";

function App() {
  return (
    <MainFrame>
      <div className="w-full items-center flex-col flex justify-center">
        <LogoHeader />
        <PageHeader />
        <ProcessSteps />
        <BodyFrame />
      </div>
    </MainFrame>
  );
}

export default App;
