export const getGatitos = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    }
  };