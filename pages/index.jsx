import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { PROFILE } from '../data/config';
import { PROJECTS } from '../data/projects';

export default function Home({ lang, setLang }) {
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;
  return (
    <>
      <Head>
        <title>Portfolio — {PROFILE.name}</title>
        <meta name="description" content="Construction & Project Management — portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Header lang={lang} setLang={setLang} email={PROFILE.email} />
      <main>
        <Hero lang={lang} profile={PROFILE} />
        <section id="projects" className="container mt-16">
          <h2 className="text-2xl font-bold mb-6">{t('Projects','Проекты','Projets')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(p => <ProjectCard key={p.slug} lang={lang} project={p} />)}
          </div>
        </section>
        <About lang={lang} about={PROFILE.about} />
        <Skills lang={lang} profile={PROFILE} />
      </main>
      <Footer lang={lang} profile={PROFILE} />
    </>
  );
}
