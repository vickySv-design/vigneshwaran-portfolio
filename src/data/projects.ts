import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'industrial-flash-detection',
    title: 'Industrial Flash Detection System',
    subtitle: 'Real-Time Metal Casting Defect Inspection',
    category: 'Computer Vision / Deep Learning / Industrial AI',
    filterCategory: 'Computer Vision',
    credibilityTag: 'Built',
    associatedWith: 'Industrial Computer Vision Project',
    shortSummary: 'A real-time flash defect detection system for metal casting parts using Detectron2 Semantic Segmentation.',
    description: 'A real-time flash defect detection system for metal casting parts using Detectron2 Semantic Segmentation. The system learns the geometry of a correct part and identifies excess material protruding beyond the expected boundary regardless of part rotation, position, or orientation.',
    problem: 'Excess metal protrusions (flash defects) during casting distort parts, requiring manual visual inspection which is error-prone, rotation-sensitive, and time-consuming.',
    solution: 'Engineered a rotation-invariant Detectron2 semantic FPN segmentation pipeline that classifies background, base object, and flash defect pixels, deriving sub-millimeter geometric measurements.',
    architectureFlow: [
      'Camera Frame Input',
      'Detectron2 Semantic Segmentation',
      'Base Object / Flash Defect Mask',
      'Sub-millimeter Geometric Measurement',
      'PASS / REJECT Decision'
    ],
    reportedMetrics: [
      { label: 'Streaming Speed', value: '15–25 FPS', note: 'Reported in project documentation' },
      { label: 'Semantic Map', value: '3-Class', note: 'Background (0), Base Object (1), Flash Defect (2)' }
    ],
    technologies: ['Detectron2', 'Semantic FPN', 'ResNet-50-FPN', 'PyTorch', 'CUDA', 'OpenCV', 'FastAPI', 'React 18', 'Vite', 'MongoDB', 'WebSockets'],
    keyFeatures: [
      'Rotation-invariant defect detection regardless of part orientation',
      'Pixel-level semantic segmentation for sub-millimeter measurement',
      'Flash area, thickness, and precise defect location detection',
      'Automatic semantic-mask generation & COCO dataset support',
      'Real-time WebSocket dashboard streaming (15–25 FPS)',
      'Hot model reload, snapshot generation, and analytics history'
    ],
    status: 'Functional System Prototype',
    githubUrl: 'https://github.com/vickySv-design/Industrial-Flash-Detection-System',
    isFeatured: true,
    visualType: 'industrial-flash'
  },
  {
    id: 'deep-waf',
    title: 'DeepWAF',
    subtitle: 'Character-Level CNN Web Application Firewall',
    category: 'Cybersecurity / Deep Learning / Web Security',
    filterCategory: 'Cybersecurity',
    credibilityTag: 'Built',
    associatedWith: 'Cybersecurity & Deep Learning Project',
    shortSummary: 'A hybrid Web Application Firewall combining signature-based detection with character-level deep learning.',
    description: 'A hybrid Web Application Firewall combining signature-based regex detection with character-level deep learning for enhanced web security. Operates as a manual testing console, a Level-2 Reverse Proxy under /protected/*, and a Chrome/Edge browser extension.',
    problem: 'Traditional signature-only WAFs fail against zero-day payload mutations and novel obfuscated web attack vectors.',
    solution: 'Engineered a two-layer defense combining regex signature matching with a 160k-parameter PyTorch Character-CNN analyzing 500-character HTTP request streams.',
    architectureFlow: [
      'HTTP Request Stream',
      'Signature Checker (Regex Engine)',
      'Character-Level CNN Analyzer',
      'Malicious → BLOCK / Benign → FORWARD'
    ],
    reportedMetrics: [
      { label: 'F1-Score', value: '98.8%', note: 'Project-reported evaluation metric (CSIC 2010)' },
      { label: 'Precision', value: '98.5%', note: 'Project-reported evaluation metric' },
      { label: 'Recall', value: '99.2%', note: 'Project-reported evaluation metric' },
      { label: 'Training Acc', value: '100%', note: 'Project-reported metric on benchmark dataset' }
    ],
    technologies: ['Python', 'Flask', 'PyTorch', 'NumPy', 'scikit-learn', 'Pandas', 'OpenCV', 'HTML5', 'CSS3', 'JavaScript', 'Chrome/Edge Extension'],
    keyFeatures: [
      'Two-layer defense: Signature matching + Character-level CNN',
      'Detects SQLi, XSS, HTMLi, SSRF, Command Injection, Path Traversal, & Obfuscation',
      'Manual Testing Console for individual HTTP payload analysis',
      'Level-2 Reverse Proxy WAF intercepting traffic under /protected/*',
      'Chrome/Edge Extension for client-side URL navigation monitoring',
      'Real-time threat blocking, detection logging, and security analytics'
    ],
    status: 'Completed WAF System',
    githubUrl: 'https://github.com/vickySv-design/DeepWAF',
    isFeatured: true,
    visualType: 'deep-waf'
  },
  {
    id: 'tn-ai-disaster-management',
    title: 'Tamil Nadu Enterprise AI Disaster Prediction System',
    subtitle: 'TNSDMA EOC Concept / Multi-Hazard AI Platform',
    category: 'AI / Machine Learning / GIS / Emergency Management',
    filterCategory: 'AI / ML',
    credibilityTag: 'Research Concept',
    associatedWith: 'Multi-Hazard AI System Concept',
    shortSummary: 'A multi-hazard AI disaster prediction and emergency management platform concept designed for risk assessment and resource allocation.',
    description: 'A multi-hazard AI-driven emergency management platform concept designed around real-time risk assessment, resource allocation, emergency response, geospatial intelligence, and explainable AI. Features Bi-LSTM Flood AI, Random Forest Weather AI, XGBoost+SHAP Risk AI, YOLOv8 Vision AI, and A* Evacuation Routing.',
    problem: 'Fragmented early-warning systems cause delayed emergency mobilization, inefficient rescue boat routing, and lack of real-time multi-hazard risk coordination.',
    solution: 'Conceptualized an integrated EOC architecture coupling sensor telemetry, satellite/drone vision models, decision optimization engines, and RAG emergency chatbots.',
    architectureFlow: [
      'Weather / Telemetry Sensors',
      'Data Ingestion Pipeline',
      'Multi-Hazard AI Models (Bi-LSTM / XGBoost / YOLOv8)',
      'Resource Decision Engine & A* Evacuation Routing',
      'Emergency Broadcast to Citizens & Responders'
    ],
    engineeringTargets: [
      'Alert delivery latency target < 3 seconds',
      'Inference prediction target < 100 ms',
      'Availability target ≥ 99.9%',
      'Architecture target for 10,000+ simultaneous sessions'
    ],
    futureRoadmap: [
      'Drone swarm monitoring for disaster zones',
      'Edge AI sensor deployment',
      'Automated dam spillway control',
      'AI voice emergency broadcast calls',
      'Multi-state disaster system expansion'
    ],
    technologies: ['Python', 'PyTorch', 'Bi-LSTM', 'YOLOv8', 'XGBoost', 'SHAP', 'LangChain', 'A* Pathfinding', 'SQLite', 'PostgreSQL', 'PostGIS', 'JWT', 'RBAC'],
    keyFeatures: [
      'Flood AI (Bi-LSTM) predicting flood probability, depth, and affected villages',
      'Multi-Hazard Risk AI (XGBoost + SHAP) for Flood, Landslide, Cyclone, Fire, Heatwave',
      'Vision AI utilizing Sentinel-2 NDWI segmentation and drone YOLOv8 damage detection',
      'Resource AI decision optimization for boats, medical teams, food packs, and shelters',
      'Evacuation Route AI with A* pathfinding and LangChain/RAG advisory chatbot',
      'Multi-role RBAC for Citizens, District Collectors, First Responders, and Admins'
    ],
    status: 'AI Platform Concept / Prototype',
    isFeatured: true,
    visualType: 'disaster-ai'
  },
  {
    id: 'qr-buddy',
    title: 'QR Buddy',
    subtitle: 'Attendance & Management Suite',
    category: 'Full-Stack / Cross-Platform / Real-Time Systems',
    filterCategory: 'Full Stack',
    credibilityTag: 'Built',
    associatedWith: 'Full-Stack Cross-Platform Application',
    shortSummary: 'A comprehensive multi-platform attendance system combining a React web/mobile app, Node.js Express API, and Python Flask admin portal.',
    description: 'A comprehensive multi-platform attendance management system combining a React web/mobile application built with Capacitor, a Node.js Express 5 API, and a Python Flask administration website connected to MongoDB Atlas cloud storage.',
    problem: 'Manual attendance logging in educational institutions suffers from proxy check-ins, spoofed QR static screenshots, and inaccurate location records.',
    solution: 'Engineered dynamic time-decaying QR codes coupled with GPS geofencing campus-radius verification and multi-backend validation pipelines.',
    architectureFlow: [
      'React 18 + Vite + TS + Capacitor App',
      'Node.js v24 + Express 5 API',
      'Python 3.10 + Flask 3 Admin Portal',
      'MongoDB Atlas Cloud Storage'
    ],
    technologies: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Capacitor', 'Node.js v24', 'Express 5', 'MongoDB Atlas', 'Python 3.10', 'Flask 3', 'PyMongo', 'Pillow', 'QR Code'],
    keyFeatures: [
      'Dynamic time-decaying QR tokens with anti-bypass validation',
      'GPS geofencing and campus-radius student verification',
      'Multi-platform access (Web & Mobile via Capacitor)',
      'Real-time admin and staff attendance dashboard',
      'Department-level filtering, entry timestamps, and analytics',
      'Dual backend architecture (Express API & Flask Admin)'
    ],
    status: 'Full-Stack Application',
    githubUrl: 'https://github.com/vickySv-design/Qr-Buddy-',
    isFeatured: true,
    visualType: 'qr-buddy'
  },
  {
    id: 'tars',
    title: 'Tars',
    subtitle: 'Real-Time Chat Application',
    category: 'Full-Stack Web Development',
    filterCategory: 'Real-Time Systems',
    credibilityTag: 'Built',
    associatedWith: 'Full-Stack Web Application',
    shortSummary: 'A professional real-time chat application built with Next.js 14, Convex reactive backend, and Clerk authentication.',
    description: 'A professional real-time chat application built with Next.js 14, Convex reactive database, and Clerk authentication. Features real-time messaging, typing indicators, read receipts, message reactions, editing, and responsive UI.',
    problem: 'Traditional polling-based chat interfaces suffer from message latency and complex state management across multiple client connections.',
    solution: 'Built a fully reactive real-time messaging platform utilizing Convex live queries, Clerk auth middleware, and shadcn/ui components.',
    architectureFlow: [
      'Next.js 14 Frontend',
      'Clerk Authentication Middleware',
      'Convex Real-Time Reactive Database',
      'WebSocket Client Subscriptions'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Convex', 'Clerk', 'Tailwind CSS', 'shadcn/ui', 'WebSockets'],
    keyFeatures: [
      'Real-time instant message delivery via reactive queries',
      'User authentication and session management with Clerk',
      'Emoji message reactions and inline message editing',
      'Live typing indicators and read receipt tracking',
      'Responsive dark UI built with Tailwind CSS and shadcn/ui',
      'MIT Open Source License'
    ],
    status: 'Completed Web Application',
    githubUrl: 'https://github.com/vickySv-design/tars',
    isFeatured: false,
    visualType: 'tars'
  },
  {
    id: 'vc-intel',
    title: 'VC Intel',
    subtitle: 'Thesis-First VC Intelligence Platform',
    category: 'AI / Full-Stack / Data Intelligence',
    filterCategory: 'Full Stack',
    credibilityTag: 'Built',
    associatedWith: 'Xartup Fellowship Project',
    shortSummary: 'A thesis-first venture capital intelligence platform designed to discover startups and score them using server-side AI.',
    description: 'A thesis-first venture capital intelligence platform designed to discover startups, enrich startup information using server-side AI (Google Gemini 2.5 Flash), score startups against investment thesis criteria, organize results, and export data.',
    problem: 'Venture capital analysts spend hundreds of hours manually parsing startup profiles and scoring dealflow against thesis guidelines.',
    solution: 'Built an automated discovery and enrichment pipeline using Next.js 14 server routes and Google Gemini 2.5 Flash for thesis scoring.',
    architectureFlow: [
      'Discover Startups',
      'Server-Side AI Enrichment (Gemini 2.5 Flash)',
      'Thesis-Based Scoring Engine',
      'Organize Lists & Export CSV'
    ],
    limitations: [
      'Data persistence currently relies on browser localStorage',
      'Operates on mock startup dataset for demonstration',
      'User authentication is currently omitted'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Google Gemini 2.5 Flash', 'Server API Routes', 'Vercel'],
    keyFeatures: [
      'Automated startup discovery and profile structuring',
      'Server-side AI enrichment using Gemini 2.5 Flash (API keys secured on server)',
      'Thesis-based scoring engine with explainable criteria breakdown',
      'Custom startup list organization and CSV dataset export',
      'Vercel-ready serverless Next.js architecture'
    ],
    status: 'Functional Platform Prototype',
    githubUrl: 'https://github.com/vickySv-design/Xartup-Fellowship-Project',
    isFeatured: false,
    visualType: 'vc-intel'
  },
  {
    id: 'skin-disease-detection',
    title: 'Skin Disease Detection',
    subtitle: 'Academic Machine-Learning Image Classifier',
    category: 'Machine Learning / Computer Vision / AI',
    filterCategory: 'Academic Project',
    credibilityTag: 'Academic Project',
    associatedWith: 'Academic Computer Vision Research',
    shortSummary: 'An academic machine-learning project for skin-condition classification using transfer learning on EfficientNet-B0.',
    description: 'An academic machine-learning project exploring skin-condition classification using transfer learning on EfficientNet-B0 with PyTorch, torchvision, and a Flask web interface. (Academic research project — Not intended for medical diagnosis).',
    problem: 'Evaluating pre-trained convolutional neural networks on skin lesion image datasets for academic classification accuracy.',
    solution: 'Fine-tuned EfficientNet-B0 using ImageNet weights with frozen initial layers, SGD optimizer, and categorical cross-entropy loss.',
    architectureFlow: [
      'Input Image Upload',
      'Pillow / Torchvision Preprocessing',
      'EfficientNet-B0 Transfer Learning Model',
      'Flask Classification Output'
    ],
    reportedMetrics: [
      { label: 'Test Accuracy', value: '95.5%', note: 'Project-reported test evaluation accuracy' },
      { label: 'Model Backbone', value: 'EfficientNet-B0', note: 'Pretrained ImageNet weights (SGD, LR 0.01)' }
    ],
    limitations: [
      'Academic research project only',
      'NOT intended or certified for clinical/medical diagnosis'
    ],
    technologies: ['PyTorch', 'torchvision', 'EfficientNet-B0', 'Pillow', 'Python', 'Flask', 'Werkzeug', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    keyFeatures: [
      'Transfer learning using EfficientNet-B0 with ImageNet weights',
      'First 7 layers frozen with SGD optimizer (Learning rate: 0.01, Momentum: 0.9)',
      'Flask web interface for image upload and classification',
      'Categorical cross-entropy loss training pipeline'
    ],
    status: 'Academic ML Project',
    githubUrl: 'https://github.com/vickySv-design/Skin-Disease-Detection-master',
    isFeatured: false,
    visualType: 'skin-disease'
  }
];
