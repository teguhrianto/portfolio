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
                                <b-col cols="auto" v-if="work.url !== '#'">
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
                    id: '99',
                    title:'Personal Portfolio', 
                    url: 'https://teguhrianto.my.id/',
                    github: 'https://github.com/teguhrianto/portfolio',
                    img_first: require('./../assets/img/works/personal.jpg'), 
                    img_second: '', 
                    description:'Open Source VueJs Template with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bs-vue.png'), 
                            require('./../assets/img/skills/vue.png'),
                            require('./../assets/img/skills/js.png'),
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                        ]
                },
                {
                    id: '0',
                    title:'Net Virtue', 
                    url: 'https://netvirtue.com.au/',
                    github: '',
                    img_first: require('./../assets/img/works/netvirtue.jpg'), 
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
                    title:'Sampoerna Kayoe', 
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
                    id: '10',
                    title:'PT SMI (Persero)', 
                    url: 'https://ptsmi.co.id/',
                    github: '',
                    img_first: require('./../assets/img/works/smi.jpg'), 
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
                {
                    id: '4',
                    title:'FXBulls', 
                    url: 'https://www.fxbulls.com/',
                    github: '',
                    img_first: require('./../assets/img/works/fxbulls.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '5',
                    title:'Freshcery Store', 
                    url: 'https://groceries-organic-store.now.sh/',
                    github: 'https://github.com/teguhrianto/Groceries-Organic-Store/',
                    img_first: require('./../assets/img/works/freshcery.jpg'), 
                    img_second: '', 
                    description:'Open Source Ecommerce Template with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '6',
                    title:'Nara Park', 
                    url: 'http://narapark.co.id/',
                    github: '',
                    img_first: require('./../assets/img/works/narapark.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '7',
                    title:'Mikrotik Template', 
                    url: '#',
                    github: 'https://github.com/teguhrianto/responsive-mikrotik-template-bootstrap4',
                    img_first: require('./../assets/img/works/mikrotik.jpg'), 
                    img_second: '', 
                    description:'Open Source Mikrotik Template with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '8',
                    title:'Fuji String', 
                    url: 'https://fujistring.com/',
                    github: '',
                    img_first: require('./../assets/img/works/fujistring.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '9',
                    title:'Lady Eve Patisserie', 
                    url: 'https://ladyeve.id/',
                    github: '',
                    img_first: require('./../assets/img/works/ladyeve.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '10',
                    title:'Proof Of Concept', 
                    url: 'https://proofofconcept.co.id/',
                    github: '',
                    img_first: require('./../assets/img/works/poc.jpg'), 
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
                    id: '11',
                    title:'VCGamers', 
                    url: 'https://teguhrianto.my.id/works/vcgamers/',
                    github: '',
                    img_first: require('./../assets/img/works/vcgamers.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
                    tech: [
                            require('./../assets/img/skills/bootstrap.png'), 
                            require('./../assets/img/skills/html5.png'), 
                            require('./../assets/img/skills/css3.png'),
                            require('./../assets/img/skills/sass.png'), 
                            require('./../assets/img/skills/jquery.png')
                        ]
                },
                {
                    id: '12',
                    title:'Beyoutiful', 
                    url: 'https://teguhrianto.my.id/works/beyoutiful/',
                    github: '',
                    img_first: require('./../assets/img/works/beyoutiful.jpg'), 
                    img_second: '', 
                    description:'Slicing Sketch Design to HTML Code with responsive layout & cross browser compability.',
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
