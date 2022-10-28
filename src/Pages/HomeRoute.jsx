import {
  Ads,
  Banner,
  Categories,
  FollowUs,
  NewProductSlider,
  Sponsors,
  Testimonials,
} from '@/Components'

export default function HomeRoute() {
  return (
    <>
      <Banner />
      <NewProductSlider />
      <Ads />
      <Categories />
      <Sponsors />
      <FollowUs />
      <Testimonials />
    </>
  )
}
