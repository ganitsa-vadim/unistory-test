pipeline {
    agent any

    stages {
        stage('prepare environment'){
            steps {
                echo "IMAGE_TAG=${BUILD_NUMBER}" > .env
                sh "echo IMAGE_TAG=${BUILD_NUMBER} >> build.sbt"
                cat .env
            }
        }
        stage('build'){
            steps {
                echo "Test"
            }
        }
    }
}