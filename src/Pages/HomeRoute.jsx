import {
  Ads,
  Banner,
  FollowUs,
  NewProductSlider,
  Sponsors,
  Testimonials,
  Categories,
} from "@/Components";

export default function HomeRoute() {
  return (
    <>
      <Banner />
      <NewProductSlider />
      <Ads />
      <Sponsors />
      <Categories />
      <FollowUs />
      <Testimonials />
    </>
  );
}
