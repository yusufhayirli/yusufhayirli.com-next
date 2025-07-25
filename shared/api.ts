// shared/api.ts
export const getPortfolio = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio`);
  const data = await res.json();
  if (!data.success) throw new Error(data.error);
  return data.data;
};
