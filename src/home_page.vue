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
    <form action="./handler_form.js" method="POST" class="form_container">
      <label title="etiqueta_email" class="item">Email</label>  <input type="email" class="input_field item" required></input> 
      <label title="etiqueta_comentario" class="item">Comentario</label>  <input type="text" class="input_field item" id="comentario" required></input> 
      <input type="submit" class="item"></input>
    </form>
  </section>

  <section id="shading_section">
    <h2>Contact</h2>
    <p>1578636g@umich.mx</p>
  </section>

  <section>
    <h2>Social Networks</h2>
    <nav class="container">
      <a class="item2" href="#">Samuel Martinez, facebook profile</a>
      <a class="item2" href="#">Sam_mtz, Instagram profile</a>
      <a class="item2" href="#">Samuel Nezvi, Spotify profile</a>
    </nav>

    <div class="container-relative">
      <div class="element3"></div>
    </div>
  </section>



</template>

<style>

/* Sectores de id, clase, atributo y pseudo-clases*/

#my_photo
{
  height:280;
  width: 150px;
  margin-top: 50px;
  margin-bottom: 2px;
  margin-left: 10px;
  margin-right: 50px;
}

.input_field
{
  /*background-color:beige;*/
  background-image:url("https://imgs.search.brave.com/g-gY05LeRPq2u6Hp8nS8z9PCctcGRNly_VGYrZXr8Pg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vp/YUpfd09NVmp3X0oy/VF9NSmNRUHZaaEp3/R3JtcU42NDh2SFJT/SUdONGg1YllLdk1R/WC1kLTkweGpSRmdl/VDY2S253X1I1cDdo/VUhlZW4xbzg3bDFa/U25YX0JlcXpHZWJf/MUMxem1NcXJkQlZO/LUtlUzUtOUhpb2hy/dEYyNkNRVHZfWEpp/SURfZWEwencvczYw/MC1ydy9JbSVDMyVB/MWdlbmVzK0NsaXBh/cnQrZGUrQm9iK0Vz/cG9uamErUE5HK0Rl/c2NhcmdhK2dyYXRp/cyslMjgxMCUyOS5w/bmc") ;
  border:3px dotted black;
  width:100px;
  height: 50px;
}

[title="etiqueta_email"],[title="etiqueta_comentario"]
{
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border: solid 1px black;
  text-align: center;
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


section, p, h1, figure
{
  width:50vw; /*50 % del ancho del lienzo */
  margin:auto;
}

#shading_section
{
  background-color: red;
  margin-top: 200px;
  padding: 50px;
  text-align: center;
  vertical-align:middle;
  /*Margin es separación entre elementos, transparente, color del componente contenedor (padre) 
  Padding es separación del contenido respecto al borde del elemento*/
}

.form_container
{
  display:flex;
  width: 50vw;
  height: 20vh;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items:end;
  align-content:space-evenly ;
  row-gap: 20px;
  margin-bottom:10vh;
}

.item
{
  flex-basis: 40%;
}

/*La navbar donde los enlaces se alinean en filas para entornos de escritorio
y para móviles en columnas*/

.container{
  display: flex;
  flex-flow:column wrap;
  justify-content: space-evenly;
  align-items:flex-start;
  align-content: space-evenly;
  background-color: burlywood;
  height: 5vh;
  width: 70vw;
}
.item2
{
  font-size: 12px;
  flex-basis: 40%;
}

@media  (max-width:600px)
{
  .container{
    /*Solo se sobreescriben los atributos que cambiarán */
  flex-flow:row wrap;
  align-items: baseline;
  background-color: transparent;
  }

  .item2
  {
    flex-basis: 90%;
  }
  
  /*Ocultar la sección de contacto, muy ancha para los dispositivos*/
  #shading_section
  {
    display:none;
  }
}


.container-relative
{
  margin:1em /*em = 16px */;
  font-size: 32px;
  /*Contenedor padre de 64x64px, em = 32px */
  width: 2em;
  height: 2em;
  background-color: aliceblue;
}


.element3
{
  /* Los elementos tienen un font size igual al padre, em = font-size-padre*/
  width: 1em; 
  height: 1em;
  background-color: aquamarine;
}
</style>