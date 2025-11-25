pipeline {
    agent any

    stages {

        stage('Pull Latest Image') {
            steps {
                sh 'docker pull $DOCKER_USER/hello-devops:latest'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh 'docker rm -f hello-devops || true'
            }
        }

        stage('Run New Version') {
            steps {
                sh '''
                    docker run -d \
                    --name hello-devops \
                    -p 80:3000 \
                    $DOCKER_USER/hello-devops:latest
                '''
            }
        }
    }
}
