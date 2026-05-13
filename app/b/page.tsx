import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import ComparisonTable from '@/components/ComparisonTable'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function VariantB() {
  const variant = 'b'

  return (
    <main className="min-h-screen">
      <Hero variant={variant} />
      <ProblemSection variant={variant} />
      <SolutionSection variant={variant} />
      <ComparisonTable />
      <SocialProof variant={variant} />
      <Pricing variant={variant} />
      <FAQ variant={variant} />
      <FinalCTA variant={variant} />
    </main>
  )
}
