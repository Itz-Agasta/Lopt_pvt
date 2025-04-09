# Repo structure

```bash
models/
├── image/
│   ├── notebooks/
│   │   └── Virtus.ipynb     # Jupyter notebook for training/fine-tuning
│   │
│   ├── datasets/
│   │   ├── test/
│   │   ├── train/
│   │   └── validation/
│   │
│   ├── outputs/
│   │   ├── Virtus.pt                   # Trained model checkpoint (PyTorch format)
│   │   └── metadata.json               # Info: model arch, accuracy, dataset used, etc.
│   │
│   ├── scripts/
│   │   └── train.py                    # CLI-style training script
│   │
│   └── README.md                       # Image model-specific notes

├── video/
│   ├── notebooks/
│   │   └── Scarlet.ipynb              # Jupyter notebook for fine-tuning video model
│   │
│   ├── datasets/
│   │
│   ├── outputs/
│   │   ├── Scarlet.pt                  # Trained model checkpoint
│   │   └── metrics.json                # Evaluation metrics (AUC, F1, etc.)
│   │
│   ├── scripts/
│   │   └── train.py                    # (Optional) Video training CLI
│   │
│   └── README.md                       # Video model-specific documentation

├── utils/
│   ├── preprocessing.py                # Shared preprocessing for both image/video
│   ├── augmentation.py                 # Augmentations used in training pipelines
│   └── __init__.py

└── README.md                           # Top-level explanation of model types and usage

```
