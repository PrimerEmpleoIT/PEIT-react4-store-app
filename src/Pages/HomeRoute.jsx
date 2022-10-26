import {
  Ads,
  Banner,
  Benefits,
  FollowUs,
  NewProductSlider,
  Sponsors,
  Testimonials,
} from "../Components";

export default function HomeRoute() {
  return (
    <>
      <Banner />
      <NewProductSlider />
      <Ads />
      <Benefits />
      <Sponsors />
      <Testimonials />
      <FollowUs />
    </>
  );
}
