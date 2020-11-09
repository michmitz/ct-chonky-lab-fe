export const sendChonk = async(chonk) => {
  const res = await fetch(`${process.env.API_URL}/chonks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chonk)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

