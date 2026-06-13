// 📄 PODSTRONA: Produkty - Szkolenia i Książki AI
'use client'

import type { Locale } from '@/i18n/config'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Typy produktów
type ProductType = 'training' | 'book'

type DayPlan = {
  day: number
  title: string
  topics: string[]
  hours: string
}

type Training = {
  id: string
  title: string
  category: string
  industry: string
  duration: string
  level: 'Podstawowy' | 'Średniozaawansowany' | 'Zaawansowany'
  price: number
  description: string
  topics: string[]
  image: string
  aiAssistant: boolean // Wirtualny asystent AI na 30 dni
  ebook: {
    title: string
    pages: number
    description: string
  }
  consultation: string // 1h dedykowanej konsultacji
  dayPlan?: DayPlan[] // Plan szkolenia dzień po dniu
}

type Book = {
  id: string
  title: string
  author: string
  category: string
  pages: number
  price: number
  description: string
  topics: string[]
  image: string
}

type CartItem = {
  id: string
  type: ProductType
  title: string
  price: number
  quantity: number
}

// 35 Szkoleń AI dla różnych szczebli zarządzania i obszarów (w tym Cloud AI)
const trainings: Training[] = [
  {
    id: 'train-1',
    title: 'Agentic AI w Praktyce - Budowa Autonomicznych Systemów',
    category: 'Agentic AI',
    industry: 'Cross-industry',
    duration: '3 dni',
    level: 'Zaawansowany',
    price: 4999,
    description: 'Naucz się budować autonomiczne AI agents z możliwością planowania, reasoning i wykonywania złożonych zadań biznesowych.',
    topics: ['Multi-Agent Systems', 'ReAct Pattern', 'Tool-using Agents', 'Autonomous Planning', 'Production Deployment'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Agentic AI - Kompendium Pojęć i Architektury"',
      pages: 45,
      description: 'Glossary terminów Agentic AI, architektury multi-agent systems, przykłady ReAct pattern, narzędzia i frameworki (LangChain, AutoGPT), case studies z produkcji',
    },
    consultation: "1h Architecture Review Session - Omów swoją architekturę multi-agent lub rozwiąż blokery w planowaniu autonomicznych systemów AI",
    dayPlan: [
      {
        day: 1,
        title: 'Fundamentals & ReAct Pattern',
        topics: [
          'Wprowadzenie do Agentic AI - czym różni się od tradycyjnego ML',
          'ReAct Pattern (Reasoning + Acting) - teoria i praktyka',
          'Tool-using Agents - integracja z zewnętrznymi API i narzędziami',
          'Hands-on: Budowa pierwszego agent z LangChain',
          'Memory systems dla agents - short-term vs long-term memory'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Multi-Agent Systems & Autonomous Planning',
        topics: [
          'Multi-Agent architectures - hierarchical vs cooperative',
          'Agent communication protocols i message passing',
          'Autonomous planning algorithms (STRIPS, HTN)',
          'Hands-on: Budowa multi-agent system do automatyzacji workflows',
          'Error handling i recovery strategies w systemach agentowych',
          'Evaluation metrics dla autonomous agents'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Production Deployment & Best Practices',
        topics: [
          'Production-ready agent architecture - scalability i reliability',
          'Monitoring i observability dla AI agents',
          'Cost optimization strategies (token usage, caching)',
          'Security considerations - sandboxing, permission systems',
          'Hands-on: Deploy agent na AWS/Azure z full monitoring',
          'Real-world case studies i lessons learned',
          'Q&A i omówienie Twoich projektów'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'train-3',
    title: 'MLOps dla Systemów Produkcyjnych - Enterprise Best Practices',
    category: 'MLOps',
    industry: 'Enterprise',
    duration: '3 dni',
    level: 'Średniozaawansowany',
    price: 4499,
    description: 'Wdrażanie, monitoring i skalowanie modeli ML w production. CI/CD, A/B testing, model versioning.',
    topics: ['ML Pipelines', 'Model Monitoring', 'A/B Testing', 'Kubernetes dla ML', 'Automated Retraining'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "MLOps - Enterprise Patterns & Anti-patterns"',
      pages: 42,
      description: 'MLOps glossary, CI/CD pipeline templates, monitoring metrics deep-dive, incident response playbooks, compliance checklists (SOC2, ISO)',
    },
    consultation: "1h MLOps Clinic - Diagnoza problemów w ML pipeline, CI/CD troubleshooting, monitoring strategy review",
    dayPlan: [
      {
        day: 1,
        title: 'MLOps Fundamentals & CI/CD for ML',
        topics: [
          'Czym jest MLOps i dlaczego jest kluczowy?',
          'ML lifecycle - od eksperymentu do produkcji',
          'Version control dla ML - Git, DVC, MLflow',
          'Experiment tracking i model registry',
          'Hands-on: Setup MLflow tracking server',
          'CI/CD pipelines dla ML - GitHub Actions, Jenkins'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Model Deployment & Monitoring',
        topics: [
          'Deployment strategies - blue-green, canary, shadow',
          'Model serving - FastAPI, TorchServe, TensorFlow Serving',
          'Containerization - Docker dla ML applications',
          'Monitoring ML models - data drift, model drift, performance',
          'Hands-on: Deploy model z monitoring setup',
          'A/B testing dla ML models',
          'Automated retraining triggers'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Production Best Practices & Scaling',
        topics: [
          'Feature stores - Feast, Tecton',
          'Model governance i compliance',
          'Scaling ML systems - horizontal vs vertical',
          'Kubernetes dla ML workloads',
          'Hands-on: Production-ready ML pipeline end-to-end',
          'Cost optimization w cloud ML',
          'Incident response dla ML systems',
          'Q&A i review projektów uczestników'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'train-6',
    title: 'AI w E-commerce - Rekomendacje i Personalizacja',
    category: 'Recommender Systems',
    industry: 'E-commerce',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 3499,
    description: 'Budowa systemów rekomendacji produktów, personalizacji doświadczeń użytkownika, dynamic pricing.',
    topics: ['Collaborative Filtering', 'Content-based Filtering', 'Hybrid Systems', 'A/B Testing', 'Conversion Optimization'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "E-commerce AI - Conversion Optimization Playbook"',
      pages: 40,
      description: 'Recommender systems glossary, A/B testing statistical foundations, personalization algorithms, pricing strategies, 20 e-commerce AI wins',
    },
    consultation: "1h Recommender System Audit - Analiza conversion metrics, A/B test design, personalization strategy dla Twojego e-commerce",
    dayPlan: [
      {
        day: 1,
        title: 'Recommender Systems & Personalization Basics',
        topics: [
          'Collaborative filtering - user-based vs item-based',
          'Matrix factorization - SVD, ALS',
          'Content-based filtering i hybrid approaches',
          'Hands-on: Building collaborative filtering recommender',
          'Cold start problem i strategies',
          'Evaluation metrics - precision@k, recall@k, NDCG'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Deep Learning for Recommendations & Production',
        topics: [
          'Neural collaborative filtering',
          'Two-tower models i embedding-based recommendations',
          'Session-based recommendations z RNNs',
          'Hands-on: Building neural recommender z PyTorch',
          'Real-time personalization i A/B testing',
          'Deployment strategies - batch vs real-time',
          'Case studies - Amazon, Netflix, Spotify recommenders',
          'Q&A i implementacja dla Twojego e-commerce'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    id: 'train-8',
    title: 'Conversational AI - Chatboty i Asystenci Głosowi',
    category: 'Conversational AI',
    industry: 'Customer Service',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 3299,
    description: 'Tworzenie inteligentnych chatbotów i asystentów głosowych z wykorzystaniem LLM i speech recognition.',
    topics: ['Dialog Management', 'Intent Recognition', 'Speech-to-Text', 'Text-to-Speech', 'Multi-turn Conversations'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Conversational AI - Dialog Design Patterns"',
      pages: 38,
      description: 'Chatbot architecture glossary, intent recognition deep-dive, multi-turn conversation strategies, voice UI best practices, 25 conversation templates',
    },
    consultation: "1h Conversational AI Design Review - Dialog flow optimization, intent recognition improvement, multi-turn conversation strategy",
    dayPlan: [
      {
        day: 1,
        title: 'Conversational AI Fundamentals',
        topics: [
          'Dialog systems - task-oriented vs chitchat',
          'Intent recognition i slot filling',
          'State tracking w multi-turn conversations',
          'Hands-on: Building intent classifier z Rasa',
          'Dialogue management strategies',
          'Evaluation metrics - task success rate, user satisfaction'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'LLM-powered Chatbots & Production',
        "topics": [
          'Using GPT/Claude dla conversational AI',
          'Prompt engineering dla consistent bot personalities',
          'Function calling i tool use w chatbotach',
          'Hands-on: Building LLM chatbot z memory i context',
          'Voice integration - speech-to-text i text-to-speech',
          'Deployment - Slack, Teams, WhatsApp, web chat',
          'Safety i moderation w public chatbots',
          'Q&A i customization dla Twojego use case'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },
  {
    id: 'train-9',
    title: 'AI w Prawnictwie - Legal Tech i Document Intelligence',
    category: 'Document AI',
    industry: 'Legal',
    duration: '2 dni',
    level: 'Średniozaawansowany',
    price: 3999,
    description: 'Automatyzacja analizy dokumentów prawnych, ekstrakcja klauzul, compliance checking.',
    topics: ['Document Understanding', 'Contract Analysis', 'OCR & Layout Analysis', 'Legal NLP', 'Compliance Automation'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Legal AI - Document Intelligence Handbook"',
      pages: 43,
      description: 'Legal tech terminology, contract analysis patterns, OCR technology explained, compliance automation frameworks, 10 law firm case studies',
    },
    consultation: "1h Legal Tech Implementation - Document processing pipeline review, compliance automation architecture, OCR optimization",
    dayPlan: [
      {
        day: 1,
        title: 'Legal NLP & Document Processing',
        topics: [
          'Legal document types - contracts, judgments, regulations',
          'NER dla legal entities - parties, dates, amounts',
          'Document classification i clause detection',
          'Hands-on: Extracting key info z umów',
          'Legal terminology i domain-specific models',
          'Multi-language support dla EU regulations'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Contract Analysis & Compliance Automation',
        topics: [
          'Contract similarity i precedent search',
          'Risk clause detection w umowach',
          'Automated compliance checking (GDPR, AML)',
          'Hands-on: Building contract review assistant',
          'Question Answering dla legal documents',
          'Deployment w kancelarii - security i confidentiality',
          'Ethics i liability w legal AI',
          'Q&A i use cases dla Twojej kancelarii'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
  {
    id: 'train-11',
    title: 'Reinforcement Learning w Praktyce - Od Q-Learning do Deep RL',
    category: 'Reinforcement Learning',
    industry: 'Gaming & Robotics',
    duration: '4 dni',
    level: 'Zaawansowany',
    price: 5499,
    description: 'Budowa agentów RL do gier, robotyki i optymalizacji procesów. DQN, PPO, A3C.',
    topics: ['Q-Learning', 'Deep Q-Networks', 'Policy Gradients', 'PPO & A3C', 'Multi-Agent RL'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Reinforcement Learning - From Q to Deep RL"',
      pages: 47,
      description: 'RL terminology glossary, Bellman equations explained, policy vs value methods, exploration-exploitation strategies, 8 gaming AI case studies',
    },
    consultation: "1h RL Strategy Session - Reward function design, exploration-exploitation tuning, multi-agent coordination dla Twojego case'u",
    dayPlan: [
      {
        day: 1,
        title: 'RL Fundamentals & MDP',
        topics: [
          'Markov Decision Processes (MDP)',
          'Value functions i Bellman equations',
          'Dynamic programming - value iteration, policy iteration',
          'Hands-on: Grid world RL agent',
          'Exploration vs exploitation dilemma',
          'Discount factor i reward shaping'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Q-Learning & Deep Q-Networks',
        topics: [
          'Q-learning algorithm i temporal difference',
          'Deep Q-Networks (DQN) architecture',
          'Experience replay i target networks',
          'Hands-on: DQN dla Atari games',
          'Double DQN i Dueling DQN improvements',
          'Debugging RL agents - common pitfalls'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Policy Gradients & Actor-Critic',
        topics: [
          'Policy gradient methods - REINFORCE',
          'Actor-Critic algorithms',
          'PPO (Proximal Policy Optimization)',
          'Hands-on: PPO dla continuous control',
          'A3C (Asynchronous Advantage Actor-Critic)',
          'Comparing value-based vs policy-based methods'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 4,
        title: 'Advanced RL & Real-world Applications',
        topics: [
          'Multi-agent RL i game theory basics',
          'Offline RL i inverse RL',
          'RL dla robotics i autonomous systems',
          'Hands-on: RL agent dla business optimization problem',
          'Sim-to-real transfer strategies',
          'Case studies - DeepMind AlphaGo, OpenAI Dota 2',
          'Q&A i RL strategy dla Twojego projektu'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
  },
  {
    id: 'train-13',
    title: 'Generative AI - Stable Diffusion, Midjourney i DALL-E',
    category: 'Generative AI',
    industry: 'Creative & Marketing',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 3799,
    description: 'Tworzenie obrazów, wideo i treści z AI. Fine-tuning, prompt engineering, commercial use.',
    topics: ['Stable Diffusion', 'LoRA Training', 'ControlNet', 'Prompt Engineering', 'Commercial Applications'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Generative AI - Prompt Engineering Mastery"',
      pages: 41,
      description: 'Diffusion models explained, prompt engineering techniques, LoRA training guide, commercial licensing overview, 100+ tested prompts',
    },
    consultation: "1h Generative AI Workshop - Prompt engineering optimization, LoRA training strategy, commercial licensing consultation",
    dayPlan: [
      {
        day: 1,
        title: 'Generative AI Fundamentals & Stable Diffusion',
        topics: [
          'Generative models - GANs, VAEs, Diffusion models explained',
          'Stable Diffusion architecture i CLIP',
          'Prompt engineering - basic to advanced techniques',
          'Hands-on: Creating images z Stable Diffusion',
          'Negative prompts i parameter tuning',
          'ComfyUI i production workflows'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'LoRA Training & Commercial Applications',
        topics: [
          'LoRA (Low-Rank Adaptation) training dla custom styles',
          'ControlNet dla precise image control',
          'Image-to-image i inpainting techniques',
          'Hands-on: Training custom LoRA model',
          'Video generation basics - Runway, Pika',
          'Commercial licensing i copyright considerations',
          'Deployment strategies i API integration',
          'Q&A i use cases dla Twojego biznesu'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'train-16',
    title: 'AI Ethics & Governance - Responsible AI Development',
    category: 'AI Ethics',
    industry: 'Cross-industry',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 2999,
    description: 'Etyka AI, bias detection, fairness, transparency, regulatory compliance (EU AI Act).',
    topics: ['AI Ethics', 'Bias Detection', 'Fairness Metrics', 'Explainable AI', 'EU AI Act Compliance'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "AI Ethics - Governance Framework"',
      pages: 39,
      description: 'Ethics terminology, bias detection methods, fairness metrics explained, EU AI Act compliance guide, ethical decision trees',
    },
    consultation: "1h AI Ethics Assessment - Bias detection w Twoich modelach, fairness metrics review, EU AI Act compliance roadmap",
    dayPlan: [
      {
        day: 1,
        title: 'AI Ethics & Bias Detection',
        topics: [
          'AI ethics fundamentals - fairness, accountability, transparency',
          'Types of bias - data bias, algorithmic bias, deployment bias',
          'Bias detection techniques i tools',
          'Hands-on: Detecting bias w dataset i model predictions',
          'Fairness metrics - demographic parity, equalized odds',
          'Mitigating bias - pre-processing, in-processing, post-processing'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Explainable AI & Regulatory Compliance',
        topics: [
          'Explainable AI (XAI) - SHAP, LIME, feature importance',
          'Model interpretability vs performance tradeoffs',
          'EU AI Act - high-risk AI systems classification',
          'Hands-on: Building explainable AI dashboard',
          'GDPR compliance dla AI systems',
          'AI governance frameworks i audit trails',
          'Case studies - ethical AI failures i successes',
          'Q&A i responsible AI strategy dla Twojej organizacji'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  },
  {
    id: 'train-17',
    title: 'Time Series Forecasting - ARIMA, Prophet i Neural Networks',
    category: 'Time Series',
    industry: 'Finance & Energy',
    duration: '3 dni',
    level: 'Średniozaawansowany',
    price: 4199,
    description: 'Prognozowanie szeregów czasowych: sprzedaż, ceny, energia, ruch sieciowy.',
    topics: ['ARIMA & SARIMA', 'Prophet', 'LSTM & GRU', 'Temporal Fusion Transformers', 'Anomaly Detection'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Time Series - Forecasting Methods Compared"',
      pages: 46,
      description: 'Time series glossary, statistical vs ML methods, seasonality handling, anomaly detection techniques, 15 forecasting case studies',
    },
    consultation: "1h Time Series Optimization - Seasonality handling, anomaly detection tuning, forecasting accuracy improvement",
    dayPlan: [
      {
        day: 1,
        title: 'Statistical Time Series Methods',
        topics: [
          'Time series decomposition - trend, seasonality, noise',
          'Stationarity i differencing',
          'ARIMA i SARIMA models',
          'Hands-on: Sales forecasting z ARIMA',
          'Facebook Prophet dla multiple seasonality',
          'Forecast evaluation metrics'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Deep Learning dla Time Series',
        topics: [
          'LSTM i GRU architectures',
          'Temporal Convolutional Networks (TCN)',
          'Transformer-based models - Temporal Fusion Transformer',
          'Hands-on: Multi-step forecasting z LSTM',
          'Multivariate time series',
          'Handling external regressors'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Advanced Forecasting & Production',
        topics: [
          'Anomaly detection w time series',
          'Forecast uncertainty quantification',
          'Automated model selection i hyperparameter tuning',
          'Hands-on: Deploy forecasting API',
          'Real-time forecasting pipelines',
          'Case studies - energy demand, stock prices, server load',
          'Q&A i forecasting strategy dla Twojego use case'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  },
  {
    id: 'train-19',
    title: 'Multimodal AI - Vision + Language Models',
    category: 'Multimodal AI',
    industry: 'Cross-industry',
    duration: '4 dni',
    level: 'Zaawansowany',
    price: 5799,
    description: 'Łączenie vision i language models: CLIP, GPT-4V, image captioning, VQA.',
    topics: ['CLIP & ALIGN', 'Image Captioning', 'Visual Question Answering', 'GPT-4V', 'Multimodal Embeddings'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Multimodal AI - Vision-Language Integration"',
      pages: 49,
      description: 'Multimodal glossary, CLIP architecture explained, vision-language pretraining, cross-modal retrieval, 12 multimodal applications',
    },
    consultation: "1h Multimodal Architecture Session - Vision-language integration strategy, cross-modal retrieval optimization dla Twojego projektu",
    dayPlan: [
      {
        day: 1,
        title: 'Multimodal Foundations & CLIP',
        topics: [
          'Vision-language models overview',
          'CLIP architecture - contrastive learning',
          'ALIGN i other vision-language models',
          'Hands-on: Zero-shot classification z CLIP',
          'Multimodal embeddings i similarity search',
          'Cross-modal retrieval - text-to-image i image-to-text'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Image Captioning & Visual QA',
        topics: [
          'Image captioning architectures',
          'Visual Question Answering (VQA) models',
          'Attention mechanisms w multimodal models',
          'Hands-on: Building image captioning system',
          'Visual reasoning i compositional understanding',
          'Evaluation metrics dla multimodal tasks'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'GPT-4V & Advanced Multimodal',
        topics: [
          'GPT-4 Vision i multimodal LLMs',
          'Video understanding models',
          'Audio-visual multimodal learning',
          'Hands-on: Building multimodal application z GPT-4V',
          'Document understanding - text + images',
          'Medical imaging + clinical notes fusion'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 4,
        title: 'Production Multimodal Systems',
        topics: [
          'Multimodal search engines',
          'E-commerce visual search applications',
          'Accessibility applications - image descriptions',
          'Hands-on: Deploy multimodal API',
          'Scaling multimodal inference',
          'Case studies - Google Lens, Pinterest visual search',
          'Q&A i multimodal strategy'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
  },
  {
    id: 'train-26',
    title: 'AI w Marketingu - Marketing Automation i Personalizacja',
    category: 'Marketing AI',
    industry: 'Marketing',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 3599,
    description: 'AI dla marketingu - customer segmentation, churn prediction, campaign optimization, content generation.',
    topics: ['Customer Segmentation', 'Churn Prediction', 'Campaign Optimization', 'Content Generation', 'Attribution Modeling'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Marketing AI - Attribution & Optimization"',
      pages: 40,
      description: 'Marketing AI glossary, customer segmentation methods, attribution models compared, campaign optimization, 15 marketing AI wins',
    },
    consultation: "1h Marketing AI Strategy - Customer segmentation optimization, attribution modeling review, campaign ROI improvement",
    dayPlan: [
      {
        day: 1,
        title: 'AI for Customer Intelligence',
        topics: [
          'Customer segmentation - RFM, clustering, behavioral',
          'Churn prediction models - logistic regression vs gradient boosting',
          'Customer lifetime value (CLV) prediction',
          'Hands-on: Building customer segmentation model',
          'Propensity modeling - next best action',
          'Lookalike audiences z ML'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Campaign Optimization & Content Generation',
        topics: [
          'Marketing mix modeling (MMM)',
          'Multi-touch attribution models',
          'A/B testing i causal inference',
          'Hands-on: Campaign optimization z Bayesian optimization',
          'AI content generation - GPT dla marketing copy',
          'Personalization engines - email, website, ads',
          'Case studies - Netflix, Spotify, Amazon personalization',
          'Q&A i marketing AI roadmap'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
  },
  {
    id: 'train-30',
    title: 'Explainable AI (XAI) - Transparency i Trust',
    category: 'Explainable AI',
    industry: 'Regulated Industries',
    duration: '2 dni',
    level: 'Średniozaawansowany',
    price: 3899,
    description: 'Interpretowalność modeli AI - SHAP, LIME, attention visualization, model debugging.',
    topics: ['SHAP Values', 'LIME', 'Attention Visualization', 'Model Debugging', 'Regulatory Compliance'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Explainable AI - Interpretability Methods"',
      pages: 45,
      description: 'XAI terminology, SHAP mathematics, LIME explained, attention visualization, regulatory requirements, 10 regulated industry cases',
    },
    consultation: "1h Explainability Workshop - SHAP/LIME implementation, model debugging session, regulatory compliance dla Twojego modelu",
    dayPlan: [
      {
        day: 1,
        title: 'XAI Fundamentals & Model-Agnostic Methods',
        topics: [
          'Czym jest Explainable AI i dlaczego jest kluczowy?',
          'LIME (Local Interpretable Model-agnostic Explanations)',
          'SHAP (SHapley Additive exPlanations) - teoria i praktyka',
          'Hands-on: SHAP dla XGBoost i neural networks',
          'Partial dependence plots',
          'Feature importance vs feature effects'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Deep Learning Interpretability & Production XAI',
        topics: [
          'Attention visualization dla transformers',
          'GradCAM i saliency maps dla computer vision',
          'Counterfactual explanations',
          'Hands-on: Building explainable AI dashboard',
          'Model debugging z interpretability tools',
          'Regulatory compliance - GDPR right to explanation',
          'Case studies - credit scoring, medical diagnosis XAI',
          'Q&A i XAI best practices'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)',
  },
  {
    id: 'train-31',
    title: 'AI w Chmurze - AWS, Azure i Google Cloud dla ML',
    category: 'Cloud AI',
    industry: 'Cloud Computing',
    duration: '4 dni',
    level: 'Średniozaawansowany',
    price: 5299,
    description: 'Kompleksowe wdrażanie AI/ML w chmurze - SageMaker, Azure ML, Vertex AI, serverless ML, cost optimization.',
    topics: ['AWS SageMaker', 'Azure Machine Learning', 'Google Vertex AI', 'Serverless ML', 'Cloud Cost Optimization'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Cloud AI Platforms - Comprehensive Comparison Guide"',
      pages: 50,
      description: 'Cloud AI terminology, AWS vs Azure vs GCP comparison, cost calculators, architecture patterns, migration strategies, 12 cloud ML case studies',
    },
    consultation: "1h Cloud Migration Strategy - Platform selection (AWS/Azure/GCP), cost optimization, architecture design dla ML w chmurze",
    dayPlan: [
      {
        day: 1,
        title: 'AWS ML Services',
        topics: [
          'AWS SageMaker - training, deployment, pipelines',
          'S3 i data management dla ML',
          'EC2 GPU instances - selection i configuration',
          'Hands-on: Deploy model na SageMaker endpoint',
          'AWS Lambda dla serverless inference',
          'Cost optimization strategies'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Azure Machine Learning',
        topics: [
          'Azure ML Studio i workspace setup',
          'Azure ML pipelines i MLOps',
          'Azure Databricks dla distributed training',
          'Hands-on: End-to-end ML pipeline na Azure',
          'Azure Kubernetes Service (AKS) dla ML',
          'Integration z Azure services (Blob, CosmosDB)'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Google Cloud Vertex AI',
        topics: [
          'Vertex AI - managed ML platform',
          'BigQuery ML - SQL dla machine learning',
          'Google Cloud Storage i data engineering',
          'Hands-on: Training custom model z Vertex AI',
          'AutoML na GCP',
          'TPUs vs GPUs - kiedy używać?'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 4,
        title: 'Multi-Cloud Strategy & Cost Optimization',
        topics: [
          'Platform comparison - AWS vs Azure vs GCP',
          'Multi-cloud architectures',
          'Cost optimization - reserved instances, spot instances',
          'Hands-on: Cost analysis i optimization workshop',
          'Migration strategies - on-prem to cloud',
          'Security i compliance w cloud ML',
          'Case studies - Airbnb, Spotify, Uber cloud ML',
          'Q&A i cloud ML best practices'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'train-32',
    title: 'Kubernetes dla ML - Skalowalne Wdrożenia AI',
    category: 'Cloud Infrastructure',
    industry: 'DevOps & ML',
    duration: '3 dni',
    level: 'Zaawansowany',
    price: 4999,
    description: 'Deployment i orkiestracja modeli ML na Kubernetes - Kubeflow, KServe, GPU scheduling, autoscaling.',
    topics: ['Kubernetes Basics', 'Kubeflow', 'KServe', 'GPU Scheduling', 'Model Serving at Scale'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Kubernetes for ML - Production Deployment Guide"',
      pages: 48,
      description: 'K8s ML glossary, Kubeflow pipelines explained, KServe architecture, GPU resource management, autoscaling strategies, 10 production deployments',
    },
    consultation: "1h Kubernetes ML Optimization - Kubeflow pipeline review, GPU scheduling tuning, autoscaling strategy dla Twojego deploymentu",
    dayPlan: [
      {
        day: 1,
        title: 'Kubernetes Fundamentals for ML',
        topics: [
          'Kubernetes basics - pods, deployments, services',
          'Docker containerization dla ML models',
          'kubectl essentials dla ML engineers',
          'Hands-on: Deploy first ML model na Kubernetes',
          'ConfigMaps i Secrets dla model configuration',
          'Persistent volumes dla ML data'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Kubeflow & ML Pipelines',
        topics: [
          'Kubeflow architecture i components',
          'Kubeflow Pipelines - building end-to-end workflows',
          'Jupyter notebooks na Kubernetes',
          'Hands-on: Building ML pipeline z Kubeflow',
          'Experiment tracking z Katib',
          'Model versioning i registry'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 3,
        title: 'Production ML Serving & Scaling',
        topics: [
          'KServe (formerly KFServing) - model serving platform',
          'GPU scheduling i resource management',
          'Horizontal Pod Autoscaling dla ML',
          'Hands-on: Deploy multi-model serving z KServe',
          'Monitoring i logging dla K8s ML',
          'Cost optimization - node pools, spot instances',
          'Case studies - Uber Michelangelo, Spotify ML platform',
          'Q&A i Kubernetes ML best practices'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
  },
  {
    id: 'train-33',
    title: 'Serverless AI - Lambda, Cloud Functions i Event-Driven ML',
    category: 'Serverless AI',
    industry: 'Cloud Computing',
    duration: '2 dni',
    level: 'Średniozaawansowany',
    price: 3899,
    description: 'Budowa serverless AI applications - AWS Lambda, Cloud Functions, event-driven architectures, cold start optimization.',
    topics: ['AWS Lambda for ML', 'Cloud Functions', 'Event-Driven Architecture', 'Cold Start Optimization', 'Serverless Inference'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Serverless AI - Architecture Patterns & Best Practices"',
      pages: 42,
      description: 'Serverless glossary, Lambda vs Cloud Functions comparison, event-driven patterns, cost optimization, latency reduction techniques, 15 serverless AI apps',
    },
    consultation: "1h Serverless Architecture Clinic - Cold start reduction, cost optimization, event-driven design dla Twojej aplikacji AI",
    dayPlan: [
      {
        day: 1,
        title: 'Serverless Fundamentals & AWS Lambda',
        topics: [
          'Serverless architecture - kiedy i dlaczego?',
          'AWS Lambda basics - functions, triggers, layers',
          'Deploying ML models na Lambda',
          'Hands-on: Building serverless inference API',
          'Cold start problem - causes i solutions',
          'Lambda pricing i cost optimization'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Event-Driven AI & Production Serverless',
        topics: [
          'Google Cloud Functions i Azure Functions',
          'Event-driven architectures - SQS, EventBridge, Pub/Sub',
          'Step Functions dla ML workflows',
          'Hands-on: Event-driven ML pipeline',
          'Container-based serverless - Fargate, Cloud Run',
          'Monitoring i debugging serverless apps',
          'Case studies - serverless AI w production',
          'Q&A i serverless best practices'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 'train-46',
    title: 'RAG Systems & Vector Databases - Praktyczny Kurs',
    category: 'RAG & Retrieval',
    industry: 'Cross-industry',
    duration: '2 dni',
    level: 'Średniozaawansowany',
    price: 3499,
    description: 'Retrieval-Augmented Generation - budowa RAG systemów, vector databases, embeddings, chunking strategies.',
    topics: ['RAG Architecture', 'Vector Databases', 'Embeddings', 'Chunking Strategies', 'Hybrid Search'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "RAG Systems - Production Guide"',
      pages: 42,
      description: 'RAG terminology, vector database comparison (Pinecone, Weaviate, Qdrant), embedding models, chunking best practices, evaluation metrics, 10 RAG deployments',
    },
    consultation: "1h RAG Optimization - Embedding model selection, chunking strategy, retrieval accuracy tuning dla Twojego knowledge base",
    dayPlan: [
      {
        day: 1,
        title: 'RAG Fundamentals & Vector Databases',
        topics: [
          'Retrieval-Augmented Generation - kiedy i dlaczego?',
          'Vector databases - Pinecone, Weaviate, Qdrant, Chroma',
          'Embeddings - wybór modelu (OpenAI, Cohere, open-source)',
          'Hands-on: Budowa prostego RAG systemu',
          'Chunking strategies - size, overlap, semantic chunking',
          'Metadata filtering i hybrid search'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Production RAG & Optimization',
        topics: [
          'Advanced retrieval techniques - reranking, query expansion',
          'Multi-query retrieval i parent-child chunking',
          'Hands-on: Production RAG z własną knowledge base',
          'Evaluation metrics - faithfulness, relevance, answer quality',
          'RAG failure modes i debugging',
          'Cost optimization - caching, embeddings batching',
          'Case studies - ChatGPT plugins, Notion AI, customer support',
          'Q&A i RAG best practices'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 'train-47',
    title: 'Prompt Engineering & LLM Optimization',
    category: 'Prompt Engineering',
    industry: 'Cross-industry',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 2999,
    description: 'Profesjonalny prompt engineering - techniki, wzorce, optymalizacja kosztów i jakości LLM responses.',
    topics: ['Prompt Patterns', 'Few-shot Learning', 'Chain-of-Thought', 'Cost Optimization', 'Evaluation'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "Prompt Engineering - Advanced Techniques"',
      pages: 38,
      description: 'Prompt engineering glossary, pattern catalog (50+ wzorców), few-shot examples, CoT explained, evaluation frameworks, 15 prompt engineering wins',
    },
    consultation: "1h Prompt Optimization Workshop - Review i tuning Twoich promptów, cost-quality tradeoff optimization",
    dayPlan: [
      {
        day: 1,
        title: 'Prompt Engineering Fundamentals',
        topics: [
          'Prompt engineering basics - clear, specific, structured',
          'Prompt patterns - role prompting, format control, constraints',
          'Few-shot learning - example selection strategies',
          'Hands-on: Writing effective prompts dla różnych tasks',
          'Chain-of-Thought prompting - reasoning step-by-step',
          'ReAct pattern - reasoning + acting'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Advanced Techniques & Optimization',
        topics: [
          'Self-consistency i temperature tuning',
          'Prompt chaining i decomposition',
          'Tree of Thoughts - parallel reasoning',
          'Hands-on: Building complex prompt pipelines',
          'Cost optimization - model selection, caching, batching',
          'Evaluation frameworks - automatic i human evaluation',
          'Prompt injection defense strategies',
          'Case studies - GitHub Copilot, Jasper AI, Copy.ai',
          'Q&A i prompt library building'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'train-48',
    title: 'AI Strategy dla C-Level - Transformacja Cyfrowa i ROI',
    category: 'AI Strategy',
    industry: 'Executive',
    duration: '1 dzień',
    level: 'Podstawowy',
    price: 5999,
    description: 'Strategiczne wykorzystanie AI w biznesie - od wizji przez roadmap do mierzalnych wyników. Dla CEO, CFO, CTO.',
    topics: ['AI Strategy', 'Digital Transformation', 'ROI Calculation', 'Competitive Advantage', 'Risk Management'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "AI Strategy - Executive Decision Framework"',
      pages: 35,
      description: 'AI strategy glossary, digital transformation roadmap, ROI calculation models, competitive analysis frameworks, 20 C-level decisions',
    },
    consultation: "1h Executive AI Strategy Session - ROI calculation, competitive analysis, digital transformation roadmap dla Twojej firmy",
    dayPlan: [
      {
        day: 1,
        title: 'AI Strategy & Digital Transformation dla C-Level',
        topics: [
          'AI landscape 2025+ - trendy, możliwości, zagrożenia',
          'AI strategy frameworks - build vs buy, partnerships',
          'ROI calculation dla AI initiatives - konkretne metryki',
          'Competitive advantage through AI - case studies',
          'AI maturity assessment - gdzie jesteś vs gdzie chcesz być',
          'Digital transformation roadmap - 12-month action plan',
          'Risk management i AI governance',
          'Talent acquisition strategy - building AI teams',
          'Board communication o AI initiatives',
          'Workshop: Twoja AI strategy na 1 stronie',
          'Q&A i executive networking'
        ],
        hours: '9:00-17:00 (intensywny 1-day executive workshop)'
      }
    ],
    image: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
  },
  {
    id: 'train-49',
    title: 'AI dla Menedżerów - Wdrażanie Projektów AI w Zespole',
    category: 'AI Management',
    industry: 'Management',
    duration: '2 dni',
    level: 'Podstawowy',
    price: 3799,
    description: 'Zarządzanie projektami AI, budowanie zespołów, metodyki agile dla AI. Dla menedżerów i team leaders.',
    topics: ['AI Project Management', 'Team Building', 'Agile for AI', 'Vendor Selection', 'Budget Planning'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "AI Project Management - Methodologies & Tools"',
      pages: 38,
      description: 'AI PM terminology, agile for AI explained, team structure templates, vendor evaluation criteria, 15 successful AI projects',
    },
    consultation: "1h AI Project Management Clinic - Team structure optimization, vendor selection strategy, budget planning workshop",
    dayPlan: [
      {
        day: 1,
        title: 'AI Project Management Fundamentals',
        topics: [
          'AI project lifecycle vs traditional software projects',
          'Team roles - ML engineers, data scientists, MLOps engineers',
          'Agile i Scrum dla AI projects - co działa, co nie',
          'Hands-on: Planning AI project roadmap dla Twojego zespołu',
          'Risk management w AI - co może pójść nie tak?',
          'Budget planning - ile kosztuje AI project?',
          'Stakeholder management i komunikacja'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Execution & Vendor Management',
        topics: [
          'Managing AI experiments - od PoC do produkcji',
          'Model performance vs business KPIs - alignment',
          'Vendor selection - build vs buy vs partner decisions',
          'Hands-on: Vendor evaluation workshop',
          'Change management - AI adoption w organizacji',
          'Monitoring progress - OKRs dla AI projects',
          'Case studies - successful vs failed AI projects',
          'Q&A i action plan dla Twojego zespołu'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  },
  {
    id: 'train-50',
    title: 'AI Product Management - Od Idei do MVP',
    category: 'Product Management',
    industry: 'Product',
    duration: '2 dni',
    level: 'Średniozaawansowany',
    price: 4299,
    description: 'Budowanie produktów AI-first - discovery, user research, metrics, go-to-market strategy. Dla Product Managers.',
    topics: ['AI Product Discovery', 'User Research', 'MVP Development', 'Product Metrics', 'GTM Strategy'],
    aiAssistant: true,
    ebook: {
      title: 'eBook: "AI Product Management - Discovery to Launch"',
      pages: 42,
      description: 'AI product glossary, user research for AI, MVP scoping, product metrics, go-to-market playbooks, 10 AI product launches',
    },
    consultation: "1h Product Discovery Workshop - User research review, MVP scoping, product-market fit metrics dla Twojego AI product",
    dayPlan: [
      {
        day: 1,
        title: 'AI Product Discovery & User Research',
        topics: [
          'AI product opportunity assessment - market size, competition',
          'User research dla AI features - unique challenges',
          'Problem-solution fit validation',
          'Hands-on: User interview workshop - AI product edition',
          'Competitive analysis for AI products',
          'MVP definition - co budować first?',
          'AI vs non-AI solutions - kiedy AI ma sens?'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      },
      {
        day: 2,
        title: 'Product Metrics & Go-to-Market',
        topics: [
          'AI product metrics - accuracy vs user satisfaction',
          'Balancing ML metrics (precision, recall) z business KPIs',
          'A/B testing AI features - statistical significance',
          'Hands-on: Defining success metrics dla Twojego produktu',
          'Go-to-market strategy - positioning, pricing, channels',
          'Product-market fit signals dla AI products',
          'Case studies - Gmail Smart Compose, GitHub Copilot, Jasper',
          'Q&A i product roadmap planning'
        ],
        hours: '9:00-17:00 (7h + przerwy)'
      }
    ],
    image: 'linear-gradient(135deg, #bc4e9c 0%, #f80759 100%)',
  },
]

// 20 Trendingowych Książek AI
const books: Book[] = [
  {
    id: 'book-1',
    title: 'Building Agentic AI Systems: From Theory to Production',
    author: 'brillQ AI Research Team',
    category: 'Agentic AI',
    pages: 420,
    price: 199,
    description: 'Kompleksowy przewodnik po budowie autonomicznych systemów AI - od koncepcji przez implementację po deployment.',
    topics: ['Multi-Agent Architectures', 'Planning & Reasoning', 'Tool Integration', 'Production Best Practices', 'Case Studies'],
    image: '/book-covers/Building Agentic AI Systems: From Theory to Production.jpg',
  },
  {
    id: 'book-2',
    title: 'LLM Fine-tuning Mastery: LoRA, QLoRA & Custom Models',
    author: 'brillQ AI Research Team',
    category: 'Large Language Models',
    pages: 380,
    price: 179,
    description: 'Wszystko o dostosowywaniu LLM do potrzeb biznesowych - fine-tuning, LoRA, RLHF, cost optimization.',
    topics: ['Fine-tuning Strategies', 'LoRA & QLoRA', 'RLHF', 'Domain Adaptation', 'Production Deployment'],
    image: '/book-covers/LLM Fine-tuning Mastery: LoRA, QLoRA & Custom Models.jpg',
  },
  {
    id: 'book-3',
    title: 'MLOps Engineering: Production ML Systems at Scale',
    author: 'brillQ AI Research Team',
    category: 'MLOps',
    pages: 450,
    price: 189,
    description: 'Praktyczny przewodnik po tworzeniu skalowalnych systemów ML - od prototypu po enterprise deployment.',
    topics: ['ML Pipelines', 'Model Serving', 'Monitoring & Observability', 'A/B Testing', 'Kubernetes MLOps'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'book-4',
    title: 'RAG Systems Engineering: Vector DBs & Retrieval',
    author: 'brillQ AI Research Team',
    category: 'RAG & Retrieval',
    pages: 360,
    price: 169,
    description: 'Budowa production-ready RAG systems - vector databases, embeddings, chunking strategies, evaluation.',
    topics: ['RAG Architecture', 'Vector Databases', 'Embeddings', 'Chunking Strategies', 'Evaluation Metrics'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 'book-5',
    title: 'Prompt Engineering Mastery: Advanced LLM Techniques',
    author: 'brillQ AI Research Team',
    category: 'Prompt Engineering',
    pages: 320,
    price: 159,
    description: 'Profesjonalny prompt engineering - patterns, few-shot, chain-of-thought, cost optimization.',
    topics: ['Prompt Patterns', 'Few-shot Learning', 'Chain-of-Thought', 'ReAct', 'Evaluation', 'Cost Optimization'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 'book-6',
    title: 'AI Agents for Business Automation',
    author: 'brillQ AI Research Team',
    category: 'AI Agents',
    pages: 340,
    price: 169,
    description: 'Automatyzacja procesów biznesowych z AI agents - workflow automation, decision making, integration.',
    topics: ['Business Automation', 'Workflow Agents', 'Decision Making', 'Tool Integration', 'ROI Calculation'],
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    id: 'book-7',
    title: 'Conversational AI Patterns: ChatGPT to Production',
    author: 'brillQ AI Research Team',
    category: 'Conversational AI',
    pages: 300,
    price: 149,
    description: 'Tworzenie inteligentnych asystentów konwersacyjnych - dialog management, context, production deployment.',
    topics: ['Dialog Systems', 'Intent Recognition', 'Context Management', 'Multi-turn Conversations', 'Production Deployment'],
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },
  {
    id: 'book-8',
    title: 'Deep Learning Foundations: PyTorch & Modern Architectures',
    author: 'brillQ AI Research Team',
    category: 'Deep Learning',
    pages: 480,
    price: 189,
    description: 'Solidne podstawy deep learning - od matematyki przez implementację po zaawansowane architektury.',
    topics: ['Neural Networks', 'CNNs & RNNs', 'Transformers', 'PyTorch', 'Best Practices', 'Production Tips'],
    image: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  },
  {
    id: 'book-9',
    title: 'Reinforcement Learning Praktyczny: DQN to PPO',
    author: 'brillQ AI Research Team',
    category: 'Reinforcement Learning',
    pages: 440,
    price: 199,
    description: 'Kompletny przewodnik po RL - od podstaw przez DQN, PPO do multi-agent systems.',
    topics: ['Q-Learning', 'Deep RL', 'Policy Gradients', 'Actor-Critic', 'Multi-Agent Systems', 'Real-world Applications'],
    image: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
  },
  {
    id: 'book-10',
    title: 'Generative AI Handbook: Stable Diffusion & Midjourney',
    author: 'brillQ AI Research Team',
    category: 'Generative AI',
    pages: 410,
    price: 189,
    description: 'Wszystko o generative AI - diffusion models, DALL-E, Midjourney, commercial applications.',
    topics: ['Stable Diffusion', 'Midjourney', 'Text-to-Image', 'Image-to-Image', 'Commercial Use', 'Fine-tuning'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'book-11',
    title: 'Time Series Forecasting with AI Agents',
    author: 'brillQ AI Research Team',
    category: 'Time Series',
    pages: 380,
    price: 179,
    description: 'Nowoczesne metody prognozowania z AI agents - od ARIMA przez Prophet do agentic forecasting.',
    topics: ['ARIMA', 'Prophet', 'LSTM', 'Temporal Transformers', 'Agentic Forecasting', 'Production Systems'],
    image: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  },
  {
    id: 'book-12',
    title: 'Multimodal AI: Vision + Language Models (GPT-4V, CLIP)',
    author: 'brillQ AI Research Team',
    category: 'Multimodal AI',
    pages: 460,
    price: 209,
    description: 'Cutting-edge multimodal AI - CLIP, GPT-4V, image captioning, visual question answering.',
    topics: ['CLIP & ALIGN', 'GPT-4V', 'Image Captioning', 'Visual QA', 'Cross-Modal Retrieval', 'Applications'],
    image: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
  },
  {
    id: 'book-13',
    title: 'Computer Vision Praktyczny: Od YOLOv8 do SAM',
    author: 'brillQ AI Research Team',
    category: 'Computer Vision',
    pages: 390,
    price: 179,
    description: 'Praktyczne computer vision - object detection, segmentation, tracking, production deployment.',
    topics: ['Object Detection', 'Segmentation', 'YOLOv8', 'Segment Anything (SAM)', 'Tracking', 'Production'],
    image: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
  },
  {
    id: 'book-14',
    title: 'AI Marketing Automation: Personalization & Growth',
    author: 'brillQ AI Research Team',
    category: 'Marketing AI',
    pages: 340,
    price: 159,
    description: 'AI w marketingu - personalizacja, customer analytics, content generation, campaign optimization.',
    topics: ['Personalization', 'Customer Analytics', 'Content Generation', 'Campaign Optimization', 'Marketing ROI'],
    image: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
  },
  {
    id: 'book-15',
    title: 'Responsible AI: Ethics & Explainability',
    author: 'brillQ AI Research Team',
    category: 'AI Ethics',
    pages: 290,
    price: 139,
    description: 'Etyka i explainability w AI - bias, fairness, SHAP, LIME, regulatory compliance.',
    topics: ['AI Ethics', 'Bias Mitigation', 'SHAP & LIME', 'Explainable AI', 'EU AI Act', 'GDPR Compliance'],
    image: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  },
  {
    id: 'book-16',
    title: 'Legal AI: Document Intelligence & Compliance',
    author: 'brillQ AI Research Team',
    category: 'Legal Tech',
    pages: 340,
    price: 169,
    description: 'AI w prawnictwie - analiza kontraktów, compliance automation, legal research.',
    topics: ['Contract Analysis', 'Document Understanding', 'Legal NLP', 'Compliance Automation', 'Case Law Analysis'],
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
  {
    id: 'book-17',
    title: 'AWS AI/ML Services: SageMaker, Bedrock & Beyond',
    author: 'brillQ AI Research Team',
    category: 'Cloud AI',
    pages: 400,
    price: 189,
    description: 'Praktyczny przewodnik po AWS AI/ML - SageMaker, Bedrock, Lambda, deployment strategies.',
    topics: ['AWS SageMaker', 'Amazon Bedrock', 'Lambda ML', 'Cost Optimization', 'Production Deployment'],
    image: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
  },
  {
    id: 'book-18',
    title: 'Kubernetes dla ML: Skalowalne Wdrożenia AI',
    author: 'brillQ AI Research Team',
    category: 'MLOps',
    pages: 380,
    price: 179,
    description: 'Kubernetes dla ML workloads - KubeFlow, model serving, autoscaling, GPU management.',
    topics: ['Kubernetes Basics', 'KubeFlow', 'Model Serving', 'GPU Management', 'Autoscaling', 'Production'],
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    id: 'book-19',
    title: 'Serverless AI: Event-Driven ML Systems',
    author: 'brillQ AI Research Team',
    category: 'Serverless',
    pages: 320,
    price: 159,
    description: 'Serverless dla ML - Lambda, Cloud Functions, event-driven architectures, cost optimization.',
    topics: ['AWS Lambda ML', 'Cloud Functions', 'Event-Driven ML', 'Serverless Inference', 'Cost Optimization'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 'book-20',
    title: 'Data Engineering dla AI: Pipelines & Feature Stores',
    author: 'brillQ AI Research Team',
    category: 'Data Engineering',
    pages: 440,
    price: 189,
    description: 'Cloud data engineering dla ML - Databricks, Snowflake, feature stores, data quality.',
    topics: ['Databricks', 'Snowflake', 'Feature Stores', 'Data Pipelines', 'Data Quality', 'ETL/ELT'],
    image: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  },
]

export default function ProduktyPage({ params }: { params: { lang: Locale } }) {
  const [activeTab, setActiveTab] = useState<'trainings' | 'books'>('trainings')
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null)

  // Dodaj do koszyka
  const addToCart = (id: string, type: ProductType, title: string, price: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { id, type, title, price, quantity: 1 }]
    })
  }

  // Usuń z koszyka
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  // Oblicz total
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Pobierz unikalne kategorie
  const categories = ['all', ...Array.from(new Set(trainings.map((t) => t.category)))]

  // Filtruj produkty
  const filteredTrainings =
    selectedCategory === 'all'
      ? trainings
      : trainings.filter((t) => t.category === selectedCategory)

  const filteredBooks =
    selectedCategory === 'all' ? books : books.filter((b) => b.category === selectedCategory)

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden bg-black flex items-center justify-center"
        style={{ minHeight: '70vh', padding: 'clamp(80px, 12vh, 120px) clamp(24px, 5vw, 100px)' }}
      >
        <div
          className="absolute opacity-20"
          style={{
            width: '500px',
            height: '500px',
            top: '20%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(178, 158, 82, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 w-full text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <AnimatedSection>
            <h1
              className="text-white"
              style={{
                fontSize: 'clamp(48px, 6.5vw, 100px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Szkolenia i książki o <span style={{ color: 'var(--color-primary)' }}>AI</span> dla firm
            </h1>
            <p
              className="text-gray-400 mt-8"
              style={{
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 300,
                maxWidth: '800px',
                margin: '32px auto 0',
                lineHeight: 1.6,
              }}
            >
              Profesjonalne szkolenia i książki eksperckie z zakresu AI, Machine Learning, Cloud AI i Data Science
            </p>

            {/* AI Assistant Feature Highlight */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
                <span className="text-primary text-sm font-medium">
                  Każde szkolenie z Wirtualnym Asystentem AI na 30 dni
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-gray-400"
                  strokeWidth="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span className="text-gray-300 text-sm font-medium">
                  + Bonus eBook do każdego szkolenia (do 50 stron)
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span className="text-primary text-sm font-medium">
                  + 1h dedykowanej konsultacji do każdego szkolenia
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs & Category Filter */}
      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ padding: 'clamp(60px, 10vh, 80px) clamp(24px, 5vw, 100px)' }}
      >
        <div style={{ maxWidth: '1580px', margin: '0 auto' }}>
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('trainings')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'trainings'
                  ? 'bg-primary text-black'
                  : 'bg-transparent border-2 border-gray-700 text-gray-400 hover:border-primary hover:text-primary'
              }`}
              style={{ fontSize: '16px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Szkolenia
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'books'
                  ? 'bg-primary text-black'
                  : 'bg-transparent border-2 border-gray-700 text-gray-400 hover:border-primary hover:text-primary'
              }`}
              style={{ fontSize: '16px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Książki
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary/20 text-primary border border-primary'
                    : 'bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                {cat === 'all' ? 'Wszystkie' : cat}
              </button>
            ))}
          </div>

          {/* Products Grid - Szkolenia */}
          {activeTab === 'trainings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrainings.map((training, index) => (
                <AnimatedSection key={training.id} delay={index * 0.1}>
                  <motion.div
                    className="relative h-full flex flex-col"
                    style={{
                      background: 'rgba(30, 30, 30, 0.5)',
                      border: '1px solid rgba(112, 112, 112, 0.2)',
                      overflow: 'hidden',
                    }}
                    whileHover={{ y: -8, borderColor: 'rgba(178, 158, 82, 0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Header */}
                    <div
                      className="relative h-48 flex items-center justify-center"
                      style={{ background: training.image }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="relative z-10 text-center px-6">
                        <div className="inline-block px-4 py-1 bg-black/40 text-primary rounded-full text-xs uppercase tracking-wider mb-3">
                          {training.level}
                        </div>
                        <h3
                          className="text-white"
                          style={{
                            fontSize: 'clamp(18px, 1.8vw, 22px)',
                            fontWeight: 500,
                            lineHeight: 1.3,
                          }}
                        >
                          {training.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {training.duration}
                        </span>
                        <span className="text-xs px-3 py-1 bg-gray-800 text-gray-400 rounded-full">
                          {training.industry}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3" style={{ lineHeight: 1.6 }}>
                        {training.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-xs text-gray-300 mb-2">Tematy:</div>
                        <div className="flex flex-wrap gap-1">
                          {training.topics.slice(0, 3).map((topic, i) => (
                            <span key={i} className="text-xs text-gray-300">
                              • {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* AI Assistant Badge */}
                      {training.aiAssistant && (
                        <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="text-primary"
                              strokeWidth="2"
                            >
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                              <path d="M2 17L12 22L22 17" />
                              <path d="M2 12L12 17L22 12" />
                            </svg>
                            <span className="text-primary text-xs font-semibold">
                              Wirtualny Asystent AI
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs">
                            30 dni wsparcia AI - zadawaj pytania o materiał szkoleniowy
                          </p>
                        </div>
                      )}

                      {/* eBook Bonus Badge */}
                      <div className="mb-4 p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="text-gray-400"
                            strokeWidth="2"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          </svg>
                          <span className="text-gray-300 text-xs font-semibold">
                            Bonus: {training.ebook.title}
                          </span>
                        </div>
                        <p className="text-gray-300 text-xs mb-1">
                          {training.ebook.pages} stron
                        </p>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {training.ebook.description}
                        </p>
                      </div>

                      {/* 1h Consultation Badge */}
                      <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="text-primary"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span className="text-primary text-xs font-semibold">
                            Dedykowana Konsultacja
                          </span>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {training.consultation}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-primary text-2xl font-bold">{training.price} PLN</div>
                            <div className="text-gray-300 text-xs">+ VAT</div>
                          </div>
                          <button
                            onClick={() =>
                              addToCart(training.id, 'training', training.title, training.price)
                            }
                            className="px-6 py-2 bg-primary text-black hover:bg-primary/90 transition-all duration-300 rounded-full text-sm font-semibold"
                          >
                            Dodaj do koszyka
                          </button>
                        </div>
                        <button
                          onClick={() => setSelectedTraining(training)}
                          className="w-full px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full text-sm font-semibold"
                        >
                          Zobacz szczegóły i plan szkolenia →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Products Grid - Książki */}
          {activeTab === 'books' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book, index) => (
                <AnimatedSection key={book.id} delay={index * 0.1}>
                  <motion.div
                    className="relative h-full flex flex-col"
                    style={{
                      background: 'rgba(30, 30, 30, 0.5)',
                      border: '1px solid rgba(112, 112, 112, 0.2)',
                      overflow: 'hidden',
                    }}
                    whileHover={{ y: -8, borderColor: 'rgba(178, 158, 82, 0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Book Cover Image */}
                    <div className="relative" style={{ height: '400px', overflow: 'hidden' }}>
                      {book.image.startsWith('/') ? (
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background: book.image,
                          }}
                        />
                      )}
                      {/* Page count badge */}
                      <div className="absolute top-4 right-4">
                        <div className="px-4 py-2 bg-black/70 backdrop-blur-sm text-primary rounded-full text-xs uppercase tracking-wider border border-primary/30">
                          {book.pages} stron
                        </div>
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="px-6 pt-6 pb-4">
                      <h3
                        className="text-white mb-2"
                        style={{
                          fontSize: 'clamp(20px, 2vw, 24px)',
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {book.title}
                      </h3>
                      <div className="text-sm text-gray-400">Autor: {book.author}</div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 flex-1 flex flex-col">
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3" style={{ lineHeight: 1.6 }}>
                        {book.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-xs text-gray-300 mb-2">Tematy:</div>
                        <div className="flex flex-wrap gap-1">
                          {book.topics.slice(0, 3).map((topic, i) => (
                            <span key={i} className="text-xs text-gray-300">
                              • {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-primary text-2xl font-bold">{book.price} PLN</div>
                            <div className="text-gray-300 text-xs">E-book + Wersja drukowana</div>
                          </div>
                          <button
                            onClick={() => addToCart(book.id, 'book', book.title, book.price)}
                            className="px-6 py-2 bg-primary text-black hover:bg-primary/90 transition-all duration-300 rounded-full text-sm font-semibold"
                          >
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <motion.button
          onClick={() => setShowCart(true)}
          className="fixed bottom-8 right-8 z-50 bg-primary text-black rounded-full p-4 shadow-2xl"
          style={{ width: '64px', height: '64px' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 2L9 6M15 2L15 6M6 6h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </div>
          </div>
        </motion.button>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCart(false)}
        >
          <motion.div
            className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-2xl font-bold">Koszyk</h2>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-400">Koszyk jest pusty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="text-white font-medium mb-1">{item.title}</div>
                          <div className="text-gray-400 text-sm">
                            {item.price} PLN × {item.quantity}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-primary font-bold">{item.price * item.quantity} PLN</div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path
                                d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Suma netto:</span>
                      <span className="text-white font-bold text-xl">{cartTotal} PLN</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">VAT (23%):</span>
                      <span className="text-white">{(cartTotal * 0.23).toFixed(2)} PLN</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-lg font-bold">Suma brutto:</span>
                      <span className="text-primary text-2xl font-bold">
                        {(cartTotal * 1.23).toFixed(2)} PLN
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert('Integracja z Stripe - przekierowanie do płatności')
                      // Tu będzie integracja z Stripe
                    }}
                    className="w-full py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all duration-300 text-lg"
                  >
                    Przejdź do płatności 💳
                  </button>

                  <p className="text-gray-300 text-sm text-center mt-4">
                    Bezpieczna płatność przez Stripe
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Training Details Modal */}
      {selectedTraining && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.9)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTraining(null)}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black border border-primary/30 rounded-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTraining(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-full transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Header with Gradient */}
            <div
              className="relative h-64 flex items-center justify-center"
              style={{ background: selectedTraining.image }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative z-10 text-center px-8">
                <div className="inline-block px-6 py-2 bg-black/60 text-primary rounded-full text-sm uppercase tracking-wider mb-4">
                  {selectedTraining.level} • {selectedTraining.duration}
                </div>
                <h2 className="text-white text-4xl font-bold mb-2">{selectedTraining.title}</h2>
                <p className="text-gray-300 text-lg">{selectedTraining.category}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">O szkoleniu</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedTraining.description}</p>
              </div>

              {/* Day-by-day Plan */}
              {selectedTraining.dayPlan && selectedTraining.dayPlan.length > 0 && (
                <div>
                  <h3 className="text-white text-2xl font-bold mb-6">Plan szkolenia</h3>
                  <div className="space-y-6">
                    {selectedTraining.dayPlan.map((day) => (
                      <div
                        key={day.day}
                        className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-primary text-sm font-semibold mb-1">Dzień {day.day}</div>
                            <h4 className="text-white text-xl font-bold">{day.title}</h4>
                          </div>
                          <div className="text-gray-400 text-sm">{day.hours}</div>
                        </div>
                        <ul className="space-y-2">
                          {day.topics.map((topic, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-primary mr-3">▸</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics Grid */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">Wszystkie tematy</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedTraining.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bonuses Section */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">Co otrzymasz?</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* AI Assistant */}
                  {selectedTraining.aiAssistant && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="text-primary"
                          strokeWidth="2"
                        >
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                          <path d="M2 17L12 22L22 17" />
                          <path d="M2 12L12 17L22 12" />
                        </svg>
                        <h4 className="text-primary font-bold">Wirtualny Asystent AI</h4>
                      </div>
                      <p className="text-gray-300 text-sm">30 dni wsparcia AI - zadawaj pytania o materiał szkoleniowy</p>
                    </div>
                  )}

                  {/* eBook */}
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-gray-400"
                        strokeWidth="2"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      <h4 className="text-gray-300 font-bold">Bonus eBook</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{selectedTraining.ebook.title}</p>
                    <p className="text-gray-300 text-xs">{selectedTraining.ebook.description}</p>
                  </div>

                  {/* Consultation */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-primary"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <h4 className="text-primary font-bold">1h Konsultacji</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{selectedTraining.consultation}</p>
                  </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-primary text-4xl font-bold">{selectedTraining.price} PLN</div>
                    <div className="text-gray-300 text-sm">
                      + VAT (brutto: {(selectedTraining.price * 1.23).toFixed(2)} PLN)
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedTraining.id, 'training', selectedTraining.title, selectedTraining.price)
                      setSelectedTraining(null)
                    }}
                    className="px-10 py-4 bg-primary text-black hover:bg-primary/90 transition-all duration-300 rounded-full text-lg font-bold"
                  >
                    Dodaj do koszyka 🛒
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
