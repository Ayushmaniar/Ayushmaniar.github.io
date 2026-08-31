export interface RealWorkflow {
    id: string;
    title: string;
    description: string;
}

export interface ProjectLink {
    label: string;
    url: string;
    iconType: 'github' | 'paper' | 'demo';
}

export interface ProjectFeature {
    title: string;
    description: string;
    code?: string;
}

export interface Project {
    id: string;
    title: string;
    badge: string | null;
    youtubeId: string;
    paragraphs: string[];
    tags: string[];
    links: ProjectLink[];
    features?: ProjectFeature[];
    workflows?: RealWorkflow[];
}

export const projects: Project[] = [
    {
        id: "mindcraft-embodied-reasoning",
        title: "Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning",
        badge: "NeurIPS 2025",
        youtubeId: "jFIWlEv6ZXo",
        paragraphs: [
            "This research project, conducted as part of my MS Research under Prof. Lianhui Qin at UC San Diego, explores multi-agent collaboration in complex environments like Minecraft. The work has been accepted at NeurIPS 2025.",
            "The framework enables multiple AI agents to reason, plan, and work together through peer-peer collaboration tasks that test different aspects of collaborative reasoning such as sharing resources, skill sets, expertise, and information. We leveraged the efficient function calling abilities of LLMs to ground the agents in the world of Minecraft by creating custom tools, and conducted comparative evaluations of contemporary language models, highlighting success rates across tasks and providing insights into multi-agent collaboration efficiencies."
        ],
        tags: [
            "AI Agents",
            "Multi-agent Systems",
            "Embodied AI",
            "Minecraft"
        ],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/kolbytn/mindcraft",
                iconType: "github"
            },
            {
                label: "Paper",
                url: "https://arxiv.org/abs/2504.17950",
                iconType: "paper"
            }
        ]
    },
    {
        id: "powerpoint-mcp-server",
        title: "Open Source PowerPoint MCP Server",
        badge: null,
        youtubeId: "5p24Vr36py8",
        paragraphs: [
            "A powerful Model Context Protocol (MCP) server for PowerPoint automation that enables AI assistants like Claude to create, read, and edit presentations in real-time. Features template-first design, bidirectional COM automation, LaTeX equation rendering, HTML-style formatting, and controllable animations. Unlike write-only libraries, this provides true real-time editing capabilities with multimodal slide analysis."
        ],
        tags: [
            "MCP Server",
            "AI Automation",
            "PowerPoint",
            "COM Automation"
        ],
        features: [
            { title: 'Template-first design', description: 'Works seamlessly with corporate templates.' },
            { title: 'Bidirectional & real-time', description: 'Read and edit existing presentations without closing them.' },
            { title: 'Multimodal slide analysis', description: 'Visual screenshots plus detailed text, chart, and table extraction.' },
            { title: 'LaTeX rendering', description: 'Built-in support for scientific equations and formulas.' },
            { title: 'HTML-style formatting', description: 'Bold, italic, colors, and bullets that render reliably.' },
            { title: 'Animations', description: 'Controllable PowerPoint animations with progressive disclosure.' },
            { title: 'One-line install', description: 'Install the server with:', code: 'claude mcp add powerpoint -- uvx powerpoint-mcp' }
        ],
        workflows: [
            {
                id: "wf-1",
                title: "Research + Create",
                description: "Researches topics and builds decks with citations automatically."
            },
            {
                id: "wf-2",
                title: "Data Analysis + Visualization",
                description: "Analyzes datasets and creates free-form Python plots directly on slides."
            },
            {
                id: "wf-3",
                title: "Codebase Documentation",
                description: "Reads local files to understand structure and generates architecture presentations."
            },
            {
                id: "wf-4",
                title: "Template-Driven Decks",
                description: "Populates corporate templates with data from CSVs or other sources."
            },
            {
                id: "wf-5",
                title: "Academic LaTeX Heavy",
                description: "Creates lecture slides with complex mathematical equations rendered via LaTeX."
            },
            {
                id: "wf-6",
                title: "Interactive Learning",
                description: "Turns presentations into interactive tutors that explain slides and quiz users."
            }
        ],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/Ayushmaniar/powerpoint-mcp",
                iconType: "github"
            },
            {
                label: "Demo Video",
                url: "https://youtu.be/5p24Vr36py8",
                iconType: "demo"
            }
        ]
    }
];
