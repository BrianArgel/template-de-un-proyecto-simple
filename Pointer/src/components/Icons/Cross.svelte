<script>
  import { buttonNav } from "../Buttons/button";
</script>

<style>
  svg{
    transition: .4s;
  }
  svg.rotate{
    transition: .4s;
    transform: rotate(45deg);
  }
  svg path {
    fill: var(--color-black);
  }
</style>

<div class="icon">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class:rotate="{$buttonNav}">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C10.8954 24 10 23.1046 10 22L10 2C10 0.895431 10.8954 7.64398e-08 12 0C13.1046 -7.64397e-08 14 0.89543 14 2L14 22C14 23.1046 13.1046 24 12 24Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 13.1046 23.1046 14 22 14H2C0.895431 14 0 13.1046 0 12C0 10.8954 0.89543 10 2 10H22C23.1046 10 24 10.8954 24 12Z" fill="black"/>
  </svg>
</div>