export interface TimelineEvent {
    year: string;
    side: 'left' | 'right';
    logo: string;
    logoAlt: string;
    logoSize?: string;
    organization: string;
    role: string;
}

export interface AboutData {
    paragraphs: string[];
    timeline: TimelineEvent[];
}

export const aboutData: AboutData = {
    paragraphs: [
        "Hi, I'm Ayush Maniar. Currently, I'm pursuing a Master of Science in Computer Science (MSCS) at UC San Diego, with a specialization in Artificial Intelligence. I am passionate about AI Agents, particularly in the context of Multi-agent systems and Agentic-RAG. My research focuses on multi-agent collaboration and reasoning, with work accepted at NeurIPS 2025. I'm also the creator of an open-source PowerPoint MCP server that enables AI assistants to automate presentation creation with LaTeX rendering and real-time editing capabilities.",
        "Recently, I completed a Research Scientist Intern - Generative AI position at Riot Games, where I developed AI creative story writing engines using dual-agent architectures, built story-to-code pipelines for game quest systems, and created multimodal AI comic book generators. Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I led multiple high-impact projects creating over $120M in business value. My work included developing patented time series algorithms for transit time prediction, delivery delay prediction models, and optimization solutions using Mixed Integer Linear Programming.",
        "During my undergraduate studies at IIT Madras, I co-founded 'Eye In The Sky', a Deep Learning & Computer Vision startup focused on disaster management using drones. The startup raised INR 19.5 Lakhs in funding, won the Microsoft Codefundo++ 2019 challenge (among 2000+ teams), and received the International Microsoft 'AI For Earth' Grant. My other interests include Gaming, Augmented Reality, and Bioinformatics.",
    ],
    timeline: [
        {
            year: '2025 Summer',
            side: 'left',
            logo: '/riot-games.jpg',
            logoAlt: 'Riot Games Logo',
            logoSize: 'w-16 h-16',
            organization: 'Riot Games',
            role: 'Research Scientist Intern - Generative AI',
        },
        {
            year: '2024–Now',
            side: 'right',
            logo: '/University_of_California_San_Diego.avif',
            logoAlt: 'UCSD Seal',
            logoSize: 'w-16 h-16',
            organization: 'UC San Diego',
            role: 'MS-CSE, AI Specialization',
        },
        {
            year: '2021–2024',
            side: 'left',
            logo: '/Walmart_logo.png',
            logoAlt: 'Walmart Logo',
            logoSize: 'w-16 h-16',
            organization: 'Walmart Global Tech',
            role: 'Data Scientist III',
        },
        {
            year: '2019',
            side: 'right',
            logo: '/hyperverge-logo.webp',
            logoAlt: 'Hyperverge Logo',
            logoSize: 'w-10 h-10',
            organization: 'Hyperverge',
            role: 'Intern',
        },
        {
            year: '2017–2021',
            side: 'left',
            logo: '/bg_removed.avif',
            logoAlt: 'IIT Madras Logo',
            logoSize: 'w-16 h-16',
            organization: 'IIT Madras',
            role: 'B.Tech, Electrical Engineering',
        },
    ],
};
