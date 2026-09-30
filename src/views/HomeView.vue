<script setup>
const skills = [
  'C#','ASP.NET Core','Entity Framework Core',
  'SQL Server','SQL','JavaScript',
  'Python','C++','HTML5',
  'CSS','Vue.js','React Native',
  'REST APIs','Azure','Postman',
  'MSTest','Power BI','GitHub',
]

const awards = [
  {
    title: 'Responsive Web Design Certification',
    source: 'FreeCodeCamp',
    date: 'November 2024',
    link: 'https://www.freecodecamp.org/certification/ImranAde/responsive-web-design'
  },
  {
    title: 'Foundational C# Certification',
    source: 'Microsoft / FreeCodeCamp',
    date: 'September 2024',
    link: 'https://www.freecodecamp.org/certification/ImranAde/foundational-c-sharp-with-microsoft'
  },
  {
    title: 'Certificate of Distinction',
    source: 'UK Bebras Challenge 2020',
    date: 'January 2020',
    link: null
  }
]
</script>

<template>
  <div class="page home-page">

    <section class="intro section-wrap">
      <p class="eyebrow">Software Engineering Apprentice · London, England</p>

      <h1>
        Imran Aderemi,<br />
        <em>Software Engineer</em>
      </h1>

      <p class="intro-copy">
        A Software Engineer with commercial experience
        developing C#, ASP.NET Core and Entity Framework applications.<br>
        When I'm not engineering software, I enjoy racing and everything motorsports.
      </p>

      <div class="intro-actions">
        <!-- <RouterLink class="button button-dark" to="/portfolio">
          Explore my work <span>↗</span>
        </RouterLink> -->

        <RouterLink class="button button-dark" to="/88+">
          Beyond the keyboard ➡️
        </RouterLink>

        <a
          class="text-link"
          href="mailto:imran.a.aderemi@gmail.com"
        >
          imran.a.aderemi@gmail.com
        </a>
      </div>
    </section>


    <section class="story section-wrap split-section">
      <div>
        <p class="eyebrow">The first brick</p>
        <h2>From the Beginning.</h2>
      </div>

      <div class="body-copy">
        <p>
          My programming journey began back in 2019, where my Computer Science teacher
          introduced me to Python. I was drawn to the logic behind building
          software and the satisfaction of turning an idea into something that
          actually works.
        </p>

        <p>
          Since then, I’ve developed my skills through college, internships,
          personal projects and my current role as a Software Engineering Apprentice.
          Today, my work spans C#, ASP.NET Core, Entity Framework, SQL Server,
          REST APIs, JavaScript and modern development practices.
        </p>

        <p>
          I’m particularly interested in building maintainable software,
          understanding the problems behind a requirement, and creating
          solutions that provide measureable value.
        </p>
      </div>
    </section>


    <section class="experience section-wrap split-section">
      <div>
        <p class="eyebrow">Experience</p>
        <h2>Real World Experience.</h2>
      </div>

      <div class="timeline">

        <article>
          <span>May 2025 - May 2027</span>

          <h3>
            Software Engineering Apprentice · John Crane / Makers Academy
          </h3>

          <p>
            Developing internal engineering calculation tools and business
            applications using C#, ASP.NET Core, Entity Framework and SQL
            Server. 
          </p>
          
          <p>  
            Working across all stages of the SDLC (Software 
            Development Lifecycle), from requirements gathering and MVP 
            development through to testing and user feedback.
          </p>

          <p>
            Designing REST APIs to centralise business logic, building and
            maintaining relational databases, and testing solutions using
            MSTest, Postman and User Acceptance Testing.
          </p>
        </article>


        <article>
          <span>Dec 2024 - Mar 2025</span>

          <h3>Intern Software Developer · TalabUK</h3>

          <p>
            Developed components and dashboards for the company's main webpage
            and mobile application. Worked with React Native to support mobile
            development and collaborated with developers to implement new
            features and improve existing functionality.
          </p>
        </article>


        <article>
          <span>Sep 2024 - Oct 2024</span>

          <h3>Intern Software Developer · Intelligent Tech Consulting</h3>

          <p>
            Assisted with the development of an internal dashboard while
            developing practical experience in technical research, debugging
            and problem solving using developer documentation and online
            technical resources.
          </p>
        </article>

      </div>
    </section>


    <section class="education section-wrap split-section">
      <div>
        <p class="eyebrow">Education</p>
        <h2>Stepping Stones.</h2>
      </div>

      <div class="body-copy">
        <p>
          <strong>Westminster Kingsway College</strong>
          · Sep 2022 - Jul 2024
        </p>

        <p>
          Level 3 National Extended Diploma in Information Technology — MMM
        </p>

        <p>
          <strong>Westminster City School</strong>
          · Sep 2017 - Aug 2022
        </p>

        <p>
          Achieved 8 GCSEs at grades 9-4, including Computer Science,
          Combined Sciences and Maths.
        </p>
      </div>
    </section>


    <section class="awards section-wrap">
      <p class="eyebrow">Awards & Certifications</p>

      <div class="timeline">
        <article v-for="award in awards" :key="award.title">
          <span>{{ award.date }}</span>

          <h3>
            <a
              v-if="award.link"
              :href="award.link"
              target="_blank"
              rel="noreferrer"
            >
              {{ award.title }}
            </a>

            <template v-else>
              {{ award.title }}
            </template>
          </h3>

          <p>{{ award.source }}</p>
        </article>
      </div>
    </section>


    <section class="skills section-wrap">
      <p class="eyebrow">Tools I use</p>

      <div class="skill-list">
        <span
          v-for="skill in skills"
          :key="skill"
        >
          {{ skill }}
        </span>
      </div>
    </section>

  </div>
