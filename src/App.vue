<template>
	<main>
		<Header />

		<section class="hero bg-dark">
			<b-container>
				<b-row align-h="center">
					<b-col lg="8" class="text-center text-white">
						<h1 class="mb-0 text-uppercase font-weight-bold">
							Teguh <span class="text-primary">Rianto</span>
						</h1>
						<h2 class="text-uppercase"><strong>Frontend Developer</strong></h2>
						<!-- <h5>
							I'm a Frontend Developer with extensive experience for over 6 years.<br>
							My expertise is to convert a Mockup or Design (PSD, Sketch, XD, Figma) into Clean Code (HTML, CSS, JS)
						</h5> -->
						<h5>
							Here you'll find my resume &amp; some of my recent works as well.<br>
							Have a look around and if you're interested in working together, <a href="mailto:teguh.rianto22@gmail.com" class="text-primary">get in touch!</a>
						</h5>
					</b-col>
					<b-col lg=12>
						<scrollactive>
							<a href="#about" class="scroll-down scrollactive-item"></a>
						</scrollactive>
					</b-col>
				</b-row>
				<!-- <b-row align-h="center" class="pt-5">
					<b-col cols="auto">
						<div class="form-group">
							<a href="#portfolio" class="btn btn-light btn-lg px-5 py-3">
								My Works
							</a>
						</div>
					</b-col>
					<b-col cols="auto">
						<div class="form-group">
							<a href="mailto:teguh.rianto22@gmail.com" class="btn btn-primary btn-lg px-5 py-3">
								Hire Me
							</a>
						</div>
					</b-col>
				</b-row> -->
			</b-container>
		</section>

		<section class="about" id="about">
			<b-container>
				<b-row align-v="center" align-h="between">
					<b-col md="5">
						<img src="./assets/img/profile.jpg" class="img-fluid" alt="">
					</b-col>
					<b-col md="6">
						<h3 class="font-weight-bold">About Me</h3>
						<p>
							Born & raised in Cimahi, Indonesia. I'm a Frontend Developer with extensive experience for over 6 years who still learning by time and doing.<br>
							My expertise is to convert a Mockup or Design (PSD, Sketch, XD, Figma) into Clean Code (HTML, SCSS, CSS, JS). I have had a chance to work on a variety of projects, with agencies, companies or even individuals.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
	</main>
</template>

<script>
import Header from './components/Header.vue'

export default {
	name: 'app',
	components: {
		Header
	}
}
</script>