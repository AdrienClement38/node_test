pipeline {
    agent {
        docker {
            image 'node:21'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {

        stage('Install Node.js dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Linter') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Script') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Test Echo') {
            steps {
                echo 'Hello, Jenkins pipeline is working with Docker and npm install!'
            }
        }
    }
}