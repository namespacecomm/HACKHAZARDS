import { Events, Navbar, Footer } from '../components';

const event = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <Navbar />
    <div className="gradient-02 z-0" />
    <Events />
    <Footer />
  </div>
);

export default event;
