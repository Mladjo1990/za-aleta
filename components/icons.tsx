
import React from 'react';

export const IconBase: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    {props.children}
  </svg>
);

// FIX: Allow props to be passed to the icon.
export const TelemetryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const AnalyticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const HealthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const DiffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125a1.125 1.125 0 00-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const DiagnosticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const OrchestrationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </IconBase>
);

// FIX: Allow props to be passed to the icon.
export const TributeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </IconBase>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></IconBase>
);
export const CommunityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.036 1.35-1.956 2.25-2.72m-7.5 0A48.667 48.667 0 005.25 7.5c0-1.06.358-2.092 1.002-2.962m-7.5 0c.57-1.036 1.35-1.956 2.25-2.72m0 0a3 3 0 005.163 2.188m0 0A48.667 48.667 0 0013.5 7.5c0-1.06.358-2.092 1.002-2.962" /></IconBase>
);
export const DocsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></IconBase>
);
export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></IconBase>
);
export const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.96 17.96 0 01-5.84 2.56m0 0A17.965 17.965 0 0112 21a17.965 17.965 0 01-5.84-2.56m5.84-2.56V3.87m0 10.5A17.968 17.968 0 006.16 8.412a17.968 17.968 0 00-5.84 2.56m5.84 2.56A17.968 17.968 0 0112 14.37a17.968 17.968 0 015.84-2.56m-5.84 2.56v-4.82" /></IconBase>
);
export const RoadmapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m-3.75-3.75v3.75m0-12.75h15M9 7.5h3v3.75H9V7.5z" /></IconBase>
);
export const ContributeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.66-4.66c-.384-.317-.626-.74-.766-1.208l-3.03 2.496m.002 6.056l4.66-4.66m-4.66 4.66L5.828 21m11.422-11.422l2.496-3.03c.317-.384.74-.626 1.208-.766m-1.208.766L21 5.828m-8.572 8.572l-4.66-4.66" /></IconBase>
);
export const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></IconBase>
);
export const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></IconBase>
);
export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></IconBase>
);
export const ExclamationTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></IconBase>
);
export const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.372a3.523 3.523 0 01-1.228.125H9.75a3 3 0 01-3-3V9.525c0-1.036.84-1.875 1.875-1.875h.375a3.363 3.363 0 012.344.937l.821.821M3.75 16.5c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.372a3.523 3.523 0 01-1.228.125H9.75a3 3 0 01-3-3V9.525c0-1.036.84-1.875 1.875-1.875h.375a3.363 3.363 0 012.344.937l.821.821" /></IconBase>
);
export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconBase {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></IconBase>
);