# 🚀 Hello DevOps CI/CD Pipeline

This project demonstrates a full CI/CD pipeline using:
- GitHub Actions (CI)
- Docker
- Docker Hub (Registry)
- Jenkins (CD)

## 🧱 Architecture
---
Developer → GitHub → GitHub Actions → Docker Hub → Jenkins → Server Deployment
---

## ✔ Features
- Automatic testing
- Docker image building
- Auto-push to Docker Hub
- Automatic deployment via Jenkins

## 🌐 Final Result
Open:
http://YOUR-SERVER-IP/

You will see:
"Hello DevOps CI/CD Pipeline!"

---

           ┌───────────────┐
           │   Developer   │
           └───────┬───────┘
                   │ git push
           ┌───────▼────────┐
           │   GitHub Repo  │
           └───────┬────────┘
                   │ triggers CI
           ┌───────▼─────────────┐
           │ GitHub Actions (CI) │
           │ Build • Test • Push │
           └───────┬─────────────┘
                   │ docker push
           ┌───────▼───────────┐
           │    Docker Hub     │
           └───────┬───────────┘
                   │ docker pull
           ┌───────▼───────────┐
           │   Jenkins (CD)    │
           │ Deploy Container  │
           └───────┬───────────┘
                   │
           ┌───────▼───────────┐
           │  Running App      │
           └───────────────────┘

---