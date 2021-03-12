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
                 sh 'kill -9 $(lsof -t -i:3001)'
                 sh 'npm run start'
             }
        }
    }
}
