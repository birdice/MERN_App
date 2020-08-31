pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'ls'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                sh 'cd backend && npm install && npm start'
                input message: 'Terminó el DEMO del TFM para UNIR? (Click "Proceed" para continuar)?'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
