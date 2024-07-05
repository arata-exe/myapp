import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <section className="about-us bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-title mb-4">Service</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur urna at diam eleifend, vel ultrices leo eleifend. Sed tristique odio eu est tincidunt sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
