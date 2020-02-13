<template>
    <section class="works bg-gray" id="works">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My Recent <span class="text-primary">Works</span></h3>
            <b-row align-h="center">
                <b-col lg="4" md="4" sm="6" v-for="work in works" :key="work.id" data-aos="fade-left" data-aos-duration="300">
                    <div class="card item-work">
                        <div class="card-img-top">
                            <a :href="work.url" target="_blank"><img :src="work.img_first" alt="" class=""></a>
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
                    img_first: require('./../assets/img/works/sampoerna-kayu.jpg'), 
                    img_second: '', 
                    description:'Slicing PSD Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '1',
                    title:'Net Virtue', 
                    url: 'https://netvirtue.com.au/',
                    github: '',
                    img_first: require('./../assets/img/works/netvirtue.png'), 
                    img_second: '', 
                    description:'Slicing PSD Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '2',
                    title:'Luchadores Legales', 
                    url: 'https://luchadoreslegales.com/',
                    github: '',
                    img_first: require('./../assets/img/works/luchadores.jpg'), 
                    img_second: '', 
                    description:'Slicing PSD Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '3',
                    title:'Nara Park', 
                    url: 'http://narapark.co.id/',
                    github: '',
                    img_first: require('./../assets/img/works/narapark.jpg'), 
                    img_second: '', 
                    description:'Slicing PSD Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '4',
                    title:'OC & Associates', 
                    url: 'http://ocassociates.jp/',
                    github: '',
                    img_first: require('./../assets/img/works/oc-associates.jpg'), 
                    img_second: '', 
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
