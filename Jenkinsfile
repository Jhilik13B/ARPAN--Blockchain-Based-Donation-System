pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t arpan-app -f Dockerfile chaingive'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 arpan-app'
            }
        }
    }
}
