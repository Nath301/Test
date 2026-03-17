export default async (req) => {
  const { to, subject, html } = await req.json();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer re_QxFmDrQy_8D3Ncm5Ttk9M41nkz7EXatEe`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Lettrd <onboarding@resend.dev>",
      to,
      subject,
      html
    })
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
};

export const config = { path: "/api/send-email" };
