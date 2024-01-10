/**
 * Created with the help of v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 */

import PriceCard from "@components/Cards/PriceCard";

const FreelancePage = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "£25",
      description: "Essentials for your website.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      recommended: false,
    },
    {
      id: 2,
      name: "Premium",
      price: "£60",
      description: "Even more tools included for your website.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      description: "Everything you need for your business.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      recommended: false,
    },
  ];

  return (
    <section class="w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-center">
      <div class="container px-4 md:px-6">
        <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
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
      </div>
    </section>
  );
};

export default FreelancePage;
