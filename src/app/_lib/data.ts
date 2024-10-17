export async function fetchRevenue() {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('Fetching revenue data...');
    
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating a Slow Data Fetch
 
    // const data = await sql<Revenue>`SELECT * FROM revenue`;
    const data = await fetch(url)
 
    console.log('Data fetch completed after 3 seconds.');
 
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}





// const data = await Promise.all([
//   invoiceCountPromise,
//   customerCountPromise,
//   invoiceStatusPromise,
// ]);