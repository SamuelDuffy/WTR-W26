import SectionDivider from '../../SectionDivider'

function SideQuests() {
  return (
    <section id="side-quests">
      <div className="box">
        <h2>Side Quests</h2>
        <p>
          Things I picked up along the way that didn't fit neatly into a Jira ticket.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Claude Code & AI-Assisted Development</h3>
        <p>
          First term using AI tooling seriously for development. Used Claude Code for system
          design, debugging, and automation. Building the code review agent also taught me
          about prompt engineering and where LLMs fall apart (large diffs without careful context
          windowing, mostly).
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>The Polyglot Thing</h3>
        <p>
          C#, Python, and TypeScript in the same day was weird at first but made me think about
          design patterns at a higher level. Each language has its own idioms, and constantly
          switching forced me to separate good ideas from things I'm just used to.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Local Dev Infrastructure</h3>
        <p>
          Contributed to the LocalStack setup: one command spins up DynamoDB, OpenSearch, Secrets
          Manager, and SSM Parameter Store locally. Doesn't show up in sprint demos but saves
          real time every week.
        </p>
      </div>
    </section>
  )
}

export default SideQuests
