
export interface StackItem {
  name: string;
    icon?: string;
}

export interface StackGroup {
    label: string;
  items: StackItem[];
}

export interface Stat {
  value: string; 
  label: string;
}

export interface Workflow {
  id: string;
  title: string;
    problem: string;
    solution: string;
    result: string;
    integrations: string[];
    workflowSrc: string;
}

export const profile = {
  name: 'Yurii Shchurko',
  role: 'Automation Engineer · n8n Specialist',
    summary:
    'I design and ship smart automations and AI ecosystems for business. Check out the architecture of my n8n workflows below.',
  available: true,
  availabilityText: 'Open to automation & integration work',
  location: 'Remote · UTC+2',
  email: 'shchurko.yurii@gmail.com',
  links: {
    telegram: 'https://t.me/Renhokn',
    github: 'https://github.com/yurii-s4',
    cv: '/cv.pdf',
  },
};



export const stack: StackGroup[] = [
  {
    label: 'AUTOMATION',
    items: [
      { name: 'n8n',                icon: 'n8n' },
      { name: 'Webhooks',           icon: '/icons/webhooks.svg' },
      { name: 'ETL Pipelines',      icon: '/icons/etl.svg' },
      { name: 'Human-in-the-Loop',  icon: '/icons/human-loop.svg' },
    ],
  },
  {
    label: 'AI',
    items: [
      { name: 'OpenAI',     icon: 'openai/ffffff' },
      { name: 'Anthropic',  icon: 'anthropic/ffffff' },
      { name: 'Pinecone',   icon: 'pinecone/ffffff' },
      { name: 'pgvector',   icon: 'postgresql' },
      { name: 'LangChain',  icon: 'langchain' },
      { name: 'MCP',        icon: '/icons/mcp.svg' },
      { name: 'RAG',        icon: '/icons/rag.svg' },
    ],
  },
  {
    label: 'BACKEND',
    items: [
      { name: 'Node.js',    icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase',   icon: 'supabase' },
      { name: 'REST',       icon: '/icons/rest.svg' },
    ],
  },
  {
    label: 'INFRA',
    items: [
      { name: 'Docker',     icon: 'docker' },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Git',        icon: 'git' },
      { name: 'Linux',      icon: 'linux' },
    ],
  },
];

export const stats: Stat[] = [
  { value: '20+', label: 'workflows shipped' },
  { value: '15+', label: 'integrations wired' },
  { value: '100h', label: 'saved / month' },
  { value: '1+', label: 'years R&D' },
];


export const workflows: Workflow[] = [
  {
    id: 'core-engine-ecosystem',
    title: 'AI Personal OS — Telegram/Notion [Main Hub]',
    problem: 'Managing personal productivity, habit tracking, and social interactions requires constant context-switching and manual data entry across multiple disjointed apps.',
    solution:
      'A Telegram-native AI operating system for personal productivity — a stateful multi-agent hub that routes voice and text messages to specialized sub-agents for task capture, day planning, social CRM, biometrics tracking, and semantic search. Built on a hub-and-spoke architecture with persistent Postgres memory and Supabase state management, each agent runs its own conversational lifecycle and commits structured data to Notion, Google Calendar, and Pinecone.',
    result: 'Unified all life-management workflows into a single conversational interface, completely eliminating manual data entry.',
    integrations: ["n8n", "Multi-agent System", "RAG", "NL-to-JSON extraction", "Whisper", "Pinecone", "Human-in-the-Loop", "ETL", "Stateful sessions", "PostgreSQL", "Notion API", "Telegram API", "Google Calendar API", "OpenAI API"],
    workflowSrc: '/workflows/core-engine-ecosystem.json',
  },
  {
    id: 'api-gateway-n-state-manager',
    title: 'API Gateway & State Manager',
    problem: 'A multi-agent Telegram bot needs to gracefully handle context switching, user states, and multimodal inputs without mixing up conversational memories.',
    solution:
      'Syncs Telegram button interactions with Supabase DB to manage user states.',
    result: 'Ensured zero context bleeding between sub-agents and provided a seamless, crash-free conversational routing experience.',
    integrations: ["n8n", "Routing", "Telegram API", "OpenAI API", "Supabase", "PostgreSQL"],
    workflowSrc: '/workflows/api-gateway-n-state-manager.json',
  },
  {
    id: 'social-crm-handler',
    title: 'AI Personal CRM Agent (Vector-Powered)',
    problem: 'Keeping track of networking history is tedious. Standard text matching fails to handle nicknames, typos, or new contacts efficiently in Notion databases.',
    solution:
      'A specialized agent that manages social interaction logs. It utilizes Pinecone semantic search to accurately resolve contact identities, dynamically fetches/generates Notion tags, and employs strict output parsers (Guardrails) to validate JSON payloads before database mutations.',
    result: 'Automated CRM logging with 100% data compliance, instantly resolving ambiguous contact names via vector entity linking.',
    integrations: ["n8n", "Pinecone", "Notion API", "Telegram API", "OpenAI API", "PostgreSQL", "RAG"],
    workflowSrc: '/workflows/social-crm-handler.json',
  },
  {
    id: 'context-aware-biometrics-tracker',
    title: 'Context-Aware Biometrics Tracker',
    problem: 'Tracking daily health, habits, and productivity requires filling out complex forms manually, leading to friction and inconsistent data logging.',
    solution:
      'An automated ETL pipeline that conducts dynamic, time-aware interviews. It implements a resilient "Two-Stage Commit" pattern: first backing up the raw narrative to Notion, then using an LLM to extract normalized properties (JSON) to update specific database fields.',
    result: 'Converted unstructured daily reflections into structured biometric telemetry with zero data loss.',
    integrations: ["n8n", "Safe Data Mutation", "Two-Stage Commit", "Notion API", "Telegram API", "OpenAI API", "PostgreSQL", "ETL"],
    workflowSrc: '/workflows/context-aware-biometrics-tracker.json',
  },
  {
    id: 'ai-hybrid-postgres-search',
    title: 'AI RAG Agent with Hybrid Postgres Search',
    problem: 'Standard vector search returns irrelevant data because it cannot process strict relational constraints like exact dates, priorities, or task statuses.',
    solution:
      'An advanced conversational RAG assistant. It features a Query Planner that parses natural language dates (NLP) and dynamically builds complex Hybrid Search queries, combining semantic similarity (pgvector) with strict SQL metadata filtering.',
    result: 'Achieved high-precision knowledge retrieval, completely eliminating hallucinated responses for time-sensitive task queries.',
    integrations: ["n8n", "LangChain", "OpenAI API", "Embeddings", "PostgreSQL", "pgvector", "Telegram API", "JS", "RAG", "NLP"],
    workflowSrc: '/workflows/ai-hybrid-postgres-search.json',
  },
  {
    id: 'autonomous-scheduling-agent-calendar-orchestrator',
    title: 'Autonomous Scheduling Agent',
    problem: 'LLMs are notoriously unreliable at executing calendar updates because they fail to check for existing schedule conflicts or handle updates deterministically.',
    solution:
      'This execution-focused agent translates high-level textual daily plans into precise CRUD operations (Create, Read, Update, Delete) within Google Calendar.',
    result: 'Eliminated double-booking and manual calendar management through a highly deterministic execution pipeline.',
    integrations: ["n8n", "OpenAI", "LangChain", "AI Agent", "Google Calendar API", "Notion API", "PostgreSQL", "JS"],
    workflowSrc: '/workflows/autonomous-scheduling-agent-calendar-orchestrator.json',
  },
  
  {
    id: 'notion-vectorsync-pipeline',
    title: 'Notion → pgvector sync',
    problem: 'Enterprise or personal knowledge bases are inaccessible to AI agents without a reliable, automated ingestion pipeline that keeps vector embeddings up to date.',
    solution:
      'Automated n8n pipeline that syncs a Notion productivity database to a PostgreSQL vector store using OpenAI embeddings. Classifies items by type, resolves cross-entity relationships, and upserts idempotently — enabling semantic search over personal knowledge without manual intervention.',
    result: 'Provided the foundational vector infrastructure, ensuring all conversational agents operate on the most recent, synchronized data.',
    integrations: ["n8n", "REST / HTTP", "Vector embeddings", "pgvector", "RAG infrastructure", "Notion API", "PostgreSQL", "OpenAI", "JS"],
    workflowSrc: '/workflows/notion-vectorsync-pipeline.json',
  },
];
