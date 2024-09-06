# Node.js avec Docker Compose, Jest et CI/CD
Ce projet est une application Node.js configurée pour s'exécuter dans des conteneurs Docker. Il inclut des tests unitaires avec Jest et des pipelines CI pour GitHub Actions, GitLab CI et Jenkins.

## Prérequis
- Docker
- Docker Compose

## Installation
1. Clonez le dépôt :
    ```bash
    git clone https://github.com/nicolasvauche/testing_sf.git
    ```
2. Construisez et lancez les conteneurs Docker :
    ```bash
    docker-compose up -d
    ```
3. Accédez à l'application :  
    Ouvrez votre navigateur et accédez à `http://localhost:3000/hello/<votre-prenom>`.