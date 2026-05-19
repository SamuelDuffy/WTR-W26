import SectionDivider from '../../SectionDivider'

function Home() {
  return (
    <section id="home">
      <div className="box">
        <h2>Introduction</h2>
        <div className="text-and-image">
          <div className="text">
            <p>
              This is my third co-op work term report. From January to April 2026, I worked as a
              Software Developer on the AI Engineering team at Magnet Forensics in Waterloo, Ontario.
              This was my first term with the team. I spent the term building an AI-powered code
              review system, fixing production bugs in our embedding pipeline, and learning how to
              keep cloud infrastructure running reliably. This report covers what I shipped, what
              I learned, and where I fell short.
            </p>
          </div>
          <div className="image">
            <img src="/WTR-W26/magnet-logo.png" alt="Magnet Forensics" />
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>About the Employer</h2>
        <div className="text-and-image">
          <div className="text">
            <p>
              Magnet Forensics builds software for digital forensic investigations, used by law
              enforcement and government agencies to recover and analyze digital evidence. The AI
              Engineering team is part of Idea Labs, an internal R&D group. Our main project is a
              platform that lets investigators push evidence into AI-powered containers and run
              operations like semantic search and automated brief generation.
            </p>
            <p>
              Tech stack: C# .NET API gateway, Python FastAPI services with LangChain, AWS
              infrastructure via CDK, OpenSearch for vector search. About 12 engineers, shipping to
              production multiple times a week.
            </p>
          </div>
          <div className="image">
            <img src="/WTR-W26/office.jpg" alt="Magnet Forensics office" />
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>Learning Goals</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <span className="tag">Technological Literacy</span>
            <h3>AWS Cloud Proficiency</h3>
            <p>
              Get comfortable with SageMaker, SSM Parameter Store, CloudWatch, and OpenSearch.
              Debug cross-service issues independently.
            </p>
          </div>
          <div className="goal-card">
            <span className="tag">Creative Thinking</span>
            <h3>AI Code Review Agent</h3>
            <p>
              Design and build an AI-powered code review system from research through
              implementation. Make architecture decisions based on data.
            </p>
          </div>
          <div className="goal-card">
            <span className="tag">Leadership</span>
            <h3>Proactive Ownership</h3>
            <p>
              Stop waiting to be assigned work. Look for gaps, propose fixes, pick up things
              that aren't on my plate.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>Goal Reflections</h2>

        <h3>Goal 1: AWS Cloud Proficiency</h3>
        <p>
          Hit this one. I fixed SageMaker retry misclassification (IL-2581), built SSM hot-reload
          for Forensio prompts (IL-2395), standardized CloudWatch log formatting (IL-2597), and
          removed deprecated DynamoDB fields (IL-2262). The SageMaker bug forced me to trace errors
          across three services, which is exactly the kind of debugging I was targeting.
        </p>

        <hr className="section-divider" />

        <h3>Goal 2: AI Code Review Agent</h3>
        <p>
          Hit this one. Benchmarked 57 real PRs (IL-2670), built the context builder (IL-2686),
          wrote sub-agents for logic/security/design review (IL-2737), and built the aggregator
          (IL-2845). The biggest win was killing the expensive Opus judge layer when the data
          showed it ate 76% of cost while reducing recall.
        </p>

        <hr className="section-divider" />

        <h3>Goal 3: Proactive Ownership</h3>
        <p>
          Least progress here. I proposed and owned the code review agent epic, but didn't build
          a habit of reviewing teammates' PRs or looking for improvements outside my tickets.
          When things got busy I defaulted to heads-down mode. Still working on it.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>Job Description</h2>
        <p>
          Software Developer on the AI Engineering team. I worked across the full stack: Python
          services, C# API endpoints, CDK infrastructure. The biggest project was the code review
          agent system, but I also fixed production bugs in the embedding pipeline, added security
          validation to API endpoints, and did various logging/cleanup work across services.
        </p>
        <p>
          Skills I needed: Python (FastAPI, pytest, LangChain), C# (.NET, ASP.NET Core),
          TypeScript (CDK), and AWS (SageMaker, DynamoDB, OpenSearch, CloudWatch, SSM). Python
          and object-oriented design came from coursework. The AWS knowledge, production debugging,
          and AI agent architecture were all learned on the job. I also picked up prompt engineering
          and LLM evaluation techniques that aren't covered in any class I've taken.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>Conclusions</h2>
        <p>
          This was the term where I went from "I can write code that works" to "I can build
          systems that stay working." The biggest lesson was learning to let data kill my ideas.
          The other takeaway is that the gap between a demo and production is enormous: retry
          semantics, log formats, ownership validation, consumer shutdown behavior. None of it
          is exciting, but it's what keeps things running at 3am.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h2>Acknowledgments</h2>
        <p>
          Thanks to Mark Thistle for giving me room to own projects while still being available
          when I got stuck. Thanks to Devon for all his help and guidance throughout the term,
          especially when I was ramping up on unfamiliar parts of the codebase. And thanks to the
          rest of the AI Engineering team for code reviews, patience with my questions, and making
          the office a good place to be.
        </p>
      </div>
    </section>
  )
}

export default Home
