<template>
    <footer ref="footer">
        <b-container>
            <p class="text-center mb-2">
                Teguh Rianto&trade; 2020 | Made with <font-awesome-icon :icon="['fas', 'heart']" class="text-danger"></font-awesome-icon> and <a href="" target="_blank"></a><font-awesome-icon :icon="['fab', 'vuejs']" class="text-success"></font-awesome-icon>
            </p>
            <b-form-row class="justify-content-center">
                <b-col cols="auto">
                    <h4 class="mb-0">
                        <a href="https://github.com/teguhrianto" target="_blank" class="text-dark">
                            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                        </a>
                    </h4>
                </b-col>
                <b-col cols="auto">
                    <h4 class="mb-0">
                        <a href="https://www.linkedin.com/in/teguhrianto/" target="_blank" class="text-dark">
                            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
                        </a>
                    </h4>
                </b-col>
                <b-col cols="auto">
                    <h4 class="mb-0">
                        <a href="https://web.facebook.com/teguhrianto22/" target="_blank" class="text-dark">
                            <font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon>
                        </a>
                    </h4>
                </b-col>
                <b-col cols="auto">
                    <h4 class="mb-0">
                        <a href="https://instagram/teguhrianto22/" target="_blank" class="text-dark">
                            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
                        </a>
                    </h4>
                </b-col>
            </b-form-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        fixedFooter: function() {
            let footerHeight = this.$refs.footer.offsetHeight;
            document.body.style.paddingBottom = footerHeight + 'px';
        }
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', this.fixedFooter);
    }
}
</script>
