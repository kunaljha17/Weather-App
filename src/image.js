// Weather condition → Unsplash image URL mapping
const weatherImages = {
  smoke: "https://images.unsplash.com/photo-1553634854-5582930498bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  haze: "https://images.unsplash.com/photo-1677002333588-1ceb05e8d904?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  dust: "https://images.unsplash.com/photo-1761530376342-8e0a2b0abdab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fog: "https://images.unsplash.com/photo-1567448786891-efeeb717a231?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mist: "https://images.unsplash.com/photo-1669229412036-d2c9163ca3a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  clear: "https://images.unsplash.com/photo-1639026463663-1a1292f5e753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  sunny: "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  clouds: "https://images.unsplash.com/photo-1728062816724-57b626d1affc?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cloudy: "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  overcast: "https://plus.unsplash.com/premium_photo-1667143324668-064f130f731d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rain: "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  drizzle: "https://images.unsplash.com/photo-1737472794232-4c8be24ba535?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  thunderstorm: "https://images.unsplash.com/photo-1612998753552-828f550c3319?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  snow: "https://images.unsplash.com/photo-1617657325434-605291e6a3f9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// Function to get image by weather text
export function getWeatherImage(weatherText = "") {
  weatherText = weatherText.toLowerCase();

  // Find matching condition
  for (let key in weatherImages) {
    if (weatherText.includes(key)) {
      return weatherImages[key];
    }
  }

  // Default image if nothing matches
  return "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=800";
}
