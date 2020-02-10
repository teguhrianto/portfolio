<template>
    <header ref="navbarAffix">
        <b-navbar toggleable="md" type="light" variant="default" :class="{affix: isAffix}">
            <b-container>
                <b-navbar-brand href="/" class="font-weight-bold">T<span class="text-primary">R</span></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <scrollactive tag="ul" active-class="active" class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#about" class="nav-link scrollactive-item">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav-link scrollactive-item">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#experiences" class="nav-link scrollactive-item">Experiences</a>
                        </li>
                        <li class="nav-item">
                            <a href="#works" class="nav-link scrollactive-item">Works</a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:teguh.rianto22@gmail.com" class="nav-link">Contact</a>
                        </li>
                    </scrollactive>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data: function() {
        return {
            isAffix:false
        };
    },
    methods: {
        scrolling: function() {
            if ( this.$refs.navbarAffix.offsetTop - window.scrollY <= -100) {
                this.isAffix = true;
            } else {
                this.isAffix = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrolling);
    }
}
</script>
