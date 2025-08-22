<script>
// Ell type email marca un warning si no se pone un @
// required marca un warning si no se llena el campo
// type submit es un botón de entrega
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
  <h1 >About me</h1><br></br>
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
    <h2>Leave a comment</h2>
    <form action="./handler_form.js" method="POST">
      <label title="etiqueta_email">Email</label>  <input type="email" class="input_field" required></input> <br></br>
      <label title="etiqueta_comentario" >Comentario</label>  <input type="text" class="input_field" id="comentario" required></input> <br>
      <input type="submit"></input>
    </form>
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

/* Sectores de id, clase, atributo y pseudo-clases*/

#my_photo
{
  height:380px;
  width: 250px;
  margin-top: 50px;
  margin-bottom: 2px;
  margin-left: 10px;
  margin-right: 50px;
}

.input_field
{
  /*background-color:beige;*/
  background-image:url("https://imgs.search.brave.com/g-gY05LeRPq2u6Hp8nS8z9PCctcGRNly_VGYrZXr8Pg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vp/YUpfd09NVmp3X0oy/VF9NSmNRUHZaaEp3/R3JtcU42NDh2SFJT/SUdONGg1YllLdk1R/WC1kLTkweGpSRmdl/VDY2S253X1I1cDdo/VUhlZW4xbzg3bDFa/U25YX0JlcXpHZWJf/MUMxem1NcXJkQlZO/LUtlUzUtOUhpb2hy/dEYyNkNRVHZfWEpp/SURfZWEwencvczYw/MC1ydy9JbSVDMyVB/MWdlbmVzK0NsaXBh/cnQrZGUrQm9iK0Vz/cG9uamErUE5HK0Rl/c2NhcmdhK2dyYXRp/cyslMjgxMCUyOS5w/bmc") ;
  border:3px solid black;
  width:100px;
  height: 50px;
}

[title="etiqueta_email"],[title="etiqueta_comentario"]
{
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1, h2{
  color:beige;
}

:link{
  color:beige;
  font-size: large;
}
:visited
{
  color:rgb(0,0,0);
  font-size:small;
}

#comentario
{
  border: 5px outset ;
}

section, p, h1, figure
{
  width:500px; /**Esto evita que los  */;
  margin:auto;
}

</style>