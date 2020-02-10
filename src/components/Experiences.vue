<template>
    <section class="experiences" id="experiences">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My <span class="text-primary">Experiences</span></h3>
            <b-row align-h="center">
                <b-col lg="11">
                    <ul class="timeline">
                        <li v-for="experience in experiences" :key="experience.id">
                            <b-row align-h="between">
                                <b-col md="6">
                                    <p class="date small mb-2">
                                        {{experience.date_start}} &mdash; {{experience.date_end}}
                                    </p>
                                </b-col>
                                <b-col md="6">
                                    <div class="description">
                                        <h6 class="font-weight-bold">{{experience.company}} <br><span class="text-primary">{{experience.title}}</span></h6>
                                        <p>{{experience.description}}</p>
                                    </div>
                                </b-col>
                            </b-row>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'Experiences',
    data: function() {
        return {
            experiences:[
                {
                    id: '4',
                    date_start: 'Mar 2018',
                    date_end: 'Present',
                    company: 'Freelance',
                    title: 'Frontend Developer',
                    description: 'Besides my main job, I also have a side job as a freelancer. Most of the projects are slicing / converting Mockup or Design (PSD, Sketch, XD, Figma) into clean HTML Code.'
                },
                {
                    id: '3',
                    date_start: 'Mar 2018',
                    date_end: 'Present',
                    company: 'PT. Lingkar Kreasi (Circle Creative)',
                    title: 'Project Manager & Lead Frontend Developer',
                    description: 'PT. Lingkar Kreasi is a digital agency based in Bandung. Some of my tasks are managing projects, leading frontend team, creating base templates and themes for internal or external projects, landing page, admin panel and also slicing PSD to HTML'
                },
                {
                    id: '2',
                    date_start: 'Nov 2014',
                    date_end: 'Present',
                    company: 'O2System PHP Framework (Open Source Project)',
                    title: 'Co Founder & Lead Frontend Developer',
                    description: 'The world first PWA PHP Framework. The open source framework which builds awesome progressive web apps using the most standard web technology PHP, HTML, Javascript and CSS. I contribute and responsible for UI and UX of this whole framework.'
                },
                {
                    id: '1',
                    date_start: 'Nov 2014',
                    date_end: 'Mar 2018',
                    company: 'PT. Yukbisnis Indonesia',
                    title: 'Frontend Developer',
                    description: 'PT. Yukbisnis Indonesia (yukbisnis.com) is a company which builds online business ecosystem that provide infrastructures to create online store. Some of my tasks are creating templates and themes for online store, landing page, admin panel and also slicing PSD to HTML.'
                },
                {
                    id: '0',
                    date_start: 'Aug 2012',
                    date_end: 'Oct 2014',
                    company: 'CV. Diginiq Asia',
                    title: 'Frontend Developer',
                    description: 'CV. Diginiq Asia is a digital agency based in Japan. Some of my tasks are slicing and coverting PSD design to HTML, also customing Wordpress themes.'
                },
            ]
        };
    }
}
</script>
