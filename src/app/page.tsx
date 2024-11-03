import styles from './styles.module.css'
import { Tab, Tabs } from "./widgets/Tab";
import IconGithub from "./icons/IconGithub";
import IconLinkedin from './icons/IconLinkedin';
import List from './widgets/List';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-20">
        <section className="row-start-1">
          <h1 className="text-4xl font-bold">Juan Rayhan H</h1>
          <p className="text-lg font-semibold mt-4">Frontend Web Developer</p>
          <p className="text-sm">
            I&apos;m a Frontend Web Developer based in Indonesia. I have a passion for web development and love to create websites and web applications that are user-friendly and accessible. I&apos;m always looking for opportunities to learn and grow as a developer.
          </p>
          <div className="mt-10">
            <button className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded inline-flex items-center">
              <IconGithub className={styles.iconGithub}/>
            </button>
            <button className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded inline-flex items-center">
              <IconLinkedin className={styles.iconLinkedin}/>
            </button>
          </div>
        </section>
        <section className="row-start-1">
          <Tabs>
            <Tab label="Work Experiences">
              <List/>
            </Tab>
            <Tab label="Projects">wsd</Tab>
            <Tab label="About">wsd</Tab>
          </Tabs>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
