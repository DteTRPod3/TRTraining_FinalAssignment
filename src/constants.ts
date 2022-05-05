const API_URL = "http://localhost:8080/cars";
const cities= [
      "Delhi",
      "Mumbai",
      "Kolkata",
      "Bangalore",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Surat",
      "Lucknow",
      "Jaipur",
    ];
const contactpattern="[6-9]{1}[0-9]{9}";
const emailpattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&/*-]).{8,}$/

export {API_URL,cities,contactpattern,emailpattern,passwordpattern}