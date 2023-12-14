import PriceCard from '@components/Cards/PriceCard'

const FreelancePage = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "25",
      description: "Essentials for your website.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      recommended: false
    },
    {
      id: 2,
      name: "Premium",
      price: "60",
      description: "Even more tools included for your website.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      recommended: false
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      description: "Everything you need for your business.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      recommended: false
    }
  ]

  return (
    <div className='w-full flex-start sm:flex-row justify-between gap-3 flex-col'>
      {plans.map(plan => (
        <PriceCard 
          key={plan.id}
          planName={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          recommended={plan.recommended}
        />
      ))}
    </div>
  )
}

export default FreelancePage