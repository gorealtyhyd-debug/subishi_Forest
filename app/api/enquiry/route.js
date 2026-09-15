export async function POST(request) {
  const data = await request.json();

  if (!data || !data.name || !data.phone) {
    return Response.json({ ok: false, error: "Name and number are required." }, { status: 400 });
  }

  // TODO: forward to your CRM / mail service, e.g. Resend, SendGrid, HubSpot or a Google Sheet.
  console.log("Forest Edge enquiry", data);

  return Response.json({ ok: true });
}
