
 
export async function fetchData(){
    try {
        const response = await fetch('colors.json'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        data = await response.json(); // Parse the response as JSON;
        console.log(data);
      } catch (err) {
        err = err.message;
      }
}