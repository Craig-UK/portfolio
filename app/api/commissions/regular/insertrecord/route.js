import { connectToDB } from "@utils/database";
import RegularCommission from "@models/regularCommissions";

export const POST = async (request) => {
  const data = await request.json();

  console.log(data);

  try {
    await connectToDB();

    console.log(`In /api/commissions/regular/insertrecord`);
    console.log(data);

    const commission = await RegularCommission.create({
        uniqueNumber: data.uniqueNumber,
        name: data.name,
        email: data.email,
        commissionPlan: data.commissionPlan,
        message: data.message,
        agreedToPrivacyPolicyAndTerms: data.agreedToPrivacyPolicyAndTerms,
        status: "Pending",
    });

    console.log(commission);

    return new Response(JSON.stringify(commission), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to create commission", { status: 500 });
  }
};

export const dynamic = "force-dynamic";
