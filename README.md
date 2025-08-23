# 🚀 DevOps Mini Project - CI/CD Pipeline with Docker

A complete DevOps demonstration project showcasing modern CI/CD practices using Node.js, Docker, and GitHub Actions.

## 📋 Project Overview

This project demonstrates a full DevOps workflow including:
- **Containerized Application**: Node.js web application with Docker
- **Automated CI/CD Pipeline**: GitHub Actions for testing, building, and deployment simulation
- **Health Monitoring**: Built-in health check endpoints
- **Production-Ready**: Multi-stage Docker builds with security best practices

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions
- **Runtime**: Node.js 18 (Alpine Linux)
- **Health Checks**: Built-in health monitoring

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Source Code   │ →  │  GitHub Actions │ →  │ Docker Container│
│                 │    │    CI/CD        │    │   Deployment    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## ⚡ Features

- **Automated Testing**: Runs tests on every push and pull request
- **Docker Integration**: Containerized application with health checks
- **CI/CD Pipeline**: Automated build, test, and deployment simulation
- **Health Monitoring**: `/health` endpoint for monitoring application status
- **Artifact Management**: Docker images saved as CI/CD artifacts
- **Production Ready**: Optimized Docker image with security best practices

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/kithmini11/devops-mini-project.git
cd devops-mini-project

# Install dependencies
npm install

# Start the application
npm start

# Access the application
open http://localhost:8080
```

### Docker Deployment

```bash
# Build Docker image
docker build -t devops-mini-app .

# Run container
docker run -p 8080:8080 devops-mini-app

# Health check
curl http://localhost:8080/health
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes three main jobs:

### 1. **Test Job**
- ✅ Code checkout
- ✅ Node.js environment setup
- ✅ Dependency installation
- ✅ Test execution
- ✅ Application startup verification

### 2. **Docker Build Job**
- 🐳 Docker image building
- 🧪 Container testing
- 📦 Artifact creation and upload

### 3. **Deployment Simulation**
- 📥 Artifact download
- 🚀 Container deployment
- ✅ Health check verification
- 🧹 Environment cleanup

## 📊 Pipeline Status

The CI/CD pipeline automatically triggers on:
- **Push to main branch**: Full pipeline (test → build → deploy)
- **Pull requests**: Test job only

## 🔍 Health Monitoring

The application includes a health check endpoint:

```bash
GET /health
```

Response:
```json
{
  "status": "OK",
  "timestamp": "2025-08-23T10:30:00.000Z",
  "version": "1.0.0"
}
```

## 📁 Project Structure

```
devops-mini-project/
├── app.js                    # Main application file
├── package.json             # Node.js dependencies
├── Dockerfile              # Container configuration
├── .github/workflows/       # CI/CD pipeline
│   └── ci-cd.yml           # GitHub Actions workflow
└── README.md               # Project documentation
```

## 🔧 Configuration

### Environment Variables

- `PORT`: Application port (default: 8080)
- `HOSTNAME`: Host identifier for deployment tracking

### Docker Configuration

- **Base Image**: `node:18-alpine`
- **Working Directory**: `/usr/src/app`
- **Exposed Port**: `8080`
- **Health Check**: 30-second intervals

## 🎯 DevOps Best Practices Demonstrated

1. **Infrastructure as Code**: Dockerfile and CI/CD configuration
2. **Automated Testing**: Continuous integration with automated tests
3. **Containerization**: Docker for consistent deployments
4. **Pipeline as Code**: GitHub Actions workflow
5. **Health Monitoring**: Built-in application health checks
6. **Artifact Management**: Docker image artifacts
7. **Environment Separation**: Production-ready configurations

## 🔮 Future Enhancements

- [ ] Kubernetes deployment manifests
- [ ] Integration with cloud providers (AWS/Azure/GCP)
- [ ] Advanced monitoring with Prometheus/Grafana
- [ ] Database integration
- [ ] Load testing automation
- [ ] Security scanning integration

## 📈 Learning Outcomes

This project demonstrates proficiency in:
- **DevOps Practices**: CI/CD pipeline design and implementation
- **Containerization**: Docker best practices and multi-stage builds
- **Automation**: GitHub Actions workflow development
- **Monitoring**: Application health check implementation
- **Version Control**: Git workflow and branch protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/kithmini11/devops-mini-project)
- **CI/CD Pipeline**: [GitHub Actions](https://github.com/kithmini11/devops-mini-project/actions)

---

**Built with ❤️ for learning DevOps practices**
