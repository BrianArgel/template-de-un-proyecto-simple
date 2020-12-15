<script>

</script>

<style>
  .box{
    width: 360px;
    height: auto;
    background-color: #fff;
    position: absolute;
    top: 5rem;
    box-shadow: 0 1px 2px .5px rgba(26, 26, 26, .25);
    border-radius: 16px;
  }
  .username{
    width: 100%;
    padding: .5rem 1rem;
    display: flex;
    justify-content: flex-start;
  }
  .user-data{
    display: flex;
    align-items: center;
  }
  .user-img{
    width: 2.5rem;
    height: 2.5rem;
    border: .5px outset   #1a1a1a;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-right: .75rem;
  }
  .user-img img{
    width: calc(2.5rem - 2.5rem * .15);
    height: calc(2.5rem - 2.5rem * .15);
    border-radius: 50%; 
  }
  .data{
    display: flex;
    flex-direction: column;
  }
  .name{
    font-family: "Sansita";
    font-size: 12pt;
    color: #1a1a1a;
  }
  .now{
    font-family: "Sansita";
    font-size: 10pt;
    color: #1a1a1abe;
  }
  .img-cover{
    width: 100%;
  }
  .img-cover:before {padding-top: 56.25%;}
  img{
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 1rem;
  }
  .content{
    width: 100%;
    margin: .75rem 0 1rem 0;
    padding: 0 1rem;
  }
  .title{
    font-family: "Sansita";
    font-size: 14pt;
  }
  p{
    font-family: "Kameron";
    font-size: 12pt;
    margin-top: .5rem;
  }
</style>

<div class="box">
  <div class="username">
    <div class="user-data">
      <div class="user-img">
        <img src="./descargar.jpg" alt="asd">
      </div>
      <div class="data">
        <span class="name">UserName</span>
        <span class="now">Just 5min</span>
      </div>
    </div>
  </div>
  <div class="cover">
    <div class="img-cover">
      <img src="./asd.jpeg" alt="asd">
    </div>
  </div>
  <div class="content">
    <span class="title">Machu Picchu: Templo de las Maravillas. ¡Ven a Visitarlo!</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, inventore doloribus! Magnam nemo incidunt culpa earum, consectetur odio, aperiam alias ad ex, tenetur ducimus quasi?</p>
  </div>
  <div class="icons">
  
  </div>
</div>