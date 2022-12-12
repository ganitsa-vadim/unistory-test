pipeline {
    agent any

    stages {
        stage('prepare environment'){
            steps {
                // echo "IMAGE_TAG=${BUILD_NUMBER}" > .env
                sh "echo DANGEROUSLY_DISABLE_HOST_CHECK=true >> .env"
                sh "echo IMAGE_TAG=${BUILD_NUMBER} >> .env"
                sh "echo APP_PORT=4200 >> .env"
                sh "cat .env"
            }
        }
        stage('build'){
            steps {
                echo "Test"
            }
        }
    }
}