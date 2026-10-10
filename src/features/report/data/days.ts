/** Pull requests from one GitHub repository. */
export type PullRequestGroup = {
  /** `owner/name` on GitHub. */
  repo: string
  numbers: readonly number[]
  /** The repository is private: only its collaborators can open the links. */
  collaboratorsOnly?: boolean
}

/** Any other link worth opening: a deployed project, a document. */
export type ReportLink = {
  label: string
  href: string
  /** One line on what the link is. */
  description?: string
}

/** A bullet point, optionally with sub-points. */
export type NoteItem = string | { text: string; items: readonly string[] }

/** Learnings about one topic, e.g. a program module. */
export type LearnedGroup = {
  /** Shown as a subheading. Leave out when the day has a single group. */
  topic?: string
  items: readonly NoteItem[]
}

export type ReportDay = {
  /** Used as the route path, e.g. `/monday`. */
  slug: string
  weekday: string
  /** ISO `YYYY-MM-DD`. */
  date: string
  /** One line on what the day was about. Empty until written. */
  focus: string
  /** A short first-person paragraph. */
  summary: string
  /** What I shipped or finished. */
  done: readonly string[]
  /** What I learned or would do differently, grouped by topic. */
  learned: readonly LearnedGroup[]
  /** Blockers I hit and how they were resolved, or are still open. */
  blockers: readonly string[]
  /** What carries over to the next day. */
  next: readonly string[]
  /** Pull requests worked on or reviewed that day, grouped by repository. */
  pullRequests: readonly PullRequestGroup[]
  /** Links that aren't pull requests. */
  links: readonly ReportLink[]
  /** Acknowledgements, in my own words. */
  thanks: string
}

