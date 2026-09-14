import { usePhotographs } from '../hooks/usePhotographs'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import ExplorePhotography from '../components/home/ExplorePhotography'

export default function HomePage() {
  const photographs = usePhotographs()
  const hero = photographs.find((item) => item.featured) ?? photographs[0]

  return (
    <>
      <Hero photograph={hero} />
      <Services />
      <ExplorePhotography photographs={photographs} />
    </>
  )
}
