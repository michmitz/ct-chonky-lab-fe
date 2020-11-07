export const sendChonk = chonk => {
  const res = fetch(`${process.env.API_URL}/chonks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chonk)
  });

  const chonk = await res.json();
  if(!res.ok) throw chonk;

  return chonk;
};
