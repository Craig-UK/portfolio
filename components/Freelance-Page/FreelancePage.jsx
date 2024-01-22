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
      features: ["Simple Website", "Basic Wireframes, desktop only", "Up to 5 pages", "Responsive", "SEO Optimisation"],
      recommended: false,
    },
    {
      id: 2,
      name: "Premium",
      price: "£60",
      description: "Even more tools for your website.",
      features: ["More Advanced Website", "Better Wireframes", "Up to 10 pages", "Responsive", "SEO Optimisation"],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      description: "Everything your business requires.",
      features: ["Custom Website Features", "Better Wireframes", "Custom Amount of Pages", "Responsive", "SEO Optimisation"],
      recommended: false,
    },
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
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
