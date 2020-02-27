<template>
    <section class="works bg-gray" id="works">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My Recent <span class="text-primary">Works</span></h3>
            <b-row align-h="center">
                <b-col lg="4" md="4" sm="6" v-for="(work, index) in works" :key="index" data-aos="fade-left" data-aos-duration="300">
                    <div class="card item-work">
                        <div class="card-img-top">
                            <a :href="work.url" target="_blank"><img :src="work.img_first" alt="" class=""></a>
                        </div>
                        <div class="card-body">
                            <h5 class="font-weight-bold mb-0">
                                <a :href="work.url" class="text-dark" target="_blank">{{work.title}}</a>
                            </h5>
                            <p class="mb-1 text-muted">
                                (Working with <a :href="work.work_with_url" target="_blank" class="font-weight-bold text-dark">{{work.work_with}}</a>)
                            </p>
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
                    work_with: 'Personal',
                    work_with_url: 'https://teguhrianto.my.id/',
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
                    id: '1',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
                    title:'Net Virtue', 
                    url: 'https://netvirtue.com.au/',
                    github: '',
                    img_first: require('./../assets/img/works/netvirtue.jpg'), 
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
                    id: '2',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    id: '4',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Personal',
                    work_with_url: 'https://teguhrianto.my.id/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Personal',
                    work_with_url: 'https://teguhrianto.my.id/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
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
                {
                    id: '13',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
                    title:'Rowawi', 
                    url: 'https://teguhrianto.my.id/works/rowawi/',
                    github: '',
                    img_first: require('./../assets/img/works/rowawi.jpg'), 
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
                    id: '14',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
                    title:'My Life After Coffee', 
                    url: 'https://teguhrianto.my.id/works/my-life-after-coffee/',
                    github: '',
                    img_first: require('./../assets/img/works/coffee.jpg'), 
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
                    id: '15',
                    work_with: 'Threefold Team',
                    work_with_url: 'http://threefoldwebdev.com/',
                    title:'Deamaya', 
                    url: 'https://teguhrianto.my.id/works/deamaya/',
                    github: '',
                    img_first: require('./../assets/img/works/deamaya.jpg'), 
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
