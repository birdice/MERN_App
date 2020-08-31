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
                sh 'ls /var/jenkins_home/workspace/UNIR_MERN_App_Pipeline'
                sh 'npm install'
                sh 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)?'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
