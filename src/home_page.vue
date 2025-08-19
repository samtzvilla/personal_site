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
  <section>
  <h1>About me</h1>
  <p>My name is Samuel Martinez, I'm a Computer Engineering student.</p>
  </section>


  <figure>
    <img alt="me" src="./resources/yo.jpeg" id="my_photo">
    <figcaption>Samuel Martinez, 36 CNJ</figcaption>
  </figure>

  <section>
    <h2>Personal Software Proyects</h2>
    <p>There are some my personal software Proyects that I've developed:</p>  
  
  <ul>
    <article>
      <li><a href="#">Water monitoring system</a></li>
      <p>A system for monitoring water level, developed in Vue</p>
    </article>

    <article>
      <li><a href="#">Website 2</a></li>
      <p>Instrument music store online</p>
    </article>
  </ul>

  </section>

  <section>
    <h2>Contact</h2>
    <p>1578636g@umich.mx</p>
  </section>

  <section>
    <h2>Social Networks</h2>
    <nav>
      <a href="#">Samuel Martinez, facebook profile<br></a>
      <a href="#">Sam_mtz, Instagram profile<br></a>
      <a href="#">Samuel Nezvi, Spotify profile<br></br></a>
    </nav>
  </section>

</template>

<style>
#my_photo
{
  height:380px;
  width: 250px;
}
</style>