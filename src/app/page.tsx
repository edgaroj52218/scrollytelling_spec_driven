export default function Home() {
  return (
    <main style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
      <header style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Three things I learned my first semester</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>A scrollytelling page about lessons learned the hard way.</p>
        <p style={{ marginTop: '2rem', opacity: 0.6 }}>Scroll &darr;</p>
      </header>

      <section style={{ minHeight: '100vh', paddingTop: '4rem' }}>
        <h2 style={{ position: 'sticky', top: '2rem', fontSize: '2rem', background: 'white', padding: '1rem 0', zIndex: 10 }}>
          1. I started this assignment the night it was due
        </h2>
        <p>Procrastination is the action of putting something off until later. You get assigned something due next Friday but you decide to start it the night before. I was doing another assignment last night that went on until 2am and then I started my scrollytelling assignment. Less than an hour before it is due and I am still working on it. You are reading the result of that habit right now.</p>
      </section>

      <section style={{ minHeight: '100vh', paddingTop: '4rem' }}>
        <h2 style={{ position: 'sticky', top: '2rem', fontSize: '2rem', background: 'white', padding: '1rem 0', zIndex: 10 }}>
          2. The dumbest question is the one you do not ask
        </h2>
        <p>I did not ask for help from my Systems Integration professor because it felt like I should already know this. &quot;It is a dumb question I should not even ask.&quot; &quot;It is so late into the semester he is gonna think I have been doing nothing all this time.&quot; I did not ask for help and was left more frustrated, stressed, and anxious when the due date arrived.</p>
      </section>

      <section style={{ minHeight: '100vh', paddingTop: '4rem' }}>
        <h2 style={{ position: 'sticky', top: '2rem', fontSize: '2rem', background: 'white', padding: '1rem 0', zIndex: 10 }}>
          3. I told the AI not to give me the answer
        </h2>
        <p>I had a big project due in 2 days and I had not started it. I went to the library, sat down, pulled up everything I needed, and booted up Claude. I explicitly told it not to give me the answer, but to act as a mentor and tutor and guide me through. That restriction was needed. When I got panicked and desperate I told it to just give me the answers, and it refused. I composed myself, thanked it for sticking to my earlier instructions, and I finished the project.</p>
      </section>

      <footer style={{ minHeight: '50vh', paddingTop: '4rem' }}>
        <p style={{ fontSize: '1.25rem' }}>Next semester I am going to office hours in week two whether I have a question or not.</p>
      </footer>
    </main>
  );
}