/** The final week of the program, Monday to Friday. Fill each day's notes in here. */
export const REPORT_DAYS: readonly ReportDay[] = [
  {
    slug: 'monday',
    weekday: 'Monday',
    date: '2026-10-05',
    focus: 'Planning the week around three months of feedback, and starting on QA, my main area to improve.',
    summary:
      'I opened the final week by going back over the feedback I received during the three months of the Nerdery and using it to plan the next five days. One area stood out as the place with the most room to grow: quality assurance. I made it the focus of the week and started by revisiting the QA week deliverables with fresh eyes.',
    done: [
      'Reviewed the feedback from the three months of the program and used it to plan the week.',
      'Identified QA as my principal area of improvement in the Nerdery.',
      'Studied QA theory and compared it side by side with the feedback Leonardo Enamorado gave me during the QA week.',
      'Reworked the Monday and Tuesday deliverables of the QA week based on that feedback.',
    ],
    learned: [
      {
        topic: 'Quality assurance',
        items: [
          'Reading the theory next to specific feedback on my own work made the gaps concrete, which made them much easier to fix than general advice would.',
          'I learned in depth how to associate risks with bugs correctly, so each bug is tied to the risk it puts on the product.',
          'When exploring an application for bugs, the environment matters as much as the browser and operating system, sometimes more. Conditions like time and geolocation can change how the app behaves and expose bugs that a browser or OS matrix alone would miss.',
          'I used Claude as a mentor rather than an author: it helped me test my understanding and challenge my reasoning, while I took ownership of the written content in every deliverable.',
        ],
      },
    ],
    blockers: [],
    next: ['Keep working through the rest of the QA week feedback and update the remaining deliverables.'],
    pullRequests: [
      {
        repo: 'ravn-qa/qa-nerdery-round-robbin-week-trainees',
        numbers: [43, 44, 45, 73, 74, 75, 84, 96],
        collaboratorsOnly: true,
      },
    ],
    links: [],
    thanks:
      'Special thanks to Leonardo Enamorado for reviewing these pull requests and agreeing to give me feedback a second time.',
  },
  {
    slug: 'tuesday',
    weekday: 'Tuesday',
    date: '2026-10-06',
    focus: 'Finishing the QA week feedback, with the capstone project first, and starting on the Design week.',
    summary:
      'I spent most of the day closing out the QA week feedback for Wednesday, Thursday and Friday, with the most attention on Friday: the final capstone project. Alongside the feedback, I refreshed my Playwright knowledge so I can explain and defend every technical decision in the test suite. I made the suite more complete and fully self-contained. By the end of the day I had moved on to the Design week feedback.',
    done: [
      'Continued working on the QA week feedback for Wednesday, Thursday and Friday, focusing on Friday, the final capstone project.',
      'Refreshed my knowledge of Playwright for both API and UI testing, so I am ready to take ownership of and defend my technical decisions at any moment.',
      'Improved test coverage so the suite handles edge cases.',
      'Made the tests run on their own without any environment variables to set up: each run creates its own test accounts in the MedicBook app and deletes them afterwards, even when a test fails.',
      'Started working on the Design week feedback.',
    ],
    learned: [
      {
        topic: 'Quality assurance',
        items: [
          'A test suite that sets up and cleans up its own data is easier for anyone to run and more trustworthy, because no run depends on leftover state or local configuration.',
        ],
      },
      {
        topic: 'Design',
        items: [
          'A correct answer means little without the reasoning behind it. The explanation is what shows I understand the decision.',
          'Taking ownership of my answers and defending them is a vital part of communication. As a developer, I should be able to defend my technical decisions by laying out the pros and cons and the reasoning behind the option I chose.',
          'Analyzing user interviews to pull out loud but shallow findings helps me understand the problem a product can solve, even before digging deeper.',
        ],
      },
    ],
    blockers: [],
    next: [],
    pullRequests: [
      {
        repo: 'ravn-qa/qa-nerdery-round-robbin-week-trainees',
        numbers: [87, 89, 179, 180, 189, 219, 233, 234],
        collaboratorsOnly: true,
      },
    ],
    links: [
      {
        label: 'Design week journal',
        href: 'https://design-week-journal.vercel.app/',
        description: 'The deployed Design week project.',
      },
      {
        label: 'Fixes applied',
        href: 'https://github.com/emmanuelmartinez-ravn/design-week-journal/blob/main/fixes-applied.md',
        description: 'Documentation of every fix made from the Design week feedback.',
      },
    ],
    thanks: '',
  },
  {
    slug: 'wednesday',
    weekday: 'Wednesday',
    date: '2026-10-07',
    focus: 'Closing out the QA feedback, polishing the PM week and starting a new feature for my Backend project.',
    summary:
      'I finished the QA week feedback and spoke with Caroline Pinto, who agreed to review my work again now that the fixes are in. I also reviewed the contents of my Project management week deliverables against Fernando López’s feedback. After that, I returned to my Backend month project and started a new feature: image uploads for products and user avatars.',
    done: [
      'Finished working on the QA week feedback.',
      'Talked with Caroline Pinto, who agreed to review my work again after the feedback fixes.',
      'Reviewed the contents of my Project management week deliverables against Fernando López’s feedback. The project itself was not modified.',
      'Reviewed my Backend month project code again and decided to add a new feature: a system for product images and user avatars.',
      'Created an AWS account and installed the AWS SDK. I chose it because it is the official library and is focused entirely on AWS services, while alternatives like MinIO are built to work across multiple cloud providers.',
    ],
    learned: [
      {
        topic: 'Design',
        items: [
          'Identifying the main flows or components of an application is easy. Explaining why they are the main ones is the hard part.',
          {
            text: 'An engineer can take ownership and contribute during the design phase instead of waiting until it is over. They can:',
            items: [
              'Define the strategy for complex features.',
              'Research the entities and their attributes, and even sketch the ERD.',
              'Draft the site map and flow diagrams.',
              'Highlight where the UX and the data model disagree.',
              'Audit components once they are finished.',
              'Set up Claude rules early, so the code follows the design system tokens and meets the quality bar from the start.',
            ],
          },
        ],
      },
      {
        topic: 'Project management',
        items: [
          'How to identify which features are a priority for a product, and how to discard or postpone the ones that are not necessary yet. A feature is a "must", not a "should".',
          'When I take a step back and decide to change something, I need to tell the team clearly: why I made the decision and how it will affect the process going forward.',
          'Taking ownership of a decision means being able to explain it clearly. Examples help, but on their own they do not express the essence of the decision.',
        ],
      },
    ],
    blockers: [],
    next: [],
    pullRequests: [],
    links: [
      {
        label: 'Design week journal',
        href: 'https://design-week-journal.vercel.app/',
        description: 'The deployed Design week project.',
      },
      {
        label: 'Fixes applied',
        href: 'https://github.com/emmanuelmartinez-ravn/design-week-journal/blob/main/fixes-applied.md',
        description: 'Documentation of every fix made from the Design week feedback.',
      },
      {
        label: 'T-shirt store project',
        href: 'https://github.com/emmanuelmartinez-ravn/t-shirt-store-project',
        description: 'Repository of my Backend month project, where the product image and avatar feature is being built.',
      },
    ],
    thanks: 'Special thanks to Caroline Pinto for agreeing to review my work again.',
  },
  {
    slug: 'thursday',
    weekday: 'Thursday',
    date: '2026-10-08',
    focus: 'Building the image feature for my Backend project and tightening the AI workflow around it.',
    summary:
      'Thursday was dedicated to the new feature in my Backend project: avatars for users and multiple images per product, stored on AWS. Before writing the endpoints, I set guardrails for Claude Code with hooks and skills, since the project now holds AWS credentials. I also made the Husky hooks smarter about what they check. In parallel, I worked on Pedro Guimarães’s feedback from the AI week and scheduled a demo with Kevin Escoto for Friday morning.',
    done: [
      'Created Claude Code hooks that forbid Claude from modifying the database and from accessing the .env file, which now holds the AWS credentials.',
      'Implemented Claude Code skills for creating endpoints, services and repositories.',
      'Implemented a Claude Code skill for services that need access to AWS.',
      'Improved the Husky hooks so changes and PRs that only touch documentation or CLAUDE.md files skip tests and linting, avoiding unnecessary runs.',
      'Added endpoints to add or update a user’s avatar and to retrieve images.',
      'Added endpoints to add, update and delete product images, with support for multiple images per product.',
      'Added explicit restrictions on image size, dimensions and format for uploads, with clear error responses when a file is rejected.',
      'Returned AWS pre-signed URLs with an expiry on each link, instead of resolving images one product at a time, which avoids the N+1 problem.',
      'Worked on Pedro Guimarães’s feedback from the AI week, addressing the weak points in my AI workflow.',
      'Scheduled a meeting with Kevin Escoto for Friday morning.',
    ],
    learned: [
      {
        topic: 'AI',
        items: [
          'Splitting responsibilities between agents, instead of giving one agent everything, keeps each one focused.',
          'Being more explicit in my instructions makes the AI’s work more deterministic and predictable.',
          'Hooks and skills turn rules I would otherwise repeat in every prompt into guarantees: Claude cannot touch the database or read secrets, and new endpoints follow the same structure every time.',
        ],
      },
    ],
    blockers: [],
    next: ['Present my demo and the new endpoints to Kevin Escoto on Friday morning.'],
    pullRequests: [{ repo: 'emmanuelmartinez-ravn/t-shirt-store-project', numbers: [66] }],
    links: [
      {
        label: 'T-shirt store project',
        href: 'https://github.com/emmanuelmartinez-ravn/t-shirt-store-project',
        description: 'Repository of my Backend month project.',
      },
      {
        label: 'Weekly summary',
        href: 'https://github.com/emmanuelmartinez-ravn/t-shirt-store-project/blob/main/WEEKLY-SUMMARY.md',
        description: 'Added in PR #66: a complete description of the pull requests behind the image feature.',
      },
    ],
    thanks: 'Special thanks to Kevin Escoto for agreeing to a meeting where I presented my demo and the new endpoints.',
  },
  {
    slug: 'friday',
    weekday: 'Friday',
    date: '2026-10-09',
    focus: 'Presenting my Backend demo, fixing Frontend bugs and bringing the lessons of the other weeks into my workflow.',
    summary:
      'I started Friday with my meeting with Kevin Escoto, where I presented the image feature and we discussed other strategies for uploading to S3 buckets and storing multimedia. The rest of the day went to my Frontend month project, the Task manager: I fixed the bugs Steven pointed out, applying what I learned in the Design and Project management weeks, and extended my AI workflow with new skills and agents. I closed the week by writing this report.',
    done: [
      'Had my meeting with Kevin Escoto and discussed other strategies for uploading images to S3 buckets and for multimedia storage.',
      'Worked on fixing the bugs Steven pointed out in my Frontend month project, the Task manager.',
      'Added a toast component that tells the user when something went wrong.',
      'Refactored the create task and edit task forms with React Hook Form, removing the repeated code between two forms that were about 90% the same. As a lightweight library, it fits a project of this size well.',
      'The tests now run against mocked data, since the Frontend month API is down.',
      'Added Claude Code skills for creating new components that follow my design tokens and design system rules.',
      'Added a reviewer agent that checks the work done in a different session and suggests possible bugs and fixes.',
      'Improved my developer agent so it avoids unsafe typing, such as non-null assertions (!) and any.',
      'Worked on this project: a final week report that summarizes my week day by day, from Monday to Friday.',
    ],
    learned: [
      {
        items: [
          {
            text: 'From the Design and Project management weeks, I learned lessons that I can apply directly to my Frontend month project:',
            items: [
              'Errors that reach the user must be shown clearly and never fail silently, so the user understands what went wrong instead of getting frustrated. This is why I added the toast component to the Task manager.',
              'If something necessary is missing from the design mockups, I should raise it as a concern with the team instead of working around it.',
            ],
          },
        ],
      },
    ],
    blockers: [],
    next: [],
    pullRequests: [{ repo: 'emmanuelmartinez-ravn/code-challenge', numbers: [25] }],
    links: [
      {
        label: 'Task manager',
        href: 'https://code-challenge-git-prod-emmanuel-martinez-ravn.vercel.app/',
        description: 'The deployed Frontend month project.',
      },
      {
        label: 'Task manager repository',
        href: 'https://github.com/emmanuelmartinez-ravn/code-challenge',
        description: 'Repository of my Frontend month project.',
      },
      {
        label: 'Task manager weekly summary',
        href: 'https://github.com/emmanuelmartinez-ravn/code-challenge/blob/prod/WEEKLY_SUMMARY.md',
        description: 'Referenced in PR #25: a description of the Frontend work done this week.',
      },
      {
        label: 'T-shirt store project',
        href: 'https://github.com/emmanuelmartinez-ravn/t-shirt-store-project',
        description: 'Repository of my Backend month project, presented in the meeting with Kevin Escoto.',
      },
      {
        label: 'T-shirt store weekly summary',
        href: 'https://github.com/emmanuelmartinez-ravn/t-shirt-store-project/blob/main/WEEKLY-SUMMARY.md',
        description: 'A complete description of the pull requests behind the Backend image feature.',
      },
    ],
    thanks: '',
  },
]

export function hasNotes(day: ReportDay) {
  return Boolean(
    day.summary ||
      day.done.length ||
      day.learned.length ||
      day.blockers.length ||
      day.next.length ||
      day.pullRequests.length ||
      day.links.length ||
      day.thanks,
  )
}
