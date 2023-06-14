import { Nav } from './Nav';
import { Head } from './Head';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
// import { Section6 } from './Section6';
import { Rfix } from './Rfix';
import './all.css';
import './ph773.css';
import './ph450.css';
import Form from './Form';
function App() {
  return (
    <>
      <Nav />
      <main>
      <Head />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Form />
      <Rfix />
      </main>
    </>
  );
}

export default App;
