pipeline {
    agent any

    environment {
        DOCKER_USER = 'charanp2006'
        CONTAINER_NAME = 'hello-devops'
        CONTAINER_PORT = '3000'
    }

    stages {
        stage('Pull Latest Image') {
            steps {
                bat 'docker pull %DOCKER_USER%/%CONTAINER_NAME%:latest'
            }
        }

        stage('Stop Existing Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% 2>nul || exit 0
                docker rm %CONTAINER_NAME% 2>nul || exit 0
                '''
            }
        }

        stage('Find Free Host Port') {
            steps {
                script {
                    def freePort = 0
                    for (int port = 3000; port <= 3010; port++) {
                        def result = bat(script: "netstat -ano | findstr :${port}", returnStatus: true)
                        if (result != 0) {
                            freePort = port
                            break
                        }
                    }
                    if (freePort == 0) {
                        error "No free port found in range 3000-3010"
                    }
                    env.HOST_PORT = freePort.toString()
                    echo "Using host port: ${env.HOST_PORT}"
                }
            }
        }

        stage('Run New Container') {
            steps {
                bat '''
                docker run -d -p %HOST_PORT%:%CONTAINER_PORT% --name %CONTAINER_NAME% %DOCKER_USER%/%CONTAINER_NAME%:latest
                '''
                script {
                    def appUrl = "http://localhost:${env.HOST_PORT}"
                    echo "✅ Your app is running at: ${appUrl}"
                }
            }
        }
    }
}
