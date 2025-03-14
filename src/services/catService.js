const API_KEY = 'live_TyHHSACRFsbAtb6n6Kt5wXdYb64ZwmyBSB3Ce2XWZWkrtSP0dN1f5f0qxhjMbNwk'; // Tu API key

export const getGatitos = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=true', {
      headers: {
        'x-api-key': API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Verifica los datos aquí
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};