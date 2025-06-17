import Headerjsx from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div>
      <Headerjsx/>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept 
            title="Components"
            description="The core UI building block."
            img="../src/assets/components.png"
            />
            <CoreConcept 
            title="Props"
            description="Props are also very important for the development"
            img="../src/assets/components.png"
            />
            <CoreConcept 
            title="JSX UI"
            description="The JSX UI is important"
            img="../src/assets/jsx-ui.png"
            />
            <CoreConcept 
            title="State Management"
            description="4The core UI building block."
            img="../src/assets/state-mgmt.png"
            />
          </ul>
        </section>
        <h2>Time to get started</h2>
      </main>
    </div>
  );
}

export default App;
