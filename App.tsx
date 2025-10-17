import React from 'react';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { Pill } from './components/Pill';
import { LinkButton } from './components/LinkButton';
import {
  AnalyticsIcon,
  CodeBracketIcon,
  CommunityIcon,
  ContributeIcon,
  DiagnosticsIcon,
  DiffIcon,
  DocsIcon,
  GitHubIcon,
  HealthIcon,
  OrchestrationIcon,
  RoadmapIcon,
  TelemetryIcon,
  TributeIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  TagIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon
} from './components/icons';

const App: React.FC = () => {

  const features = [
    { icon: <TelemetryIcon />, title: "Real-Time Telemetry Monitoring", description: "With intelligent filtering for precise insights." },
    { icon: <AnalyticsIcon />, title: "System Analytics Dashboard", description: "Featuring circular gauges and dynamic sparklines." },
    { icon: <HealthIcon />, title: "Health Status Tracking", description: "With trending analytics to predict system behavior." },
    { icon: <DiffIcon />, title: "Snapshot Diff Viewer", description: "For comparing system states across different timelines." },
    { icon: <DiagnosticsIcon />, title: "Advanced Diagnostics", description: "Access deep system metrics for thorough analysis." },
    { icon: <OrchestrationIcon />, title: "Manifest-Driven Configuration", description: "For flexible and reproducible deployments." },
  ];

  const whatsNextFeatures = [
    { icon: <RocketLaunchIcon className="w-8 h-8 text-cyan-400" />, title: "Agent Expansion", description: "Introducing new reasoning and creative agents to the mesh." },
    { icon: <CodeBracketIcon className="w-8 h-8 text-cyan-400" />, title: "Plugin Marketplace", description: "A community-driven hub for sharing and discovering extensions." },
    { icon: <AnalyticsIcon className="w-8 h-8 text-cyan-400" />, title: "Mobile Dashboard", description: "Accessing real-time telemetry natively on mobile devices." },
    { icon: <OrchestrationIcon className="w-8 h-8 text-cyan-400" />, title: "Enterprise Features", description: "Implementing advanced security, compliance, and support." },
  ];

  const contributions = [
    { icon: <CodeBracketIcon />, title: "Code Contributions", items: ["Fork the repository", "Create feature branches", "Follow semantic commit conventions", "Submit pull requests"] },
    { icon: <CommunityIcon />, title: "Community Engagement", items: ["Join discussions", "Share ideas and feature requests", "Help answer questions", "Showcase your projects"] },
    { icon: <DocsIcon />, title: "Documentation", items: ["Improve existing documentation", "Create tutorials and guides", "Translate content", "Report issues in documentation"] },
  ];

  const goodFirstIssues = [
      { text: "#2 - Add new agent to mesh configuration", href: "https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/issues/2" },
      { text: "#3 - Create custom telemetry visualization component", href: "https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/issues/3" },
      { text: "#4 - Improve documentation for Prompt Playground", href: "https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/issues/4" },
  ];

  const resources = [
      { name: "Executive Summary", href: "#", icon: <BookOpenIcon/> },
      { name: "Project Showcase", href: "#", icon: <AcademicCapIcon/> },
      { name: "Deployment Guide", href: "#", icon: <RocketLaunchIcon/> },
      { name: "Phase 13 Roadmap", href: "#", icon: <RoadmapIcon/> },
  ];
  
  const recognition = [
      "Contributors featured in the Contributors Page",
      "Commits tagged with tribute dedications",
      "Plugin authors highlighted in the marketplace",
      "Release Notes with acknowledgment badges"
  ];

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen font-sans antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 tracking-wider">
            Slavko Kernel™ v3.0.0
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Welcome to the Community Launch! A new era of multi-agent orchestration.
          </p>
        </header>

        {/* Tribute */}
        <div className="relative text-center my-20 p-8 border border-cyan-700/50 rounded-lg bg-gray-900/50 backdrop-blur-sm">
           <div className="absolute -top-4 -left-4 w-10 h-10 text-cyan-500"><TributeIcon /></div>
           <div className="absolute -bottom-4 -right-4 w-10 h-10 text-cyan-500 transform rotate-180"><TributeIcon /></div>
          <h3 className="text-xl font-semibold text-cyan-300">In Loving Memory</h3>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            This project is dedicated to <span className="font-bold text-white">Slavko Gertner</span>, whose visionary work in system telemetry and agent-based architectures continues to inspire every line of code.
          </p>
        </div>

        {/* Phase 12 Recap */}
        <Section title="Phase 12 Recap" subtitle="A production-grade platform built with Next.js 15, Tailwind CSS, and Three.js.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </Section>
        
        {/* What's Next */}
        <Section title="What's Next" subtitle="Join us as we expand the ecosystem with new agents, a plugin marketplace, and more.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsNextFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </Section>


        {/* How You Can Contribute */}
        <Section title="How You Can Contribute" subtitle="Join us in shaping the future of multi-agent orchestration.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contributions.map((contrib, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 text-cyan-400 mr-4">{contrib.icon}</div>
                            <h3 className="text-xl font-bold text-white">{contrib.title}</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {contrib.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

        {/* Good First Issues */}
        <Section title="Good First Issues" subtitle="New to the project? Start here!">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center text-lg text-cyan-400 mb-4">
                    <TagIcon className="w-6 h-6 mr-3"/>
                    <span>We've tagged several beginner-friendly tasks with <code className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-md text-sm mx-1">good first issue</code>.</span>
                </div>
                <div className="grid grid-cols-1 gap-4 text-gray-300">
                    {goodFirstIssues.map((issue, i) => (
                        <a href={issue.href} target="_blank" rel="noopener noreferrer" key={i} className="flex items-center bg-gray-900/50 p-3 rounded-md hover:bg-cyan-900/50 transition-colors">
                           <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                           <span>{issue.text}</span>
                        </a>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <a href="https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/issues" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors">
                        <GitHubIcon className="w-5 h-5 mr-2" />
                        Find More on GitHub Issues
                    </a>
                </div>
            </div>
        </Section>

        {/* Resources & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <div>
                <h3 className="text-3xl font-bold text-white mb-6">Documentation Hub</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resources.map((res, i) => <LinkButton key={i} href={res.href} icon={res.icon}>{res.name}</LinkButton>)}
                </div>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-white mb-6">Community Recognition</h3>
                <ul className="space-y-3">
                    {recognition.map((rec, i) => (
                        <li key={i} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                            <CheckCircleIcon className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                            <span>{rec}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Stay Connected */}
        <Section title="Stay Connected" subtitle="Follow our progress, report bugs, or share your ideas.">
             <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"><GitHubIcon className="w-5 h-5 mr-2" /> GitHub</a>
                <a href="https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/issues" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"><ExclamationTriangleIcon className="w-5 h-5 mr-2" /> Issues</a>
                <a href="https://github.com/theOrchestrationAI/Hyper-Agent-SlavkoKernel-v01/discussions" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"><ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" /> Discussions</a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"><BookOpenIcon className="w-5 h-5 mr-2" /> Documentation</a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"><RoadmapIcon className="w-5 h-5 mr-2" /> Roadmap</a>
             </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 border-t border-cyan-900 pt-8 text-center text-gray-500">
             <p className="text-lg italic">The Slavko Kernel™ Dashboard is not just a tool—it's a movement. Let's grow it together.</p>
             <p className="mt-4 text-sm">🕊️ In loving memory of Slavko Gertner</p>
        </footer>
      </main>
    </div>
  );
};

export default App;