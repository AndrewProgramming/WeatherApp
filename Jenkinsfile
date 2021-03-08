pipeline {
     agent {
        docker {
            image 'node:14.16.0-alpine3.10'
            args '-p 3001:3001'
            args '-u 0:0'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                 sh 'npm run start'
             }
        }
    }
}