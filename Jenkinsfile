pipeline {
     agent {
        docker {
            image 'node:6-alpine'
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
                 sh 'nodemon src/app.js -e js,hbs'
             }
        }
    }
}