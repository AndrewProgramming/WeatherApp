pipeline {
/*     agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
            args '-u 0:0'
        }
    } */
    agent any

    tools{nodejs node}

    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                 sh './scripts/deploy.sh'
             }
        }
    }
}