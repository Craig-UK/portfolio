import { connectToDB } from "@utils/database";
import EnterpriseCommission from "@models/enterpriseCommissions";

export const POST = async (request) => {
  const data = await request.json();

  console.log(data);

  try {
    await connectToDB();

    console.log(`In /api/commissions/enterprise/insertrecord`);
    console.log(data);

    const commission = await EnterpriseCommission.create({
        uniqueNumber: data.uniqueNumber,
        name: data.name,
        businessName: data.businessName,
        email: data.email,
        businessEmail: data.businessEmail,
        businessLinkedIn: data.businessLinkedIn,
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
