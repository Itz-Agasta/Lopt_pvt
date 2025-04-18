# FROM python:3.12

# ENV PYTHONUNBUFFERED=1

# WORKDIR /app/

# # Install Rust compiler
# RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
# ENV PATH="/root/.cargo/bin:${PATH}"

# # Install uv
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#installing-uv
# COPY --from=ghcr.io/astral-sh/uv:0.5.11 /uv /uvx /bin/

# # Place executables in the environment at the front of the path
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#using-the-environment
# ENV PATH="/app/.venv/bin:$PATH"

# # Compile bytecode
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#compiling-bytecode
# ENV UV_COMPILE_BYTECODE=1

# # uv Cache
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#caching
# ENV UV_LINK_MODE=copy

# # Install dependencies
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers
# RUN --mount=type=cache,target=/root/.cache/uv \
#     --mount=type=bind,source=uv.lock,target=uv.lock \
#     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
#     uv sync --frozen --no-install-project

# ENV PYTHONPATH=/app


# COPY ./pyproject.toml ./uv.lock  /app/

# COPY ./app /app/app

# # Sync the project
# # Ref: https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers
# RUN --mount=type=cache,target=/root/.cache/uv \
#     uv sync

# CMD ["fastapi", "run", "--workers", "4", "app/main.py"]

# ──── STAGE 1: Builder ────────────────────────────────────────────────
FROM python:3.12-slim AS builder

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Install build tools & curl
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential curl \
    && rm -rf /var/lib/apt/lists/*

# Install Rust (needed by uv for bytecode compilation)
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Pull in uv & uvx executables
COPY --from=ghcr.io/astral-sh/uv:0.5.11 /uv /uvx /bin/

# Prep our virtualenv + UV settings
ENV PATH="/app/.venv/bin:${PATH}" \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

# Create venv & install Python deps 
COPY pyproject.toml uv.lock ./
RUN python -m venv .venv

# Install all dependencies into the venv
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project

# Copy /app dir and compile its bytecode
COPY app/ ./app
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync

# ──── STAGE 2: Runtime ────────────────────────────────────────────────
FROM python:3.12-slim AS runtime

ENV PYTHONUNBUFFERED=1 \
    PATH="/app/.venv/bin:${PATH}" \
    UV_COMPILE_BYTECODE=1

WORKDIR /app

# Bring in only what we need for runtime:
COPY --from=builder /app/.venv    /app/.venv
COPY --from=builder /bin/uv       /bin/uv
COPY --from=builder /bin/uvx      /bin/uvx
COPY --from=builder /app/app      /app/app


CMD ["fastapi", "run", "--workers", "4", "app/main.py"]


