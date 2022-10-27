import {
  Ads,
  Banner,
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
      <Sponsors />
      <FollowUs />
      <Testimonials />
    </>
  )
}
