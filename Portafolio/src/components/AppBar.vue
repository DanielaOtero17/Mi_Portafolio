<script setup>

</script>

<template>

      <div class="BarApp" >
        <h1>Bienvenido a mi portafolio</h1>
        <div class="Buttons">
          <v-btn variant="text">Sobre mí</v-btn>
          <v-btn variant="text">Proyectos</v-btn>
          <v-btn variant="text">Contacto</v-btn>
        </div>
      </div>

</template>

<style scoped>

h1{
  color:white;
}

.BarApp{
  background-color: rgb(49, 49, 49);
  margin: 0 0;
  box-shadow: 0 -3em 3em rgba(0, 0, 0, 0.1),
              0 0 0 0 rgb(255, 255, 255),
              0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.v-btn{
    color: rgb(255, 255, 255);
  }

.Buttons{

  }


@media (min-width: 1024px){

  .BarApp{
    height:100px;

  }



  .v-btn{
    color: white;
    text-align: center;
  }


}

@media (min-width: 960px){

  .BarApp{
    height:90px;
  }

}

@media (min-width: 320px){

.BarApp{
  height:80px;
}

}


</style>
