<template>
    <header>
        <b-navbar toggleable="md" type="light" variant="default">
            <b-container>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>

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
                            <a href="#portfolio" class="nav-link scrollactive-item">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link scrollactive-item">Contact</a>
                        </li>
                    </scrollactive>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>
