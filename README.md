# Lopt

Lopt is an AI-powered platform for detecting deepfakes in both images and videos. It combines a lightweight, modern frontend with a robust FastAPI backend and fine-tuned machine learning models to analyze media for signs of tampering and manipulation.

# Repo structure

```bash
lopt/
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page-level components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API service layer
│   │   ├── styles/            # CSS/styled-components
│   │   ├── App.jsx            # Main app logic
│   │   └── index.jsx          # Entry point
│   ├── .env                   # Frontend environment config
│   ├── package.json
│   └── README.md

├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── endpoints/     # Route handlers (upload.py, job.py, health.py)
│   │   ├── core/              # Configuration & environment management
│   │   ├── models/            # Pydantic request/response schemas
│   │   ├── services/          # Inference & video/image processing
│   │   ├── tasks/             # Async processing (Celery)
│   │   ├── main.py            # Entry point for FastAPI app
│   │   └── __init__.py
│   ├── tests/                 # Backend tests
│   ├── Dockerfile             # Backend container definition
│   ├── Pyproject.toml         # Python dependencies
│   ├── celery_worker.py       # Worker process (Celery)
│   └── README.md

├── models/
│   ├── Virtus.pt              # Image-based deepfake detection model
│   ├── Scarlet.pt             # Video-based deepfake detection model
│   └── README.md

├── infrastructure/            # Deployment & orchestration
│   ├── docker-compose.yml
│   └── k8s/

├── .gitignore
├── README.md
└── LICENSE
```
