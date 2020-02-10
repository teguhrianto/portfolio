<template>
    <section class="works bg-gray" id="works">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My Recent <span class="text-primary">Works</span></h3>
            <b-row align-h="center">
                <b-col lg="4" md="4" sm="6" v-for="work in works" :key="work.id">
                    <div class="card item-work">
                        <div class="card-img-top">
                            <img :src="work.img_first" alt="" class="img-first">
                            <img :src="work.img_second" alt="" class="img-second">
                        </div>
                        <div class="card-body">
                            <h5 class="font-weight-bold mb-1">
                                <a :href="work.url" class="text-dark" target="_blank">{{work.title}}</a>
                            </h5>
                            <ul class="tech mb-1">
                                <li v-for="tech in work.tech" :key="tech">
                                    <img :src="tech" alt="" height="30">
                                </li>
                            </ul>
                            <p class="mb-2">
                                {{work.description}}
                            </p>
                            <b-form-row>
                                <b-col cols="auto">
                                    <a :href="work.url" target="_blank" class="btn btn-primary">
                                        <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon> View Site
                                    </a>
                                </b-col>
                                <b-col cols="auto" v-if="work.github !== ''">
                                    <a :href="work.github" target="_blank" class="btn btn-dark">
                                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon> Source Code
                                    </a>
                                </b-col>
                            </b-form-row>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'Works',
    data: function() {
        return {
            works:[
                {
                    id: '0',
                    title:'Sampoerna Kayu', 
                    url: 'https://www.sampoernakayoe.co.id/',
                    github: '',
                    img_first: require('./../assets/img/works/img-1.jpg'), 
                    img_second: require('./../assets/img/works/img-2.jpg'), 
                    description:'Slicing PSD Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
            ]
        };
    }
}
</script>
