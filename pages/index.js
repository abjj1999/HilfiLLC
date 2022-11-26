import HomeCards from "../components/HomeCards";
import HomeCarousel from "../components/HomeCarousel";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className=" mt-3 row content d-flex justify-content-center flex-column align-items-center">
        <h2 className="display-5 text-center">Services</h2>
        <p className="text-muted text-center">Check out what we can offer</p>
        <div className="services col-lg-10 col-md-11 col-sm-12">
          <HomeCards />
        </div>
      </div>
    </div>
  );
}
