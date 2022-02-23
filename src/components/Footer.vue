<template>
	<footer>
		<section>
			<h3>Help</h3>
			<p>Contact Us</p>
			<p>Payments</p>
			<p>Shopping</p>
			<p>FAQ</p>
		</section>
		<section>
			<h3>About</h3>
			<p>History</p>
			<p>Sustainability</p>
			<p>Careers</p>
		</section>
		<section>
			<div class="sinus-container">
				<img src="../assets/sinus-logo.svg" alt="Sinus Logo"/>
			</div>
			<img src="../assets/twitter.svg" alt="Twitter" />
			<img src="../assets/instagram-logo.svg" alt="Instagram" />
			<img src="../assets/facebook-logo.svg" alt="Facebook" />
		</section>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global-colors.scss';
footer {
	height: 25rem;
	background-size: cover;
	background-position: center;
	background-size: 70%;
	background-color: #f4f4f4;
	background-repeat: no-repeat;
	background-image: url("../assets/skater.jpg");
	display: flex;
	box-shadow: 4px -4px 16px rgba(0, 0, 0, 0.25);
}

h1,h2,h3,h4{
  margin: 0;
  padding: 0;
}

section:nth-child(1),
section:nth-child(2) {
	margin: 2rem 4rem;
}
section:nth-child(3) {
	margin: 3rem 5rem auto auto;
}

section:nth-child(3) > img {
	margin: 4rem 2.5rem;
}
.sinus-container {
	display: flex;
	img{
		margin-right: 3rem;
		transform: scale(1.4);
	}
}
.logo-text {
	h1{
		font-size: 5rem;
	}
	h2 {
		font-size: 1.7rem;
		color: $primary-greyed-out;
	}
}
</style>
