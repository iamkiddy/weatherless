<template>
  <div>
    <div class="main-section">
      <h1 class="main-section-title">
        Welcome , to Weatherless .</h1>
        <p class="sub-text">
          Enter the location
        </p>
        <form  class="form" @submit.prevent="getWeather">
        <div class="search-bar">
          <vs-input border v-model="city" placeholder="City" class="city"/>
          <vs-input border v-model="country" placeholder="Country" class="country"/>
          </div>
           <vs-button ref="button" flat class="b">Search</vs-button>
        </form>
          <div class="output">
            Temperature : <b-badge variant="primary">{{this.temperature}}</b-badge><br>
            Pressure : <b-badge variant="secondary">{{this.pressure}}</b-badge><br>
            Humidity : <b-badge variant="success">{{this.humidity}}</b-badge><br>
            Speed : <b-badge variant="warning">{{this.speed}}</b-badge><br>
            Country : <b-badge variant="danger">{{this.co}}</b-badge><br>
          </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    data(){
      return{
        city:"",
        country:"",
        temperature:"",
        pressure:"",
        humidity:"",
        speed:"",
        co:"",
      }
    },
    methods:{
      getWeather(){
        const API_KEY = "2426f2f1ad05fb2e71f5882b72d5d983";
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}`)
         .then((response)=>{
        this.temperature = response.data.main.temp;
        this.pressure = response.data.main.pressure;
        this.humidity = response.data.main.humidity;
        this.speed = response.data.wind.speed;
        this.co = response.data.sys.country;
        window.console.log(response.data.weather)
        this.city=""
        this.country=""
    })
}
}
}
</script>
<style scoped>

.main-section{
  margin-left:300px;
  margin-top:50px;
}
.city{
  width: 200px;
}

.country{
  width: 200px;
}
.search-bar{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.b{
  position: relative;
  right:-530px;  
}

</style>
