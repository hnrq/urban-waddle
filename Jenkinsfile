pipeline {
    agent any
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
                sh '/var/lib/jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh '/var/lib/jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh '/var/lib/jenkins/scripts/kill.sh'
            }
        }
    }
}
