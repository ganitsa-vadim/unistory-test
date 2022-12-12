pipeline {
    agent any

    stages {
        stage('prepare environment'){
            steps {
                echo IMAGE_TAG="${BUILD_NUMBER}" > .env
            }
        }
        stage('build'){
            steps {
                echo "Test"
            }
        }
    }
}