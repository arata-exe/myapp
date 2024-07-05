import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Carousel />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <Card 
                title="Bolasie Flick" 
                text={
                  <>
                    ค่าสกิลนักเตะที่ใช้: ⭐⭐⭐⭐⭐ <br />
                    ความง่ายในการใช้ : ⭐⭐⭐⭐  <br />
                    ประโยชน์ในเกม : 7/10
                  </>
                }
                imageUrl="/images/card1.gif" 
              />
            </div>
            <div className="col-md-4">
              <Card 
                title="Rabona Trick Action" 
                text={
                  <>
                    ค่าสกิลนักเตะที่ใช้: ⭐⭐⭐⭐⭐ <br />
                    ความง่ายในการใช้ : ⭐⭐⭐⭐⭐ <br />
                    ประโยชน์ในเกม : 10/10
                  </>
                }
                imageUrl="/images/card2.gif" 
              />
            </div>
            <div className="col-md-4">
              <Card 
                title="Scoop Turn Fake" 
                text={
                  <>
                    ค่าสกิลนักเตะที่ใช้: ⭐⭐⭐⭐⭐ <br />
                    ความง่ายในการใช้ : ⭐⭐⭐⭐⭐ <br />
                    ประโยชน์ในเกม : 10/10
                  </>
                }
                imageUrl="/images/card3.gif" 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
