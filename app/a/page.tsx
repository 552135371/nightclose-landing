import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import CycleVisual from '@/components/CycleVisual'
import SolutionSection from '@/components/SolutionSection'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function VariantA() {
  const variant = 'a'

  return (
    <main className="min-h-screen">
      <Hero variant={variant} />
      <ProblemSection variant={variant} />
      <CycleVisual />
      <SolutionSection variant={variant} />
      <SocialProof variant={variant} />
      <Pricing variant={variant} />
      <FAQ variant={variant} />
      <FinalCTA variant={variant} />
    </main>
  )
}
