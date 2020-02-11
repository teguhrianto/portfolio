<template>
	<div>
		<main>
			<Header />

			<section class="hero bg-dark">
				<b-container>
					<b-row align-h="center">
						<b-col lg="8" class="text-center text-white">
							<h1 class="mb-0 text-uppercase font-weight-bold" data-aos="fade-up" data-aos-duration="300">
								Teguh <span class="text-primary">Rianto</span>
							</h1>
							<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="400"><strong>Frontend Developer</strong></h2>
							<!-- <h5>
								I'm a Frontend Developer with extensive experience for over 6 years.<br>
								My expertise is to convert a Mockup or Design (PSD, Sketch, XD, Figma) into Clean Code (HTML, CSS, JS)
							</h5> -->
							<h5 data-aos="fade-up" data-aos-duration="500">
								Here you'll find my resume &amp; some of my recent works as well.<br>
								Have a look around and if you're interested in working together, <a href="mailto:teguh.rianto22@gmail.com" class="text-primary">get in touch!</a>
							</h5>
						</b-col>
						<b-col lg="12">
							<b-row align-h="center" class="pt-3">
								<b-col cols="auto">
									<div class="form-group">
										<a href="https://github.com/teguhrianto" class="btn btn-dark btn-md" target="_blank">
											<font-awesome-icon :icon="['fab', 'github']" class="mr-1"></font-awesome-icon> Github
										</a>
									</div>
								</b-col>
								<b-col cols="auto">
									<div class="form-group">
										<a href="https://www.linkedin.com/in/teguhrianto/" class="btn btn-info btn-md" target="_blank">
											<font-awesome-icon :icon="['fab', 'linkedin']" class="mr-1"></font-awesome-icon> LinkedIn
										</a>
									</div>
								</b-col>
							</b-row>
						</b-col>
						<b-col lg=12 data-aos="fade-up" data-aos-duration="800">
							<scrollactive>
								<a href="#about" class="scroll-down scrollactive-item"></a>
							</scrollactive>
						</b-col>
					</b-row>
					
				</b-container>
			</section>

			<section class="about" id="about">
				<b-container>
					<b-row align-v="center" align-h="center">
						<b-col lg="10">
							<b-row align-v="center" align-h="between">
								<b-col md="5" data-aos="slide-right" data-aos-duration="500">
									<div class="profile p-2 border rounded">
										<img src="./assets/img/profile.jpg" class="img-fluid rounded" alt="">
									</div>
								</b-col>
								<b-col md="7" data-aos="slide-left" data-aos-duration="600">
									<h3 class="font-weight-bold">About <span class="text-primary">Me</span></h3>
									<p>
										Born & raised in Cimahi, Indonesia. I'm a Frontend Developer with extensive experience for over 6 years who still learning by time and doing.
									</p>
									<p>
										My expertise is to convert a Mockup or Design (PSD, Sketch, XD, Figma) into Clean Code (HTML, SCSS, CSS, JS).
									</p>
									<p>
										I've had a chance to work on a variety of projects, with agencies, companies or even individuals.
									</p>
									<p>
										I also create, maintain, &amp; contribute to some open source projects, <a href="https://github.com/o2system/" target="_blank">O2System PHP Framework</a> is one of them. You can see my other open source projects on my <a href="https://github.com/teguhrianto" target="_blank">Github</a> 
									</p>
									<hr>
									<b-row>
										<b-col cols="auto">
											<p>
												<font-awesome-icon icon="phone" class="mr-2"></font-awesome-icon> <a class="text-dark" href="tel:+6281320264420"><strong>+62 813 2026 4420</strong></a>
											</p>
										</b-col>
										<b-col cols="auto">
											<p>
												<font-awesome-icon icon="envelope" class="mr-2"></font-awesome-icon> <a class="text-dark" href="mailto:teguh.rianto22@gmail.com"><strong>teguh.rianto22@gmail.com</strong></a>
											</p>
										</b-col>
									</b-row>
									<a href="#" class="btn btn-primary btn-md"><font-awesome-icon icon="download" class="mr-2"></font-awesome-icon> Download CV</a>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
				</b-container>
			</section>

			<Skills />

			<Experiences />

			<Works />

		</main>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Experiences from './components/Experiences.vue'
import Works from './components/Works.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	components: {
		Header,
		Skills,
		Experiences,
		Works, 
		Footer
	}
}
</script>