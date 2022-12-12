pipeline {
    agent any

    stages {
        stage('prepare environment'){
            steps {
                sh "echo DANGEROUSLY_DISABLE_HOST_CHECK=true >> .env"
                sh "echo IMAGE_TAG=${BUILD_NUMBER} >> .env"
                sh "echo APP_PORT=4201 >> .env"
                sh "cat .env"
            }
        }
        stage('build'){
            steps {
                sh "docker-compose build"
                sh "docker image ls"
            }
        }
        stage('start-app'){
            steps {
                sh "docker-compose up -d"
            }
        }
    }
}