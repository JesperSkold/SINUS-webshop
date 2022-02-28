<template>
	<footer>
		<section class="help-about">
      <div class="help">
        <h4>Help</h4>
        <p>Contact Us</p>
        <p>Payments</p>
        <p>Shopping</p>
        <p>FAQ</p>
      </div>
      <div class="about">
        <h4>About</h4>
        <p>History</p>
        <p>Sustainability</p>
        <p>Careers</p>
      </div>
		</section>
		<section>
			<div class="sinus-container">
				<img src="../assets/sinus-logo.svg" alt="Sinus Logo" class="logo"/>
        <div class="social-media">
          <img src="../assets/twitter.svg" alt="Twitter" />
          <img src="../assets/instagram-logo.svg" alt="Instagram" />
          <img src="../assets/facebook-logo.svg" alt="Facebook" />
        </div>
			</div>
		</section>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global-colors.scss';
footer {
  position: static;
  bottom: 0;
	height: 12rem;
  padding: 0rem 10rem;
	background-size: cover;
	background-position: center bottom;
	background-size: 70%;
	background-color: #f4f4f4;
	background-repeat: no-repeat;
	background-image: url("../assets/skater.jpg");
	display: flex;
  align-items: center;
  justify-content: space-between;
	box-shadow: 4px -4px 16px rgba(0, 0, 0, 0.25);
}

.help-about {
  display: flex;
  width: 15rem;
  justify-content: space-between;
}

h4, p{
  margin: 0;
  padding: 0;
}

p {
  line-height: 1.5rem;
}


.sinus-container {
	display: flex;
  flex-direction: column;
  align-items: center;
}

.social-media {
  img {
    margin: .5rem;
    height: 1.5rem;
  }
}
</style>
