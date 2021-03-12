pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                 sh 'killall node'
                 sh 'npm run start'
             }
        }
    }
}