</template>

<style scoped>
.intro {
  padding: 35px 0 150px;
}

.intro h1 {
  font-size: clamp(3.2rem, 8vw, 7.8rem);
  line-height: .94;
  letter-spacing: -.085em;
  margin: 24px 0;
  max-width: 1000px;
}

.intro h1 em {
  color: red;
  font-style: normal;
}

.intro-copy {
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 540px;
  color: #4e5a52;
}

.intro-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 42px;
}

.button {
  padding: 15px 20px;
  text-decoration: none;
}

.button-dark {
  background: var(--ink);
  color: var(--cream);
}

.button span {
  color: var(--acid);
  margin-left: 20px;
}

.text-link {
  font: .75rem 'DM Mono', monospace;
}

.split-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 8%;
  padding: 92px 0;
  border-top: 1px solid var(--line);
}

.split-section h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: -.07em;
  margin: 10px 0;
}

.body-copy,
.timeline {
  max-width: 650px;
}

.body-copy p,
.timeline p {
  line-height: 1.65;
  color: #536059;
}

.timeline article {
  display: grid;
  grid-template-columns: 150px 1fr;
  border-bottom: 1px solid var(--line);
  padding: 0 0 25px;
  margin-bottom: 25px;
}

.timeline span {
  font: .7rem 'DM Mono', monospace;
  color: var(--muted);
}

.timeline h3 {
  margin: 0;
  font-size: 1.05rem;
}

.timeline p {
  grid-column: 2;
  margin: 8px 0 0;
}

.skills {
  padding: 90px 0 140px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 20px;
}

.skill-list span {
  border: 1px solid var(--line);
  border-radius: 99px;
  padding: 10px 15px;
  font-size: .85rem;
}

@media (max-width: 700px) {
  .intro {
    padding: 70px 0 100px;
  }

  .intro h1 {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .intro-copy {
    font-size: 1.05rem;
  }

  .intro-actions {
    align-items: flex-start;
    flex-direction: column;
  }

  .split-section {
    display: block;
    padding: 65px 0;
  }

  .split-section>div:first-child {
    margin-bottom: 35px;
  }

  .timeline article {
    display: block;
  }

  .timeline h3 {
    margin-top: 12px;
  }

  .timeline p {
    margin-top: 10px;
  }
}
</style>