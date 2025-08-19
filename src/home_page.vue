<script>
export default 
{
    name: "Home",
    data: function () {
        return 
        {

        }
    }, 
    // Los métodos del objeto 
    methods:
    {

    },
    // Propiedades reactivas??? Datos que recibe???
    props:
    {

    },
    // Otros componentes que usa este componente, deben ser importados
    components:
    {

    },
    // Funciones que se ejecutan antes de renderizar el objeto.
}

</script>

<template>
  <!--Etiquetas estructurales (header, nav, main, section, article, footer)-->
  <h1>About me</h1>
  <p>My name is Samuel Martinez, I'm a Computer Engineering student.</p>
  <img alt="me" src="./resources/yo.jpeg" id="my_photo">
</template>

<style>
#my_photo
{
  height:350px;
  width: 250px;
}
</style>