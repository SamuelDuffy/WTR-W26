import SectionDivider from '../../SectionDivider'

function Experience() {
  return (
    <section id="experience">
      <div className="box">
        <h2>Technical Experience</h2>
        <p>
          The major work I shipped this term, grouped by theme.
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Code Review Agent System</h3>
        <p>
          Built an AI-powered code review system that runs four sub-agents in parallel (logic,
          security, design, patterns) and aggregates findings into inline PR comments. Started with a
          benchmark of 57 real PRs to figure out what automated feedback is actually useful.
          Dropped an expensive Opus judge layer mid-project when the numbers showed it wasn't
          worth the cost. Five tickets across the epic: benchmark analysis, context builder,
          sub-agents, raw diff support, and the aggregator.
        </p>
        <div className="middleimage">
          <img src="/WTR-W26/review-agent-arch.svg" alt="Code Review Agent Architecture" />
        </div>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Embedding Pipeline Fixes</h3>
        <p>
          Fixed a bug where SageMaker 429 responses were classified as permanent failures instead
          of retryable ones (IL-2581). Added Retry-After header support. Separately, fixed
          empty-text records causing silent data loss in the embedding pipeline (IL-2827), and
          fixed SQS message size overflow when transcription events got too large (IL-1738).
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Security & Validation</h3>
        <p>
          Added vault ownership validation to agentic-search endpoints (IL-2876). Without it, any
          authenticated user could pass arbitrary vault IDs and access other users' data. Also
          fixed consumer shutdown timeouts that exceeded ECS stopTimeout, causing buffered documents
          to be lost on redeploy (IL-2916).
        </p>
      </div>

      <SectionDivider />

      <div className="box">
        <h3>Logging & Cleanup</h3>
        <p>
          Standardized CloudWatch log formatting for Forensio (IL-2597). Fixed a logging KeyError
          in local dev (IL-2656). Changed log levels where they were wrong: unsupported images
          from ERR to WRN (IL-2538), deleted vaults from ERROR to INFO (IL-2203). Built SSM
          hot-reload for agent prompts (IL-2395). Normalized timezone strings (IL-2659). Removed
          deprecated fields and dead code (IL-2262, IL-1807). Fixed VP8/VP9 video codec container
          issues (IL-2157). Enforced top-level Python imports via linter (IL-3088).
        </p>
      </div>
    </section>
  )
}

export default Experience
